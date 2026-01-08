import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

interface RouteParams {
    params: Promise<{ relationId: string }>;
}

// PATCH /api/relations/[relationId] - Accepter ou refuser une demande de relation
export async function PATCH(request: NextRequest, { params }: RouteParams) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        if (!session?.user) {
            return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
        }

        const { relationId } = await params;
        const body = await request.json();
        const { action } = body; // "accept" ou "reject"

        if (!action || !["accept", "reject"].includes(action)) {
            return NextResponse.json(
                { error: "Action invalide. Utilisez 'accept' ou 'reject'" },
                { status: 400 }
            );
        }

        // Vérifier que la relation existe et que l'utilisateur est bien la cible
        const relation = await prisma.relation.findFirst({
            where: {
                id: relationId,
                relationId: session.user.id, // L'utilisateur connecté doit être la cible
                status: false, // Seulement les demandes en attente
            },
        });

        if (!relation) {
            return NextResponse.json(
                { error: "Demande de relation introuvable ou déjà traitée" },
                { status: 404 }
            );
        }

        if (action === "accept") {
            // Accepter la demande
            const updatedRelation = await prisma.relation.update({
                where: { id: relationId },
                data: { status: true },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            image: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                    relation: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            image: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            return NextResponse.json({
                message: "Demande de relation acceptée",
                relation: updatedRelation,
            });
        } else {
            // Refuser la demande (supprimer la relation)
            await prisma.relation.delete({
                where: { id: relationId },
            });

            return NextResponse.json({
                message: "Demande de relation refusée",
            });
        }
    } catch (error) {
        console.error("Erreur lors du traitement de la demande:", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

// DELETE /api/relations/[relationId] - Supprimer une relation
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        if (!session?.user) {
            return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
        }

        const { relationId } = await params;

        // Vérifier que la relation existe et que l'utilisateur est concerné
        const relation = await prisma.relation.findFirst({
            where: {
                id: relationId,
                OR: [
                    { userId: session.user.id },
                    { relationId: session.user.id },
                ],
            },
        });

        if (!relation) {
            return NextResponse.json(
                { error: "Relation introuvable" },
                { status: 404 }
            );
        }

        // Supprimer la relation
        await prisma.relation.delete({
            where: { id: relationId },
        });

        return NextResponse.json({
            message: "Relation supprimée avec succès",
        });
    } catch (error) {
        console.error("Erreur lors de la suppression de la relation:", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
