import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { userCreateSchema } from "@/lib/schemas";
import { getAuthenticatedUser } from "@/lib/auth-helpers";

// GET /api/users
export async function GET(request: NextRequest) {
    //Vérifier que l'user est identifié ici
    const auth = await getAuthenticatedUser(request);
    if (auth instanceof NextResponse) {
        return auth;
    }

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
        // where: {
        // 	emailVerified: true,
        // },
    });

    return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: NextRequest) {
    try {

		//faire une verifiaction des infos https://www.npmjs.com/package/next-csrf

        const body = await request.json();

        // Validation des données
        const validatedData = await userCreateSchema.validate(body, {
            stripUnknown: true,
        });

        //verification si l'utilisateur existe deja
        const user = await prisma.user.findFirst({
            select: {
                id: true,
            },
            where: {
                email: validatedData.email,
            },
        });

        if (user) {
            return NextResponse.json(
                { message: "Utilisateur déjà existant" },
                { status: 409 }
            );
        }

        const newUser = await prisma.user.create({
            data: {
                ...validatedData,
                emailVerified: false,
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
