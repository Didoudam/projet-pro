import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/auth-helpers";
import { companyCreateSchema } from "@/lib/schemas/companies";

// GET /api/company
export async function GET(request: NextRequest) {
    //Vérifier que l'user est identifié ici
    const auth = await getAuthenticatedUser(request);
    if (auth instanceof NextResponse) {
        return auth;
    }

    const companies = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
        },
    });

    return NextResponse.json(companies);
}

// POST /api/companies
export async function POST(request: NextRequest) {
    try {
        // Vérifier l'authentification
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const body = await request.json();

        // Validation des données
        const validatedData = await companyCreateSchema.validate(body, {
            stripUnknown: true,
        });

        // Créer l'entreprise avec un writer et ajouter l'utilisateur comme admin
        const company = await prisma.company.create({
            data: {
                ...validatedData,
                writer: {
                    create: {},
                },
                companyAdmin: {
                    create: {
                        userId: auth.userId,
                        role: "SUPER_ADMIN",
                    },
                },
            },
            include: {
                writer: {
                    select: {
                        id: true,
                    },
                },
                companyAdmin: {
                    select: {
                        id: true,
                        role: true,
                        userId: true,
                    },
                },
            },
        });

        return NextResponse.json({ company }, { status: 201 });
    } catch (error) {
        console.log(error);
        if (error instanceof Error && error.name === "ValidationError") {
            console.log(error.message);
            return NextResponse.json(
                { message: "Données invalides", details: error.message },
                { status: 400 }
            );
        }

        console.error("Create company error:", error);
        return NextResponse.json(
            { message: "Erreur lors de la création de l'entreprise" },
            { status: 500 }
        );
    }
}
