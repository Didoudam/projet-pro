import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
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
        const writer = await prisma.writer.findFirst({
            where: { userId: session.user.id },
        });

        if (!writer) {
            return NextResponse.json(
                { error: "Writer non trouvé" },
                { status: 404 }
            );
        }

        return NextResponse.json(writer);
    } catch (error) {
        console.error("Erreur lors de la récupération du writer:", error);
        return NextResponse.json(
            { error: "Erreur serveur" },
            { status: 500 }
        );
    }
}
