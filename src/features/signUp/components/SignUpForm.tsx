"use client";

import { authClient } from "@/lib/auth-client";
import { yupResolver } from "@hookform/resolvers/yup";
import { userCreateSchema, CreateUserSchemaType } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { useToastStore } from "@/stores/useToastStore";

export function SignUpForm() {
    const { success, error } = useToastStore();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserSchemaType>({
        resolver: yupResolver(userCreateSchema),
    });

    const onSubmit = async (data: CreateUserSchemaType) => {
        try {
            console.log("Données d'inscription:", data);

            // Construire le nom complet à partir du prénom et nom
            const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim();

            console.log("Envoi de la requête d'inscription...");
            const result = await authClient.signUp.email({
                email: data.email,
                password: data.password,
                name: fullName,
            });

            console.log("Résultat de l'inscription:", result);

            if (result.error) {
                console.error("Erreur d'inscription:", result.error);
                error(result.error.message || "Erreur lors de l'inscription");
                return;
            }

            success("Inscription réussie ! Un email de vérification vous a été envoyé.");
        } catch (err) {
            console.error("Exception lors de l'inscription:", err);
            error("Une erreur inattendue s'est produite");
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Prénom et Nom */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="firstName"
                        className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                    >
                        Prénom *
                    </label>
                    <input
                        type="text"
                        {...register("firstName")}
                        id="firstName"
                        placeholder="Jean"
                        className="w-full px-4 py-3 bg-input border-2 border-border font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                    {errors.firstName && (
                        <span className="text-error text-xs font-mono mt-1 block">
                            {errors.firstName.message}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="lastName"
                        className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                    >
                        Nom *
                    </label>
                    <input
                        type="text"
                        {...register("lastName")}
                        id="lastName"
                        placeholder="Dupont"
                        className="w-full px-4 py-3 bg-input border-2 border-border font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                    {errors.lastName && (
                        <span className="text-error text-xs font-mono mt-1 block">
                            {errors.lastName.message}
                        </span>
                    )}
                </div>
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                >
                    Email *
                </label>
                <input
                    type="email"
                    {...register("email")}
                    id="email"
                    placeholder="jean.dupont@example.com"
                    className="w-full px-4 py-3 bg-input border-2 border-border font-mono text-sm focus:border-primary focus:outline-none transition-colors"
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
                    htmlFor="password"
                    className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                >
                    Mot de passe *
                </label>
                <input
                    type="password"
                    {...register("password")}
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-input border-2 border-border font-mono text-sm focus:border-primary focus:outline-none transition-colors"
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
                className="w-full bg-primary text-primary-foreground py-4 px-4 border-2 border-border font-mono uppercase font-bold text-sm hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
                S'inscrire
            </button>
        </form>
    );
}
