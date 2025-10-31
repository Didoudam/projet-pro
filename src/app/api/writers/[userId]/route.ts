import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/auth-helpers";

interface RouteParams {
    params: Promise<{ userId: string; writerId: string }>;
}

// GET /api/users/[userId]/[writerId]
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { userId } = await params;

        const writer = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                writer: {
                    include: {
                        linkedCompanies: {
                            include: {
                                companyWriter: {
                                    include: {
                                        company: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!writer) {
            return NextResponse.json(
                { message: "Créateur non trouvé" },
                { status: 404 }
            );
        }

        return NextResponse.json(writer);
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}
