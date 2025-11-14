import * as yup from "yup";
import "./yup-extensions";

export const userCreateSchema = yup.object({
    name: yup
        .string()
        .min(4, "Le nom doit faire au moins 4 caractères")
        .required("Le nom est requis"),
    email: yup
        .string()
        .strictEmail("Adresse email invalide")
        .required("L'adresse email est requise"),
    password: yup
        .string()
        .min(8, "Le mot de passe doit faire au moins 8 caractères")
        .matches(
            /[a-z]/,
            "Le mot de passe doit contenir au moins une minuscule"
        )
        .matches(
            /[A-Z]/,
            "Le mot de passe doit contenir au moins une majuscule"
        )
        .matches(/\d/, "Le mot de passe doit contenir au moins un chiffre")
        .matches(
            /[@$!%*?&]/,
            "Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&)"
        )
        .required("Le mot de passe est requis"),
    image: yup.string().url().default(null).nullable(),
    lastName: yup.string().default(null).nullable(),
    firstName: yup.string().default(null).nullable(),
});

export const userUpdateSchema = userCreateSchema.deepPartial(); //rend les fields optionnel

export type CreateUserSchemaType = yup.InferType<typeof userCreateSchema>;
export type UpdateUserSchemaType = yup.InferType<typeof userUpdateSchema>;
