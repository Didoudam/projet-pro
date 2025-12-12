"use client";

import { useSession } from "@/lib/auth-client";
import { StatsIcons } from "@/lib/icons";

export function EmailVerificationBanner() {
    const { data: session } = useSession();

    // Afficher seulement si connecté et email non vérifié
    if (!session?.user || session.user.emailVerified) {
        return null;
    }

    return (
        <div className="bg-primary/20 border-b-2 border-primary">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                        <span className="text-primary text-xl font-bold border-2 border-primary w-8 h-8 flex items-center justify-center">{StatsIcons.warning}</span>
                        <div>
                            <p className="text-sm font-bold text-primary font-mono uppercase tracking-wider">
                                Votre email n'est pas encore vérifié
                            </p>
                            <p className="text-xs text-foreground font-mono">
                                Consultez votre boîte mail pour vérifier votre adresse email et accéder à toutes les fonctionnalités.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
