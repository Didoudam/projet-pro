import * as yup from "yup";
import "./yup-extensions";

export const userCreateSchema = yup.object({
    name: yup.string().min(4, "Le nom doit faire au moins 4 caractères").required("Le nom est requis"),
    email: yup.string().strictEmail("Adresse email invalide").required("L'adresse email est requise"),
    image: yup.string().url().optional(),
    lastName: yup.string().optional(),
    firstName: yup.string().optional(),
});

export const userUpdateSchema = userCreateSchema.deepPartial();//rend les fields optionnel

export type CreateUserSchemaType = yup.InferType<typeof userCreateSchema>;
export type UpdateUserSchemaType = yup.InferType<typeof userUpdateSchema>;