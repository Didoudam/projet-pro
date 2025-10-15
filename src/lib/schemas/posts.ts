import * as yup from "yup";
import "./yup-extensions";

export const postCreateSchema = yup.object({
    content: yup.string().min(4, "Le contenu doit faire au moins 4 caractères").required("Le contenu est requis"),
    writerId: yup.string().required("vous devez etre connecté pour créer un post")
});

export const postUpdateSchema = postCreateSchema.deepPartial();//rend les fields optionnel

export type CreatePostSchemaType = yup.InferType<typeof postCreateSchema>;
export type UpdatePostSchemaType = yup.InferType<typeof postUpdateSchema>;