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
        const { postId, status } = await request.json();

        // Vérifier que le post existe
        const post = await prisma.post.findUnique({
            where: { id: postId },
        });

        if (!post) {
            return NextResponse.json(
                { error: "Post introuvable" },
                { status: 404 }
            );
        }

        // Récupérer le writer de l'utilisateur
        const writer = await prisma.writer.findFirst({
            where: { userId: session.user.id },
        });

        if (!writer) {
            return NextResponse.json(
                { error: "Profil writer non trouvé" },
                { status: 404 }
            );
        }

        // Vérifier si un vote existe déjà
        const existingVote = await prisma.vote.findFirst({
            where: {
                writerId: writer.id,
                postId: postId,
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
                postId: postId,
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
