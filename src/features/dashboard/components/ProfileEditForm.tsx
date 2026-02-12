"use client";

import { useState } from "react";
import { User } from "@prisma/client";
import { useToastStore } from "@/stores/useToastStore";
import { useRouter } from "next/navigation";
import { patchJson } from "@/lib/fetch-utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { authClient } from "@/lib/auth-client";

interface ProfileEditFormProps {
    user: User;
    onCancel: () => void;
}

export function ProfileEditForm({ user, onCancel }: ProfileEditFormProps) {
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    const [image, setImage] = useState(user.image || "");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Menu déroulant informations de connexion
    const [isConnectionInfoOpen, setIsConnectionInfoOpen] = useState(false);

    // Champs pour email
    const [newEmail, setNewEmail] = useState("");
    const [isChangingEmail, setIsChangingEmail] = useState(false);

    // Champs pour mot de passe
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isChangingPassword, setIsChangingPassword] = useState(false);

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

    const handleChangeEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newEmail.trim()) {
            error("Veuillez entrer un nouvel email");
            return;
        }

        setIsChangingEmail(true);
        try {
            const result = await authClient.changeEmail({
                newEmail: newEmail.trim(),
            });

            if (result.error) {
                error(result.error.message || "Erreur lors du changement d'email");
            } else {
                success("Un email de confirmation a été envoyé à votre nouvelle adresse");
                setNewEmail("");
            }
        } catch (err) {
            error("Erreur lors du changement d'email");
            console.error("Erreur changement email:", err);
        } finally {
            setIsChangingEmail(false);
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentPassword || !newPassword || !confirmPassword) {
            error("Veuillez remplir tous les champs");
            return;
        }

        if (newPassword !== confirmPassword) {
            error("Les mots de passe ne correspondent pas");
            return;
        }

        if (newPassword.length < 8) {
            error("Le mot de passe doit faire au moins 8 caractères");
            return;
        }

        setIsChangingPassword(true);
        try {
            const result = await authClient.changePassword({
                currentPassword,
                newPassword,
            });

            if (result.error) {
                error(result.error.message || "Erreur lors du changement de mot de passe");
            } else {
                success("Mot de passe modifié avec succès");
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
            }
        } catch (err) {
            error("Erreur lors du changement de mot de passe");
            console.error("Erreur changement mot de passe:", err);
        } finally {
            setIsChangingPassword(false);
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

            {/* Menu déroulant - Informations de connexion */}
            <div className="border-t-2 border-border">
                <button
                    type="button"
                    onClick={() => setIsConnectionInfoOpen(!isConnectionInfoOpen)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    aria-expanded={isConnectionInfoOpen}
                    aria-controls="connection-info-panel"
                >
                    <span className="font-mono text-sm font-bold uppercase tracking-wider">
                        Modifier les informations de connexion
                    </span>
                    <svg
                        className={`w-5 h-5 transition-transform duration-200 ${isConnectionInfoOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div
                    id="connection-info-panel"
                    className={`overflow-hidden transition-all duration-300 ${isConnectionInfoOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    {/* Section Changement d'email */}
                    <div className="px-6 py-4 border-t border-border/50">
                        <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-4">
                            Changer l&apos;email
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Email actuel : <span className="font-mono">{user.email}</span>
                        </p>
                        <form onSubmit={handleChangeEmail} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="newEmail"
                                    className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                                >
                                    Nouvel email
                                </label>
                                <Input
                                    type="email"
                                    id="newEmail"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    placeholder="nouveau@email.com"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isChangingEmail || !newEmail.trim()}
                                variant="primary"
                            >
                                {isChangingEmail ? "Envoi en cours..." : "Changer l'email"}
                            </Button>
                        </form>
                    </div>

                    {/* Section Changement de mot de passe */}
                    <div className="px-6 py-4 border-t border-border/50">
                        <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-4">
                            Changer le mot de passe
                        </h3>
                        <form onSubmit={handleChangePassword} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="currentPassword"
                                    className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                                >
                                    Mot de passe actuel
                                </label>
                                <Input
                                    type="password"
                                    id="currentPassword"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="newPassword"
                                    className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                                >
                                    Nouveau mot de passe
                                </label>
                                <Input
                                    type="password"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
                                <p className="text-xs text-muted-foreground mt-1">
                                    Minimum 8 caractères, avec majuscule, minuscule, chiffre et caractère spécial
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                                >
                                    Confirmer le mot de passe
                                </label>
                                <Input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isChangingPassword || !currentPassword || !newPassword || !confirmPassword}
                                variant="primary"
                            >
                                {isChangingPassword ? "Modification..." : "Changer le mot de passe"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Card>
    );
}
