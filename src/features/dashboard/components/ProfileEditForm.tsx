"use client";

import { useState } from "react";
import { User } from "@prisma/client";
import { useToastStore } from "@/stores/useToastStore";
import { useRouter } from "next/navigation";
import { patchJson } from "@/lib/fetch-utils";

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
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Modifier le profil</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Prénom */}
                <div>
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Jean"
                    />
                </div>

                {/* Nom */}
                <div>
                    <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Nom
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Dupont"
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        URL de l'image de profil
                    </label>
                    <input
                        type="url"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://example.com/photo.jpg"
                    />
                </div>

                {/* Boutons */}
                <div className="flex gap-3 pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Enregistrement..." : "Enregistrer"}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={isSubmitting}
                        className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
}
