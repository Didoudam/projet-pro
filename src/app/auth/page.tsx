"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SignUpForm } from "@/features/signUp/components/SignUpForm";
import { SignInForm } from "@/features/signUp/components/SignInForm";

export default function AuthPage() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

    useEffect(() => {
        if (tabParam === "signin" || tabParam === "signup") {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    return (
        <div className="min-h-screen bg-background pattern-dots flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo/Titre */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary border-2 border-border mb-4">
                        <span className="text-white font-bold text-3xl font-mono">PP</span>
                    </div>
                    <h1 className="text-2xl font-bold text-foreground font-mono uppercase tracking-wider">
                        Projet Pro
                    </h1>
                    <p className="text-muted-foreground text-sm font-mono mt-2 uppercase tracking-wide">
                        Réseau social professionnel
                    </p>
                </div>

                {/* Conteneur principal */}
                <div className="bg-card border-2 border-border shadow-[4px_4px_0px_0px_var(--shadow-color)] p-4 sm:p-6 md:p-8">
                    {/* Tabs pour switcher entre connexion et inscription */}
                    <div className="flex gap-0 mb-6 sm:mb-8 border-2 border-border">
                        <button
                            onClick={() => setActiveTab("signin")}
                            className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 font-mono uppercase text-xs sm:text-sm font-bold transition-all ${
                                activeTab === "signin"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                            }`}
                        >
                            Connexion
                        </button>
                        <button
                            onClick={() => setActiveTab("signup")}
                            className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 font-mono uppercase text-xs sm:text-sm font-bold transition-all border-l-2 border-border ${
                                activeTab === "signup"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                            }`}
                        >
                            Inscription
                        </button>
                    </div>

                    {/* Titre dynamique */}
                    <div className="mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                            {activeTab === "signin" ? "Connectez-vous à votre compte" : "Créer un compte"}
                        </h2>
                    </div>

                    {/* Affichage conditionnel des formulaires */}
                    {activeTab === "signin" ? <SignInForm /> : <SignUpForm />}
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground">
                        En vous inscrivant, vous acceptez nos <a href="#" className="text-primary underline">conditions d&apos;utilisation</a> et notre <a href="#" className="text-primary underline">politique de confidentialité</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
