"use client";

import { SignUpForm, SignInForm } from "@/features/signUp";
import { useState } from "react";

export default function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    {/* Tabs pour switcher entre connexion et inscription */}
                    <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setIsSignUp(false)}
                            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                                !isSignUp
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Connexion
                        </button>
                        <button
                            onClick={() => setIsSignUp(true)}
                            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                                isSignUp
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Inscription
                        </button>
                    </div>

                    {/* Titre dynamique */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {isSignUp ? "Créer un compte" : "Bon retour !"}
                        </h1>
                        <p className="text-gray-600">
                            {isSignUp
                                ? "Rejoignez notre plateforme professionnelle"
                                : "Connectez-vous à votre compte"}
                        </p>
                    </div>

                    {/* Affichage conditionnel des formulaires */}
                    {isSignUp ? <SignUpForm /> : <SignInForm />}
                </div>
            </div>
        </div>
    );
}
