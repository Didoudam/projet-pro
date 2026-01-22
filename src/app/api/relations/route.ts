import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// GET /api/relations - Récupérer toutes les relations de l'utilisateur connecté
export async function GET(request: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        if (!session?.user) {
            return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status"); // "accepted", "pending", "all"

        // Relations où l'utilisateur est l'initiateur
        const userRelations = await prisma.relation.findMany({
            where: {
                userId: session.user.id,
                ...(status === "accepted" ? { status: true } : {}),
                ...(status === "pending" ? { status: false } : {}),
            },
            include: {
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
            orderBy: {
                createdAt: "desc",
            },
        });

        // Relations où l'utilisateur est la cible
        const relatedByRelations = await prisma.relation.findMany({
            where: {
                relationId: session.user.id,
                ...(status === "accepted" ? { status: true } : {}),
                ...(status === "pending" ? { status: false } : {}),
            },
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
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({
            sent: userRelations,
            received: relatedByRelations,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des relations:", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

// POST /api/relations - Créer une nouvelle demande de relation
export async function POST(request: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        if (!session?.user) {
            return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
        }

        const body = await request.json();
        const { targetUserId } = body;

        if (!targetUserId) {
            return NextResponse.json(
                { error: "L'ID de l'utilisateur cible est requis" },
                { status: 400 }
            );
        }

        // Vérifier que l'utilisateur ne tente pas de se connecter à lui-même
        if (targetUserId === session.user.id) {
            return NextResponse.json(
                { error: "Vous ne pouvez pas vous connecter à vous-même" },
                { status: 400 }
            );
        }

        // Vérifier que l'utilisateur cible existe
        const targetUser = await prisma.user.findUnique({
            where: { id: targetUserId },
        });

        if (!targetUser) {
            return NextResponse.json(
                { error: "Utilisateur cible introuvable" },
                { status: 404 }
            );
        }

        // Vérifier qu'une relation n'existe pas déjà
        const existingRelation = await prisma.relation.findFirst({
            where: {
                OR: [
                    { userId: session.user.id, relationId: targetUserId },
                    { userId: targetUserId, relationId: session.user.id },
                ],
            },
        });

        if (existingRelation) {
            return NextResponse.json(
                { error: "Une relation existe déjà avec cet utilisateur" },
                { status: 409 }
            );
        }

        // Créer la demande de relation (status: false = en attente)
        const relation = await prisma.relation.create({
            data: {
                userId: session.user.id,
                relationId: targetUserId,
                status: false, // En attente d'acceptation
            },
            include: {
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

        return NextResponse.json(relation, { status: 201 });
    } catch (error) {
        console.error("Erreur lors de la création de la relation:", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
