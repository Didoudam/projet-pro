import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { postCreateSchema } from "@/lib/schemas/posts";

// Type pour les commentaires avec writer
type CommentWithWriter = {
    id: string;
    content: string;
    createdAt: Date;
    commentId: string | null;
    postId: string | null;
    writerId: string;
    votes: number | null;
    writer: {
        id: string;
        userId: string | null;
        companyId: string | null;
        user: {
            id: string;
            name: string;
            image: string | null;
            firstName: string | null;
            lastName: string | null;
        } | null;
        company: {
            id: string;
            name: string;
            image: string | null;
        } | null;
    };
    Vote: Array<{
        id: string;
        status: boolean;
        writerId: string;
    }>;
    replies?: CommentWithWriter[];
};

// Fonction pour construire l'arbre de commentaires (profondeur illimitée)
function buildCommentTree(comments: CommentWithWriter[]): CommentWithWriter[] {
    const commentMap = new Map<string, CommentWithWriter>();
    const rootComments: CommentWithWriter[] = [];

    // Indexer tous les commentaires par ID
    for (const comment of comments) {
        commentMap.set(comment.id, { ...comment, replies: [] });
    }

    // Construire l'arbre
    for (const comment of comments) {
        const commentWithReplies = commentMap.get(comment.id)!;

        if (comment.commentId === null) {
            rootComments.push(commentWithReplies);
        } else {
            const parent = commentMap.get(comment.commentId);
            if (parent) {
                parent.replies!.push(commentWithReplies);
            }
        }
    }

    // Trier les réponses par date (plus anciennes en premier)
    const sortReplies = (comments: CommentWithWriter[]) => {
        for (const comment of comments) {
            if (comment.replies && comment.replies.length > 0) {
                comment.replies.sort((a, b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                );
                sortReplies(comment.replies);
            }
        }
    };

    // Trier les commentaires racines par date (plus récents en premier)
    rootComments.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    sortReplies(rootComments);

    return rootComments;
}

// src/app/api/posts/route.ts       recupération de tous les posts
export async function GET() {
    // Récupérer les posts sans les commentaires
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
            Vote: true,
        },
        orderBy: { createdAt: "desc" },
        take: 100,
    });

    // Récupérer tous les commentaires pour ces posts
    const postIds = posts.map(p => p.id);

    // Récupérer TOUS les commentaires (on va filtrer après)
    // C'est plus simple et fiable que de faire des requêtes récursives
    const allCommentsInDb = await prisma.comment.findMany({
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
            Vote: true,
        },
    });

    // Créer un index des commentaires par ID pour recherche rapide
    const commentById = new Map(allCommentsInDb.map(c => [c.id, c]));

    // Fonction pour trouver le postId racine d'un commentaire
    const getPostIdForComment = (comment: typeof allCommentsInDb[0], visited = new Set<string>()): string | null => {
        if (visited.has(comment.id)) return null; // Éviter les boucles infinies
        visited.add(comment.id);

        if (comment.postId) return comment.postId;
        if (comment.commentId) {
            const parent = commentById.get(comment.commentId);
            if (parent) return getPostIdForComment(parent, visited);
        }
        return null;
    };

    // Grouper les commentaires par postId
    const commentsByPostId = new Map<string, typeof allCommentsInDb>();
    for (const postId of postIds) {
        commentsByPostId.set(postId, []);
    }

    for (const comment of allCommentsInDb) {
        const postId = getPostIdForComment(comment);
        if (postId && commentsByPostId.has(postId)) {
            commentsByPostId.get(postId)!.push(comment);
        }
    }

    // Construire l'arbre pour chaque post
    const postsWithComments = posts.map(post => ({
        ...post,
        Comment: buildCommentTree(commentsByPostId.get(post.id) as CommentWithWriter[] || []),
    }));

    return NextResponse.json(postsWithComments);
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