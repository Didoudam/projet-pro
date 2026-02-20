"use client";

import { SignUpForm, SignInForm } from "@/features/signUp";
import { useState } from "react";

export default function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(true);

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
                <div className="bg-card border-2 border-border shadow-[4px_4px_0px_0px_var(--shadow-color)] p-8">
                    {/* Tabs pour switcher entre connexion et inscription */}
                    <div className="flex gap-0 mb-8 border-2 border-border">
                        <button
                            onClick={() => setIsSignUp(false)}
                            className={`flex-1 py-3 px-4 font-mono uppercase text-sm font-bold transition-all ${
                                !isSignUp
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                            }`}
                        >
                            Connexion
                        </button>
                        <button
                            onClick={() => setIsSignUp(true)}
                            className={`flex-1 py-3 px-4 font-mono uppercase text-sm font-bold transition-all border-l-2 border-border ${
                                isSignUp
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                            }`}
                        >
                            Inscription
                        </button>
                    </div>

                    {/* Titre dynamique */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-foreground mb-2">
                            {isSignUp ? "Créer un compte" : "Connectez-vous à votre compte"}
                        </h2>
                    </div>

                    {/* Affichage conditionnel des formulaires */}
                    {isSignUp ? <SignUpForm /> : <SignInForm />}
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
