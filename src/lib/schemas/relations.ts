import * as yup from "yup";
import "./yup-extensions";

export const relationCreateSchema = yup.object({
    status: yup.boolean(),
    
});

export const relationUpdateSchema = relationCreateSchema.deepPartial(); //rend les fields optionnel

export type UpdateRelationSchemaType = yup.InferType<typeof relationUpdateSchema>;
export type CreateRelationSchemaType = yup.InferType<typeof relationCreateSchema>;
