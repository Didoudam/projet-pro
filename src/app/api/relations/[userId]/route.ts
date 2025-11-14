import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { relationUpdateSchema } from "@/lib/schemas/relations";
import { getAuthenticatedUser } from "@/lib/auth-helpers";

interface RouteParams {
    params: Promise<{ userId: string; relationId: string }>;
}

// GET /api/relation/[userId]       Recuperation des relations d'un user
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        const { userId } = await params;

        const relations = await prisma.relation.findFirst({
            select: {
                id: true,
                createdAt: true,
                relationId: true,
            },
            where: {
                userId: userId,
            },
        });

        if (!relations) {
            return NextResponse.json(
                { message: "Aucune relation trouvée" },
                { status: 404 }
            );
        }

        return NextResponse.json(relations);
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}

// GET /api/relation/[userId]       modification d'une relations d'un user
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { relationId } = await params;

        // vérification que la relation appartien a l'utilisateur connecté ET existe bien
        const relation = await prisma.relation.findFirst({
            select: {
                id: true,
            },
            where: {
                id: relationId,
                userId: auth.userId,
            },
        });

        if (!relation) {
            return NextResponse.json(
                { message: "Relation non trouvé" },
                { status: 404 }
            );
        }

        const body = await request.json();

        // Validation des données
        const validatedData = await relationUpdateSchema.validate(body, {
            stripUnknown: true,
        });

        const updatedRelation = await prisma.relation.update({
            where: {
                id: relationId,
            },
            data: {
                ...validatedData,
            },
        });

        return NextResponse.json(updatedRelation);
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

// GET /api/relation/[userId]       supppression d'une relations d'un user
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { relationId } = await params;

        // vérification que la relation appartien a l'utilisateur connecté ET existe bien
        const relation = await prisma.relation.findFirst({
            select: {
                id: true,
            },
            where: {
                id: relationId,
                userId: auth.userId,
            },
        });

        if (!relation) {
            return NextResponse.json(
                { message: "Relation non trouvé" },
                { status: 404 }
            );
        }

        await prisma.relation.delete({
            where: {
                id: relationId,
            },
        });

        return NextResponse.json(
            { message: "Relation supprimée" },
            { status: 200 }
        );
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
