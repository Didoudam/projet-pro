import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/skills/suggestions?query=xxx - Récupérer les suggestions de compétences
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("query") || "";

        // Récupérer les compétences distinctes avec leur nombre d'utilisations
        const skills = await prisma.skill.groupBy({
            by: ["name"],
            _count: {
                name: true,
            },
            where: query
                ? {
                      name: {
                          contains: query,
                          mode: "insensitive",
                      },
                  }
                : undefined,
            orderBy: {
                _count: {
                    name: "desc", // Les plus utilisées en premier
                },
            },
            take: 10,
        });

        const suggestions = skills.map((skill) => ({
            name: skill.name,
            usageCount: skill._count.name,
        }));

        return NextResponse.json(suggestions);
    } catch (error) {
        console.error("Erreur récupération suggestions:", error);
        return NextResponse.json(
            { error: "Erreur lors de la récupération des suggestions" },
            { status: 500 }
        );
    }
}
