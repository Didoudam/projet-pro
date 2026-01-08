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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Message d'erreur global */}
            {error && (
                <div className="bg-error/10 border-2 border-error px-4 py-3">
                    <p className="text-error font-mono text-xs">{error}</p>
                </div>
            )}

            {/* Email */}
            <div>
                <label
                    htmlFor="signin-email"
                    className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
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
                    className="w-full px-4 py-3 bg-input border-2 border-border font-mono text-sm focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                    disabled={isLoading}
                />
                {errors.email && (
                    <span className="text-error text-xs font-mono mt-1 block">
                        {errors.email.message}
                    </span>
                )}
            </div>

            {/* Mot de passe */}
            <div>
                <label
                    htmlFor="signin-password"
                    className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
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
                    className="w-full px-4 py-3 bg-input border-2 border-border font-mono text-sm focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                    disabled={isLoading}
                />
                {errors.password && (
                    <span className="text-error text-xs font-mono mt-1 block">
                        {errors.password.message}
                    </span>
                )}
            </div>

            {/* Bouton submit */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground py-4 px-4 border-2 border-border font-mono uppercase font-bold text-sm hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? "Connexion..." : "Se connecter"}
            </button>
        </form>
    );
}
