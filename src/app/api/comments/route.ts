import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { commentCreateSchema } from "@/lib/schemas";


// POST /api/commentaire           Création de commentaire
export async function POST(request: NextRequest) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }

        const body = await request.json();

        // Validation des données
        const validatedData = await commentCreateSchema.validate(body, {
            stripUnknown: true,
        });

        //verification si le commentaire existe deja
        const comment = await prisma.comment.findFirst({
            select: {
                id: true,
            },
        });

        if (comment) {
            return NextResponse.json({ message: "commentaire déjà existant" }, { status: 404 });
        }

        const newPost = await prisma.comment.create({
            data: {
                ...validatedData,
            },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.log(error);
        if (error instanceof Error && error.name === "ValidationError") {
            console.log(error.message);
            return NextResponse.json({ message: "Données invalides", details: error.message }, { status: 400 });
        }

        console.error("Create alert error:", error);
        return NextResponse.json({ message: "Erreur lors de la création de l'alerte" }, { status: 500 });
    }
}
