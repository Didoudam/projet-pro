import * as yup from "yup";
import "./yup-extensions";

export const voteCreateSchema = yup.object({
    status: yup.boolean().required(),
    writerId: yup.string().required()});

export const voteUpdateSchema = voteCreateSchema.deepPartial();//rend les fields optionnel

export type createVoteSchemaType = yup.InferType<typeof voteCreateSchema>;
export type updateVoteSchemaType = yup.InferType<typeof voteUpdateSchema>;