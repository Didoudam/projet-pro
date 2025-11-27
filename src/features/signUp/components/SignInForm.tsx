"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SignInFormData = {
    email: string;
    password: string;
};

export function SignInForm() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>();

    const onSubmit = async (data: SignInFormData) => {
        setError(null);
        setIsLoading(true);

        try {
            const result = await authClient.signIn.email({
                email: data.email,
                password: data.password,
            });

            if (result.error) {
                setError("Email ou mot de passe incorrect");
                setIsLoading(false);
                return;
            }

            // Redirection vers la page d'accueil
            router.push("/");
            router.refresh();
        } catch (err) {
            setError("Une erreur est survenue. Veuillez réessayer.");
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Message d'erreur global */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {/* Email */}
            <div>
                <label
                    htmlFor="signin-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email
                </label>
                <input
                    type="email"
                    {...register("email", {
                        required: "L'email est requis",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email invalide",
                        },
                    })}
                    id="signin-email"
                    placeholder="jean.dupont@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isLoading}
                />
                {errors.email && (
                    <span className="text-red-500 text-sm mt-1 block">
                        {errors.email.message}
                    </span>
                )}
            </div>

            {/* Mot de passe */}
            <div>
                <label
                    htmlFor="signin-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Mot de passe
                </label>
                <input
                    type="password"
                    {...register("password", {
                        required: "Le mot de passe est requis",
                    })}
                    id="signin-password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isLoading}
                />
                {errors.password && (
                    <span className="text-red-500 text-sm mt-1 block">
                        {errors.password.message}
                    </span>
                )}
            </div>

            {/* Bouton submit */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
            </button>
        </form>
    );
}
