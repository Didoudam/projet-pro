import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;

    // Récupérer les entreprises où l'utilisateur est admin
    const companyAdmins = await prisma.companyAdmin.findMany({
      where: {
        userId: userId,
      },
      include: {
        company: {
          select: {
            id: true,
            name: true,
            image: true,
            activity: true,
          },
        },
      },
    });

    const companies = companyAdmins.map((admin) => admin.company);
    const isAdmin = companies.length > 0;

    return NextResponse.json({
      isAdmin,
      companies,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des entreprises:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des entreprises" },
      { status: 500 }
    );
  }
}
