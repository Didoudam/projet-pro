import * as yup from "yup";
import "./yup-extensions";

export const commentCreateSchema = yup.object({
    content: yup.string().min(4, "Le commentaire doit faire au moins 4 caractères").required("Le contenu est requis"),
    writerId: yup.string().required("vous devez etre connecté pour créer un commentaire")
});

export const commentUpdateSchema = commentCreateSchema.deepPartial();//rend les fields optionnel

export type CreateCommentSchemaType = yup.InferType<typeof commentCreateSchema>;
export type UpdateCommentSchemaType = yup.InferType<typeof commentUpdateSchema>;