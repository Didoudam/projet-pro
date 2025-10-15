import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'
import { userUpdateSchema } from "@/lib/schemas";

interface RouteParams {
    params: Promise<{ userId: string }>;
}

// GET /api/users/[userId]
export async function GET(request: NextRequest, { params }: RouteParams ) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }
        //params.then((userId) => console.log(userId)).catch(()=> console.error("eeeeee"));
        const { userId } = await params;

        const user = await prisma.user.findFirst({
            select: {
                id: true,
                name: true,
                email: true,
            },
            where: {
                id: userId,
                emailVerified: true,
            }
        })

        if (!user) {
            return NextResponse.json({ message: "utilisateur non trouvé" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}

// PUT /api/users/[userId]
export async function PUT(request: NextRequest, { params }: RouteParams) {
	try {
		//Vérifier que l'user est identifié ici
		// if (!session?.session?.activeOrganizationId) {
		//     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
		// }

        const { userId } = await params;

        const user = await prisma.user.findFirst({
            select: {
                id: true,
            },
            where: {
                id: userId,
                emailVerified: true,
            }
        })

        if (!user) {
            return NextResponse.json({ message: "utilisateur non trouvé" }, { status: 404 });
        }

		const body = await request.json();

		// Validation des données
		const { email, ...validatedData } = await userUpdateSchema.validate(body, {
			stripUnknown: true,
		});

        const updatedUser = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...validatedData
            }
        });

        return NextResponse.json(updatedUser);
	} catch (error) {
		console.log(error);
		if (error instanceof Error && error.name === "ValidationError") {
			console.log(error.message);
			return NextResponse.json({ message: "Données invalides", details: error.message }, { status: 400 });
		}

		console.error("Create alert error:", error);
		return NextResponse.json({ message: "Erreur lors de la création de l'alerte" }, { status: 500 });
	}
}

