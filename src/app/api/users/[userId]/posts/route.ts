import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
    params: Promise<{ userId: string }>;
}

// GET /api/users/[userId]/posts      Récupération des posts d'un utilisateur
export async function GET(_request: NextRequest, { params }: RouteParams) {
    try {
        const { userId } = await params;

        // Récupérer le writer de l'utilisateur
        const writer = await prisma.writer.findFirst({
            where: {
                userId: userId,
            },
            select: {
                id: true,
            },
        });

        if (!writer) {
            return NextResponse.json(
                { message: "Writer non trouvé pour cet utilisateur" },
                { status: 404 }
            );
        }

        // Récupérer tous les posts du writer de cet utilisateur
        const posts = await prisma.post.findMany({
            where: {
                writerId: writer.id,
            },
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
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(posts);
    } catch (error) {
        console.error("Get user posts error:", error);
        return NextResponse.json(
            { message: "Erreur lors de la récupération des posts" },
            { status: 500 }
        );
    }
}
