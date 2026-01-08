import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Non authentifié" },
            { status: 401 }
        );
    }

    try {
        const { name, companyName, startDate, endDate, description } = await request.json();

        if (!name || !name.trim()) {
            return NextResponse.json(
                { error: "Le nom du poste est requis" },
                { status: 400 }
            );
        }

        if (!companyName || !companyName.trim()) {
            return NextResponse.json(
                { error: "Le nom de l'employeur est requis" },
                { status: 400 }
            );
        }

        if (!startDate) {
            return NextResponse.json(
                { error: "La date de début est requise" },
                { status: 400 }
            );
        }

        // Créer l'expérience
        const experience = await prisma.experience.create({
            data: {
                name: name.trim(),
                companyName: companyName.trim(),
                startDate: new Date(startDate),
                endDate: endDate ? new Date(endDate) : null,
                description: description?.trim() || null,
                userId: session.user.id,
            },
            include: {
                company: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                    },
                },
            },
        });

        return NextResponse.json(
            { experience },
            { status: 201 }
        );
    } catch (error) {
        console.error("Erreur lors de la création de l'expérience:", error);
        return NextResponse.json(
            { error: "Erreur lors de la création de l'expérience" },
            { status: 500 }
        );
    }
}
