"use client";

import { authClient } from "@/lib/auth-client";
import { yupResolver } from "@hookform/resolvers/yup";
import { userCreateSchema, CreateUserSchemaType } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { useAllUsersStore } from "@/stores/useAllUsersStore";

export function SignUpForm() {
    const { updateUser } = useAllUsersStore();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserSchemaType>({
        resolver: yupResolver(userCreateSchema),
    });

    const onSubmit = async (data: CreateUserSchemaType) => {
        const result = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name,
        });
        if (result.error) {
            //TODO -- Gestion de l'erreur
            return;
        }

        const userId = result.data.user.id;
        if (data.firstName || data.lastName || data.image) {
            await updateUser(userId, {
                firstName: data.firstName,
                lastName: data.lastName,
                image: data.image,
            });
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    {...register("name")}
                    id="name"
                    placeholder="Michel"
                />
                <span>{errors.name?.message}</span>
            </div>
            <div>
                <label htmlFor="lastName">Prenom</label>
                <input
                    type="text"
                    {...register("lastName")}
                    id="lastName"
                    placeholder="Durand"
                />
                <span>{errors.lastName?.message}</span>
            </div>
            <div>
                <label htmlFor="email">e-mail</label>
                <input
                    type="text"
                    {...register("email")}
                    id="email"
                    placeholder="nom.prenom@domaine.com"
                />
                <span>{errors.email?.message}</span>
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    {...register("password")}
                    id="password"
                />
                <span>{errors.password?.message}</span>
            </div>
            <div>
                <label htmlFor="avatar">Avatar</label>
                <input
                    type="file"
                    {...register("image")}
                    id="avatar"
                    accept="image/png, image/jpg, image/webp"
                />
                <span>{errors.image?.message}</span>
            </div>
            <button type="submit">S inscrire</button>
        </form>
    );
}
