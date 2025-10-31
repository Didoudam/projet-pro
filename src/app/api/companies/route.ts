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

		//faire une verifiaction des infos https://www.npmjs.com/package/next-csrf

        const body = await request.json();

        // Validation des données
        const validatedData = await companyCreateSchema.validate(body, {
            stripUnknown: true,
        });

        //verification si l'entreprise existe deja
        const company = await prisma.company.findFirst({
            select: {
                id: true,
            },
        });

        if (company) {
            return NextResponse.json(
                { message: "Entreprise déjà existante" },
                { status: 409 }
            );
        }

        const newUser = await prisma.company.create({
            data: {
                ...validatedData,
                writer: {
                    create: {},
                },
            },
        });

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.log(error);
        if (error instanceof Error && error.name === "ValidationError") {
            console.log(error.message);
            return NextResponse.json(
                { message: "Données invalides", details: error.message },
                { status: 400 }
            );
        }

        console.error("Create alert error:", error);
        return NextResponse.json(
            { message: "Erreur lors de la création de l'alerte" },
            { status: 500 }
        );
    }
}
