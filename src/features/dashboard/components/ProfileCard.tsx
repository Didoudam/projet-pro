"use client";

import { User } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";

interface ProfileCardProps {
    user: User;
}

export function ProfileCard({ user }: ProfileCardProps) {
    const displayName =
        user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.name;

    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                    {/* Avatar */}
                    <Avatar
                        src={user.image}
                        alt={displayName}
                        size={120}
                        className="mb-4"
                    />

                    {/* Informations */}
                    <h2 className="text-2xl font-bold text-foreground mb-1 font-mono uppercase tracking-wide">
                        {displayName}
                    </h2>

                    <p className="text-muted-foreground mb-4 font-mono text-sm">{user.email}</p>

                    {/* Badge de vérification */}
                    {user.emailVerified ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent-foreground border-2 border-accent rounded-none text-sm font-medium font-mono uppercase tracking-wide">
                            ✓ Email vérifié
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary-foreground border-2 border-secondary rounded-none text-sm font-medium font-mono uppercase tracking-wide">
                            ⚠ Email non vérifié
                        </span>
                    )}
                </div>

                {/* Informations supplémentaires */}
                <div className="mt-6 pt-6 border-t-2 border-border space-y-3">
                    {user.firstName && (
                        <div>
                            <span className="text-sm text-muted-foreground font-mono uppercase tracking-wide">Prénom:</span>
                            <p className="text-foreground font-medium">
                                {user.firstName}
                            </p>
                        </div>
                    )}
                    {user.lastName && (
                        <div>
                            <span className="text-sm text-muted-foreground font-mono uppercase tracking-wide">Nom:</span>
                            <p className="text-foreground font-medium">
                                {user.lastName}
                            </p>
                        </div>
                    )}
                    <div>
                        <span className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                            Membre depuis:
                        </span>
                        <p className="text-foreground font-medium font-mono">
                            {new Date(user.createdAt).toLocaleDateString("fr-FR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
