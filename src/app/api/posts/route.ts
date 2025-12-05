import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { postCreateSchema } from "@/lib/schemas/posts";


// src/app/api/posts/route.ts       recupération de tous les posts
export async function GET() {
    const posts = await prisma.post.findMany({
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
            media: {
                select: {
                    id: true,
                    url: true,
                    altText: true,
                    type: true,
                },
            },
            Comment: {
                where: {
                    commentId: null, // Seulement les commentaires de premier niveau
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
                    replies: {
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
                        orderBy: { createdAt: "asc" },
                    },
                },
                orderBy: { createdAt: "asc" },
            },
        },
        orderBy: { createdAt: "desc" },
        take: 100,  // Limiter
    });

    return NextResponse.json(posts);
}

// POST /api/posts - Créer un nouveau post
export async function POST(request: NextRequest) {
    try {
        // Vérifier l'authentification
        const session = await auth.api.getSession({ headers: request.headers });
        if (!session) {
            return NextResponse.json(
                { error: "Non authentifié" },
                { status: 401 }
            );
        }

        const userId = session.user.id;

        // Récupérer le Writer (doit exister après vérification email)
        const writer = await prisma.writer.findFirst({
            where: { userId },
        });

        if (!writer) {
            return NextResponse.json(
                { error: "Vous devez vérifier votre email avant de publier" },
                { status: 403 }
            );
        }

        // Valider les données
        const body = await request.json();
        const validatedData = await postCreateSchema.validate(body);

        // Créer le post
        const post = await prisma.post.create({
            data: {
                content: validatedData.content,
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
                    },
                },
            },
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error("Erreur création post:", error);
        return NextResponse.json(
            { error: "Erreur lors de la création du post" },
            { status: 500 }
        );
    }
}