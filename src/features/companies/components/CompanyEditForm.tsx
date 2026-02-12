"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToastStore } from "@/stores/useToastStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface CompanyEditFormProps {
    company: {
        id: string;
        name: string;
        activity: string | null;
        image: string | null;
        description: string | null;
    };
}

export function CompanyEditForm({ company }: CompanyEditFormProps) {
    const [name, setName] = useState(company.name);
    const [activity, setActivity] = useState(company.activity || "");
    const [image, setImage] = useState(company.image || "");
    const [description, setDescription] = useState(company.description || "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { success, error } = useToastStore();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`/api/companies/${company.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.trim(),
                    activity: activity.trim() || null,
                    image: image.trim() || null,
                    description: description.trim() || null,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                error(data.message || "Erreur lors de la mise à jour");
                return;
            }

            success("Entreprise mise à jour avec succès");
            router.refresh();
        } catch (err) {
            console.error("Erreur:", err);
            error("Erreur lors de la mise à jour de l'entreprise");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card>
            <CardHeader pattern="grid">
                <CardTitle mono>Informations de l&apos;entreprise</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                        >
                            Nom de l&apos;entreprise *
                        </label>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nom de l'entreprise"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="activity"
                            className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                        >
                            Secteur d&apos;activité
                        </label>
                        <Input
                            type="text"
                            id="activity"
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            placeholder="Ex: Technologies, Finance, Santé..."
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                        >
                            URL du logo
                        </label>
                        <Input
                            type="url"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://example.com/logo.png"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description de l'entreprise..."
                            rows={4}
                            className="w-full px-3 py-2 border-2 border-border bg-background text-foreground font-mono text-sm focus:outline-none focus:border-primary resize-none"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting || !name.trim()}
                            variant="primary"
                            className="flex-1"
                        >
                            {isSubmitting ? "Enregistrement..." : "Enregistrer les modifications"}
                        </Button>
                        <Button
                            type="button"
                            onClick={() => router.back()}
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
