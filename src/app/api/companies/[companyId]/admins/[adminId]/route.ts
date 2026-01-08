import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// DELETE /api/companies/[companyId]/admins/[adminId] - Remove admin
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ companyId: string; adminId: string }> }
) {
  try {
    const { companyId, adminId } = await params;
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
        { message: "Vous n'avez pas les permissions pour retirer des administrateurs" },
        { status: 403 }
      );
    }

    // Vérifier que l'admin à retirer n'est pas un SUPER_ADMIN
    const adminToRemove = await prisma.companyAdmin.findUnique({
      where: { id: adminId },
    });

    if (!adminToRemove) {
      return NextResponse.json(
        { message: "Administrateur non trouvé" },
        { status: 404 }
      );
    }

    if (adminToRemove.role === "SUPER_ADMIN") {
      return NextResponse.json(
        { message: "Impossible de retirer un Super Admin" },
        { status: 400 }
      );
    }

    // Retirer l'admin
    await prisma.companyAdmin.delete({
      where: { id: adminId },
    });

    return NextResponse.json({ message: "Administrateur retiré" });
  } catch (error) {
    console.error("Remove admin error:", error);
    return NextResponse.json(
      { message: "Erreur lors de la suppression de l'administrateur" },
      { status: 500 }
    );
  }
}
