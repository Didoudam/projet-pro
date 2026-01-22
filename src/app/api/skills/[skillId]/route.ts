import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

type RouteParams = {
    params: Promise<{
        skillId: string;
    }>;
};

// DELETE /api/skills/[skillId] - Supprimer une compétence
export async function DELETE(request: NextRequest, context: RouteParams) {
    try {
        const session = await auth.api.getSession({ headers: request.headers });
        if (!session?.user) {
            return NextResponse.json(
                { error: "Non authentifié" },
                { status: 401 }
            );
        }

        const { skillId } = await context.params;

        // Vérifier que la compétence appartient à l'utilisateur
        const skill = await prisma.skill.findUnique({
            where: { id: skillId },
        });

        if (!skill) {
            return NextResponse.json(
                { error: "Compétence non trouvée" },
                { status: 404 }
            );
        }

        if (skill.userId !== session.user.id) {
            return NextResponse.json(
                { error: "Non autorisé" },
                { status: 403 }
            );
        }

        await prisma.skill.delete({
            where: { id: skillId },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erreur suppression compétence:", error);
        return NextResponse.json(
            { error: "Erreur lors de la suppression de la compétence" },
            { status: 500 }
        );
    }
}

// PATCH /api/skills/[skillId] - Modifier le niveau d'une compétence
export async function PATCH(request: NextRequest, context: RouteParams) {
    try {
        const session = await auth.api.getSession({ headers: request.headers });
        if (!session?.user) {
            return NextResponse.json(
                { error: "Non authentifié" },
                { status: 401 }
            );
        }

        const { skillId } = await context.params;
        const body = await request.json();
        const { level } = body;

        if (!level || level < 1 || level > 5) {
            return NextResponse.json(
                { error: "Le niveau doit être entre 1 et 5" },
                { status: 400 }
            );
        }

        // Vérifier que la compétence appartient à l'utilisateur
        const skill = await prisma.skill.findUnique({
            where: { id: skillId },
        });

        if (!skill) {
            return NextResponse.json(
                { error: "Compétence non trouvée" },
                { status: 404 }
            );
        }

        if (skill.userId !== session.user.id) {
            return NextResponse.json(
                { error: "Non autorisé" },
                { status: 403 }
            );
        }

        const updatedSkill = await prisma.skill.update({
            where: { id: skillId },
            data: { level },
        });

        return NextResponse.json(updatedSkill);
    } catch (error) {
        console.error("Erreur modification compétence:", error);
        return NextResponse.json(
            { error: "Erreur lors de la modification de la compétence" },
            { status: 500 }
        );
    }
}
