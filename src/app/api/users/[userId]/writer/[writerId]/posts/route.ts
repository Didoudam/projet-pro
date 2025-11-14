import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { postCreateSchema } from "@/lib/schemas";
import { getAuthenticatedUser } from "@/lib/auth-helpers";

interface RouteParams {
    params: Promise<{ userId: string; writerId: string }>;
}
// /api/users/[userId]/writer/[writerId]/posts/[postId]         Création de post
export async function POST(request: NextRequest, { params }: RouteParams) {
    try {
        const { userId, writerId } = await params;
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        if (auth.userId !== userId) {
            return NextResponse.json(
                { message: "Non authorisé" },
                { status: 403 }
            );
        }

        const body = await request.json();

        // Validation des données
        const validatedData = await postCreateSchema.validate(body, {
            stripUnknown: true,
        });

        const newPost = await prisma.post.create({
            data: {
                ...validatedData,
                writerId: writerId,
            },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.log(error);
        if (error instanceof Error && error.name === "ValidationError") {
            console.log(error.message);
            return NextResponse.json(
                { message: "Données invalides", details: error.message },
                { status: 400 }
            );
        }

        console.error("Create alert error:", error);
        return NextResponse.json(
            { message: "Erreur lors de la création de l'alerte" },
            { status: 500 }
        );
    }
}
export async function GET(_request: NextRequest, { params }: RouteParams) {
    const {writerId } = await params;

    // Récupérer tous les posts du writer
    const posts = await prisma.post.findMany({
        where: { writerId },
        include: {
            writer: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                    company: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts);
}
