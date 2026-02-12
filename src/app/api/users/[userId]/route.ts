import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { userUpdateSchema } from "@/lib/schemas";
import { getAuthenticatedUser } from "@/lib/auth-helpers";

interface RouteParams {
    params: Promise<{ userId: string }>;
}

// GET /api/users/[userId]
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        // SÉCURISÉ - Requête paramétrée Prisma
        const { userId } = await params;

        const user = await prisma.user.findFirst({
            select: {
                id: true,
                name: true,
                email: true,
                writer: true,
            },
            where: {
                id: userId,
                emailVerified: true,
            },
        });

        if (!user || !user?.writer) {
            return NextResponse.json(
                { message: "utilisateur non trouvé" },
                { status: 404 }
            );
        }

        // recuperation des writer id des entreprise pour l'utilisateur
        const links = await prisma.writerLink.findMany({
            where: {
                userWriterId: user.writer.id,
            },
            select: {
                companyWriterId: true,
                companyWriter: {
                    include: {
                        company: true,
                    },
                },
            },
        });

        const companyWriters: { id: string; name: string }[] = links.map(
            (l) => ({
                id: l.companyWriterId,
                name: l.companyWriter.company?.name ?? "? compagny sans nom",
            })
        ); // transforme en tableau de Strings (id)
        const writers: { id: string; name: string }[] = [
            { id: user.writer.id, name: "My Writer" },
            ...companyWriters,
        ];

        return NextResponse.json({ ...user, writers });
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}

// PUT/PATCH /api/users/[userId]
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { userId } = await params;

        const user = await prisma.user.findFirst({
            select: {
                id: true,
            },
            where: {
                id: userId,
                emailVerified: true,
            },
        });

        if (!user) {
            return NextResponse.json(
                { message: "utilisateur non trouvé" },
                { status: 404 }
            );
        }

        const body = await request.json();

        // Validation des données
        const { email, ...validatedData } = await userUpdateSchema.validate(
            body,
            {
                stripUnknown: true,
            }
        );

        const updatedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                ...validatedData,
            },
        });

        return NextResponse.json(updatedUser);
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

// PATCH /api/users/[userId] - Alias de PUT
export async function PATCH(request: NextRequest, context: RouteParams) {
    return PUT(request, context);
}
