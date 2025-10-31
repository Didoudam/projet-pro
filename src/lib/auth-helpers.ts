import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "./auth-middleware";
import { prisma } from "./prisma";
import { Session } from "./auth";

export type AuthenticatedUser =
	| NextResponse
	| {
			session: Session;
			userId: string;
			writerId: string;
	  };

export async function getAuthenticatedUser(request: NextRequest) {
	const authResult = await requireAuth(request);

	// retourner l'érreur si il y en a
	if (authResult instanceof NextResponse) {
		return authResult;
	}

	// récupérer le writer de l'user
	const userWriter = await prisma.writer.findUnique({
		where: { userId: authResult.user.id },
	});

	if (!userWriter) {
		return NextResponse.json({ message: "Aucun writer associé à cet utilisateur." }, { status: 403 });
	}
	return {
		session: authResult,
		userId: authResult.user.id,
		writerId: userWriter?.id,
	};
}
