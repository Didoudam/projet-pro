import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { CompanyRole } from "@prisma/client";

// POST /api/companies/[companyId]/admins - Add admin
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  try {
    const { companyId } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Vérifier que l'utilisateur est SUPER_ADMIN de cette entreprise
    const userAdmin = await prisma.companyAdmin.findFirst({
      where: {
        companyId,
        userId: session.user.id,
        role: "SUPER_ADMIN",
      },
    });

    if (!userAdmin) {
      return NextResponse.json(
        { message: "Vous n'avez pas les permissions pour ajouter des administrateurs" },
        { status: 403 }
      );
    }

    const { email, role } = await request.json();

    // Trouver l'utilisateur par email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    // Vérifier qu'il n'est pas déjà admin
    const existingAdmin = await prisma.companyAdmin.findFirst({
      where: {
        companyId,
        userId: user.id,
      },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { message: "Cet utilisateur est déjà administrateur" },
        { status: 400 }
      );
    }

    // Ajouter l'admin
    const newAdmin = await prisma.companyAdmin.create({
      data: {
        companyId,
        userId: user.id,
        role: role as CompanyRole,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    // Créer le WriterLink pour permettre au nouvel admin de poster au nom de l'entreprise
    const userWriter = await prisma.writer.findFirst({
      where: { userId: user.id },
    });

    const companyWriter = await prisma.writer.findFirst({
      where: { companyId },
    });

    if (userWriter && companyWriter) {
      // Vérifier si le lien n'existe pas déjà
      const existingLink = await prisma.writerLink.findFirst({
        where: {
          userWriterId: userWriter.id,
          companyWriterId: companyWriter.id,
        },
      });

      if (!existingLink) {
        await prisma.writerLink.create({
          data: {
            userWriterId: userWriter.id,
            companyWriterId: companyWriter.id,
          },
        });
      }
    }

    return NextResponse.json(newAdmin, { status: 201 });
  } catch (error) {
    console.error("Add admin error:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'ajout de l'administrateur" },
      { status: 500 }
    );
  }
}
