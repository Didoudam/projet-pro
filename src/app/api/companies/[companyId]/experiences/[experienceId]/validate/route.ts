import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// PATCH /api/companies/[companyId]/experiences/[experienceId]/validate
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ companyId: string; experienceId: string }> }
) {
  try {
    const { companyId, experienceId } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Vérifier que l'utilisateur est admin/moderator de cette entreprise
    const userAdmin = await prisma.companyAdmin.findFirst({
      where: {
        companyId,
        userId: session.user.id,
        role: {
          in: ["SUPER_ADMIN", "ADMIN", "MODERATOR"],
        },
      },
    });

    if (!userAdmin) {
      return NextResponse.json(
        { message: "Vous n'avez pas les permissions pour valider des expériences" },
        { status: 403 }
      );
    }

    const { validated } = await request.json();

    // Vérifier que l'expérience existe et appartient à cette entreprise
    const experience = await prisma.experience.findFirst({
      where: {
        id: experienceId,
        companyId,
      },
    });

    if (!experience) {
      return NextResponse.json(
        { message: "Expérience non trouvée" },
        { status: 404 }
      );
    }

    // Valider ou refuser l'expérience
    if (validated) {
      await prisma.experience.update({
        where: { id: experienceId },
        data: {
          validated: true,
          validatedBy: session.user.id,
          validatedAt: new Date(),
        },
      });
    } else {
      // Si refusé, on peut soit supprimer soit marquer différemment
      // Pour l'instant on supprime
      await prisma.experience.delete({
        where: { id: experienceId },
      });
    }

    return NextResponse.json({
      message: validated ? "Expérience validée" : "Expérience refusée",
    });
  } catch (error) {
    console.error("Validate experience error:", error);
    return NextResponse.json(
      { message: "Erreur lors de la validation" },
      { status: 500 }
    );
  }
}
