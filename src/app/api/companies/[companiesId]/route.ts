import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/auth-helpers";
import { companyUpdateSchema } from "@/lib/schemas/companies";

interface RouteParams {
    params: Promise<{ companyId: string }>;
}

// GET /api/company/[companyId]
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }
        //params.then((userId) => console.log(userId)).catch(()=> console.error("eeeeee"));
        const { companyId } = await params;
        const company = await prisma.company.findFirst({
            select: {
                id: true,
                name: true,
            },
            where: {
                id: companyId,
            },
        });

        if (!company) {
            return NextResponse.json(
                { message: "utilisateur non trouvé" },
                { status: 404 }
            );
        }

        return NextResponse.json(company);
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}

// PUT /api/company/[companyId]
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { companyId } = await params;

        const company = await prisma.company.findFirst({
            select: {
                id: true,
            },
            where: {
                id: companyId,
            },
        });

        if (!company) {
            return NextResponse.json(
                { message: "Entreprise non trouvé" },
                { status: 404 }
            );
        }

        const body = await request.json();

        // Validation des données
        const { ...validatedData } = await companyUpdateSchema.validate(
            body,
            {
                stripUnknown: true,
            }
        );

        const updatedCompany = await prisma.company.update({
            where: {
                id: companyId,
            },
            data: {
                ...validatedData,
            },
        });

        return NextResponse.json(updatedCompany);
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
