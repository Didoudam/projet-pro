"use server";

import { prisma } from "../prisma";
import { CreateUserSchemaType } from "../schemas";

export const appendUser = async (validatedData: CreateUserSchemaType) => {
	const user = await prisma.user.findFirst({
		select: {
			id: true,
		},
		where: {
			email: validatedData.email,
		},
	});

	if (user) {
		throw new Error("L'utilisateur existe déjà");
	}

	const newUser = await prisma.user.create({
		data: {
			...validatedData,
			emailVerified: false,
		},
	});

	return newUser;
};
