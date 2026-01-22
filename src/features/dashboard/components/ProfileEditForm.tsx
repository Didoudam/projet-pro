"use client";

import { useState } from "react";
import { User } from "@prisma/client";
import { useToastStore } from "@/stores/useToastStore";
import { useRouter } from "next/navigation";
import { patchJson } from "@/lib/fetch-utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface ProfileEditFormProps {
    user: User;
    onCancel: () => void;
}

export function ProfileEditForm({ user, onCancel }: ProfileEditFormProps) {
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    const [image, setImage] = useState(user.image || "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { success, error } = useToastStore();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await patchJson(`/api/users/${user.id}`, {
                firstName: firstName.trim() || null,
                lastName: lastName.trim() || null,
                image: image.trim() || null,
            });

            success("Profil mis à jour avec succès !");
            router.refresh();
            onCancel();
        } catch (err) {
            error("Erreur lors de la mise à jour du profil");
            console.error("Erreur mise à jour profil:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card>
            <CardHeader pattern="grid">
                <CardTitle mono>Modifier le profil</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Prénom */}
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                        >
                            Prénom
                        </label>
                        <Input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Jean"
                        />
                    </div>

                    {/* Nom */}
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                        >
                            Nom
                        </label>
                        <Input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Dupont"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                        >
                            URL de l'image de profil
                        </label>
                        <Input
                            type="url"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://example.com/photo.jpg"
                        />
                    </div>

                    {/* Boutons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            variant="primary"
                            className="flex-1"
                        >
                            {isSubmitting ? "Enregistrement..." : "Enregistrer"}
                        </Button>
                        <Button
                            type="button"
                            onClick={onCancel}
                            disabled={isSubmitting}
                            variant="outline"
                            className="flex-1"
                        >
                            Annuler
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
