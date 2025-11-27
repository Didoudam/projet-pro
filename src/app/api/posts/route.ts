import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


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