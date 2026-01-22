import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Non authentifié" },
            { status: 401 }
        );
    }

    try {
        const { postId, commentId, status } = await request.json();

        // Vérifier qu'on a soit un postId, soit un commentId
        if (!postId && !commentId) {
            return NextResponse.json(
                { error: "postId ou commentId requis" },
                { status: 400 }
            );
        }

        // Vérifier que le post ou le commentaire existe
        if (postId) {
            const post = await prisma.post.findUnique({
                where: { id: postId },
            });

            if (!post) {
                return NextResponse.json(
                    { error: "Post introuvable" },
                    { status: 404 }
                );
            }
        }

        if (commentId) {
            const comment = await prisma.comment.findUnique({
                where: { id: commentId },
            });

            if (!comment) {
                return NextResponse.json(
                    { error: "Commentaire introuvable" },
                    { status: 404 }
                );
            }
        }

        // Récupérer ou créer le writer de l'utilisateur
        let writer = await prisma.writer.findFirst({
            where: { userId: session.user.id },
        });

        if (!writer) {
            // Créer automatiquement un writer si il n'existe pas
            writer = await prisma.writer.create({
                data: {
                    userId: session.user.id,
                },
            });
        }

        // Vérifier si un vote existe déjà
        const existingVote = await prisma.vote.findFirst({
            where: {
                writerId: writer.id,
                ...(postId ? { postId } : {}),
                ...(commentId ? { commentId } : {}),
            },
        });

        if (existingVote) {
            // Si le vote existe et est identique, on le supprime (toggle)
            if (existingVote.status === status) {
                await prisma.vote.delete({
                    where: { id: existingVote.id },
                });

                return NextResponse.json({
                    message: "Vote supprimé",
                    action: "removed",
                });
            } else {
                // Sinon on met à jour le vote
                const updatedVote = await prisma.vote.update({
                    where: { id: existingVote.id },
                    data: { status },
                });

                return NextResponse.json({
                    message: "Vote mis à jour",
                    action: "updated",
                    vote: updatedVote,
                });
            }
        }

        // Créer un nouveau vote
        const newVote = await prisma.vote.create({
            data: {
                writerId: writer.id,
                ...(postId ? { postId } : {}),
                ...(commentId ? { commentId } : {}),
                status: status,
            },
        });

        return NextResponse.json(
            {
                message: "Vote ajouté",
                action: "created",
                vote: newVote,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Erreur lors du vote:", error);
        return NextResponse.json(
            { error: "Erreur lors du vote" },
            { status: 500 }
        );
    }
}
