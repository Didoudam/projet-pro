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
        <div className="bg-yellow-50 border-b border-yellow-200">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                        <span className="text-yellow-600 text-xl">{StatsIcons.warning}</span>
                        <div>
                            <p className="text-sm font-medium text-yellow-800">
                                Votre email n'est pas encore vérifié
                            </p>
                            <p className="text-xs text-yellow-700">
                                Consultez votre boîte mail pour vérifier votre adresse email et accéder à toutes les fonctionnalités.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
