import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      );
    }

    const { userId } = await params;

    // Vérifier que l'utilisateur demande ses propres writers
    if (session.user.id !== userId) {
      return NextResponse.json(
        { error: "Accès refusé" },
        { status: 403 }
      );
    }

    // Récupérer le writer personnel
    const personalWriter = await prisma.writer.findFirst({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Récupérer les writers d'entreprise accessibles
    const writerLinks = await prisma.writerLink.findMany({
      where: {
        userWriter: {
          userId,
        },
      },
      include: {
        companyWriter: {
          include: {
            company: {
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

    const writers = [];

    // Ajouter le writer personnel
    if (personalWriter) {
      writers.push(personalWriter);
    }

    // Ajouter les writers d'entreprise
    writerLinks.forEach((link) => {
      if (link.companyWriter) {
        writers.push(link.companyWriter);
      }
    });

    return NextResponse.json(writers);
  } catch (error) {
    console.error("Erreur lors de la récupération des writers:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
