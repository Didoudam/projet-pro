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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* En-tête */}
                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-2xl">PP</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Projet Pro
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Votre réseau social professionnel
                    </p>
                </div>

                {/* Card avec onglets */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Onglets */}
                    <div className="flex border-b">
                        <button
                            onClick={() => setActiveTab("signin")}
                            className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                                activeTab === "signin"
                                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                        >
                            Connexion
                        </button>
                        <button
                            onClick={() => setActiveTab("signup")}
                            className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                                activeTab === "signup"
                                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                        >
                            Inscription
                        </button>
                    </div>

                    {/* Contenu des onglets */}
                    <div className="p-6">
                        {activeTab === "signin" ? (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Connectez-vous à votre compte
                                </h3>
                                <SignInForm />
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Créer un compte
                                </h3>
                                <SignUpForm />
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    En vous inscrivant, vous acceptez nos{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        conditions d'utilisation
                    </a>{" "}
                    et notre{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        politique de confidentialité
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
