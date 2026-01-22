import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// POST /api/skills - Ajouter une compétence
export async function POST(request: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: request.headers });
        if (!session?.user) {
            return NextResponse.json(
                { error: "Non authentifié" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { name, level } = body;

        if (!name || !level) {
            return NextResponse.json(
                { error: "Nom et niveau requis" },
                { status: 400 }
            );
        }

        if (level < 1 || level > 5) {
            return NextResponse.json(
                { error: "Le niveau doit être entre 1 et 5" },
                { status: 400 }
            );
        }

        // Vérifier si la compétence existe déjà pour cet utilisateur
        const existing = await prisma.skill.findFirst({
            where: {
                userId: session.user.id,
                name: name.trim(),
            },
        });

        if (existing) {
            return NextResponse.json(
                { error: "Cette compétence existe déjà" },
                { status: 400 }
            );
        }

        const skill = await prisma.skill.create({
            data: {
                name: name.trim(),
                level,
                userId: session.user.id,
            },
        });

        return NextResponse.json(skill, { status: 201 });
    } catch (error) {
        console.error("Erreur création compétence:", error);
        return NextResponse.json(
            { error: "Erreur lors de la création de la compétence" },
            { status: 500 }
        );
    }
}
