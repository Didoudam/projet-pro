import * as yup from "yup";
import "./yup-extensions";

export const postCreateSchema = yup.object({
    content: yup
        .string()
        .min(1, "Le contenu ne peut pas être vide")
        .max(5000, "Le contenu ne peut pas dépasser 5000 caractères")
        .required("Le contenu est requis"),
});

export const postUpdateSchema = postCreateSchema.deepPartial();//rend les fields optionnel

export type CreatePostSchemaType = yup.InferType<typeof postCreateSchema>;
export type UpdatePostSchemaType = yup.InferType<typeof postUpdateSchema>;