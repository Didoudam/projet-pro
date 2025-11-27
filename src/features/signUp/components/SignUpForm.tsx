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
            // Construire le nom complet à partir du prénom et nom
            const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim();

            const result = await authClient.signUp.email({
                email: data.email,
                password: data.password,
                name: fullName,
            });

            if (result.error) {
                error(result.error.message || "Erreur lors de l'inscription");
                return;
            }

            success("Inscription réussie ! Un email de vérification vous a été envoyé.");
        } catch (err) {
            error("Une erreur inattendue s'est produite");
            console.error("Erreur d'inscription:", err);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Prénom et Nom */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Prénom *
                    </label>
                    <input
                        type="text"
                        {...register("firstName")}
                        id="firstName"
                        placeholder="Jean"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.firstName && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.firstName.message}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Nom *
                    </label>
                    <input
                        type="text"
                        {...register("lastName")}
                        id="lastName"
                        placeholder="Dupont"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.lastName && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.lastName.message}
                        </span>
                    )}
                </div>
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email *
                </label>
                <input
                    type="email"
                    {...register("email")}
                    id="email"
                    placeholder="jean.dupont@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Mot de passe *
                </label>
                <input
                    type="password"
                    {...register("password")}
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                S'inscrire
            </button>
        </form>
    );
}
