"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface ProfileCardProps {
    user: User;
}

export function ProfileCard({ user }: ProfileCardProps) {
    const displayName =
        user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.name;

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col items-center">
                {/* Avatar */}
                {user.image ? (
                    <Image
                        src={user.image}
                        alt={displayName}
                        width={120}
                        height={120}
                        className="rounded-full object-cover mb-4"
                    />
                ) : (
                    <div className="w-30 h-30 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold mb-4">
                        {displayName.charAt(0).toUpperCase()}
                    </div>
                )}

                {/* Informations */}
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {displayName}
                </h2>

                <p className="text-gray-600 mb-4">{user.email}</p>

                {/* Badge de vérification */}
                {user.emailVerified ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        ✓ Email vérifié
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        ⚠ Email non vérifié
                    </span>
                )}
            </div>

            {/* Informations supplémentaires */}
            <div className="mt-6 pt-6 border-t space-y-3">
                {user.firstName && (
                    <div>
                        <span className="text-sm text-gray-500">Prénom:</span>
                        <p className="text-gray-900 font-medium">
                            {user.firstName}
                        </p>
                    </div>
                )}
                {user.lastName && (
                    <div>
                        <span className="text-sm text-gray-500">Nom:</span>
                        <p className="text-gray-900 font-medium">
                            {user.lastName}
                        </p>
                    </div>
                )}
                <div>
                    <span className="text-sm text-gray-500">
                        Membre depuis:
                    </span>
                    <p className="text-gray-900 font-medium">
                        {new Date(user.createdAt).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}
