import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { voteCreateSchema } from "@/lib/schemas";

interface RouteParams {
	params: Promise<{ postId: string }>;
}

// retourne tous les votes d'un post
// GET /api/posts/[postId]/votes
export async function GET(request: NextRequest, { params }: RouteParams) {
	try {
		const { postId } = await params;

		const post = await prisma.post.findFirst({
			select: {
				id: true,
			},
			where: {
				id: postId,
			},
		});

		if (!post) {
			return NextResponse.json({ message: "post non trouvé" }, { status: 404 });
		}

		const countRecords = async () => {
			const positive = await prisma.vote.count({
				where: {
					postId,
					status: true,
				},
			});
			const negative = await prisma.vote.count({
				where: {
					postId,
					status: false,
				},
			});
			return positive - negative;
		};
		const [votes, totalCount] = await Promise.all([
			prisma.vote.findMany({
				where: {
					postId,
				},
				orderBy: {
					createdAt: "desc",
				},
			}),

			countRecords,
		]);

		return NextResponse.json({ votes, totalCount: totalCount !== undefined ? totalCount : -1 });
	} catch (error) {
		console.error("error:", error);
		return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
	}
}

export async function POST(request: NextRequest, { params }: RouteParams) {
	try {
		//Vérifier que l'user est identifié ici
		// if (!session?.session?.activeOrganizationId) {
		//     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
		// }
		const { postId } = await params;
		const body = await request.json();

		// Validation des données
		const validatedData = await voteCreateSchema.validate(body, {
			stripUnknown: true,
		});

		//verification si le vote existe deja
		const existingVote = await prisma.vote.findFirst({
			where: {
				id: validatedData.writerId,
				postId: postId,
			},
		});

		if (existingVote) {
			return NextResponse.json({ message: "Vous avez déjà voté sur ce post" }, { status: 409 });
		}

		const newVote = await prisma.vote.create({
			data: {
				...validatedData,
				postId: postId,
			},
		});

		return NextResponse.json(newVote, { status: 201 });
	} catch (error) {
		console.log(error);
		if (error instanceof Error && error.name === "ValidationError") {
			console.log(error.message);
			return NextResponse.json({ message: "Données invalides", details: error.message }, { status: 400 });
		}

		console.error("Create alert error:", error);
		return NextResponse.json({ message: "Erreur lors de la création de l'alerte" }, { status: 500 });
	}
}
