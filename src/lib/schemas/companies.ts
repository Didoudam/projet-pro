import * as yup from "yup";
import "./yup-extensions";

export const companyCreateSchema = yup.object({
    name: yup.string().min(4, "Le nom doit faire au moins 4 caractères").required("Le nom est requis"),
    image: yup.string().url().optional(),
    activity: yup.string().min(2,"l'activité doit fiare plus de 2 caracteres").optional(),
    description: yup.string().optional().min(4, "La description doit faire au moins 4 caracteres"),
});

export const companyUpdateSchema = companyCreateSchema.deepPartial();//rend les fields optionnel

export type CreateUserSchemaType = yup.InferType<typeof companyCreateSchema>;
export type UpdateUserSchemaType = yup.InferType<typeof companyUpdateSchema>;