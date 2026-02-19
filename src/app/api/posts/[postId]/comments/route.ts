import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import { auth } from "@/lib/auth";


interface RouteParams {
    params: Promise<{ postId: string }>;
}


// retourne tous les commentaire d'un post
// GET /api/users/[postId]/posts
export async function GET(request: NextRequest, { params }: RouteParams ) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }
        //params.then((postId) => console.log(postId)).catch(()=> console.error("eeeeee"));
        const { postId } = await params;

        const post = await prisma.post.findFirst({
            select: {
                id: true,
            },
            where: {
                id: postId,
            }
        })

        if (!post) {
            return NextResponse.json({ message: "post non trouvé" }, { status: 404 });
        }

        // GET /api/users/[postId]/posts?page=x&limit=y
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "100");
        const offset = (page - 1) * limit;

        const countRecords = async () => {
            if (page === 1) {
                return await prisma.comment.count({ where: {
                        postId,
                    } });
            }

            return undefined;
        }
        const [comments, totalCount] = await Promise.all([
            prisma.comment.findMany({
                where: {
                    postId,
                },
                take: limit,
                skip: offset,
                orderBy: {
                    createdAt : 'desc'
                }
            }),

            countRecords,
        ]);

        return NextResponse.json({comments, totalCount: totalCount !== undefined ? totalCount : -1});
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}

// Créer un commentaire pour un post
// POST /api/posts/[postId]/comments
export async function POST(request: NextRequest, { params }: RouteParams) {
    try {
        // Vérifier l'authentification
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        if (!session?.user) {
            return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
        }

        const { postId } = await params;
        const body = await request.json();
        const { content, writerId, parentCommentId } = body;

        if (!content || typeof content !== 'string' || content.trim().length === 0) {
            return NextResponse.json({ error: "Le contenu du commentaire est requis" }, { status: 400 });
        }

        // Vérifier que le post existe
        const post = await prisma.post.findUnique({
            where: { id: postId },
        });

        if (!post) {
            return NextResponse.json({ error: "Post non trouvé" }, { status: 404 });
        }

        // Si un writerId est fourni, vérifier que l'utilisateur a accès à ce writer
        let finalWriterId: string;

        if (writerId) {
            const writer = await prisma.writer.findUnique({
                where: { id: writerId },
                include: {
                    LinkedUsers: {
                        include: {
                            userWriter: true,
                        },
                    },
                },
            });

            if (!writer) {
                return NextResponse.json({ error: "Writer non trouvé" }, { status: 404 });
            }

            // Vérifier que l'utilisateur a accès à ce writer
            // Soit c'est son writer personnel, soit il est lié à ce writer d'entreprise
            const hasAccess =
                writer.userId === session.user.id ||
                writer.LinkedUsers.some(link => link.userWriter.userId === session.user.id);

            if (!hasAccess) {
                return NextResponse.json({ error: "Accès refusé à ce writer" }, { status: 403 });
            }

            finalWriterId = writerId;
        } else {
            // Récupérer le writer personnel de l'utilisateur
            const writer = await prisma.writer.findFirst({
                where: { userId: session.user.id },
            });

            if (!writer) {
                return NextResponse.json({ error: "Writer non trouvé" }, { status: 404 });
            }

            finalWriterId = writer.id;
        }

        // Si c'est une réponse, vérifier que le commentaire parent existe
        if (parentCommentId) {
            const parentComment = await prisma.comment.findUnique({
                where: { id: parentCommentId },
            });

            if (!parentComment) {
                return NextResponse.json({ error: "Commentaire parent non trouvé" }, { status: 404 });
            }
        }

        // Créer le commentaire
        const comment = await prisma.comment.create({
            data: {
                content: content.trim(),
                postId: parentCommentId ? null : postId, // Les réponses n'ont pas de postId direct
                commentId: parentCommentId || null,
                writerId: finalWriterId,
            },
            include: {
                writer: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                image: true,
                            },
                        },
                    },
                },
            },
        });

        return NextResponse.json(comment, { status: 201 });
    } catch (error) {
        console.error("Erreur lors de la création du commentaire:", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}