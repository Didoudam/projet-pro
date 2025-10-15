import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'

interface RouteParams {
    params: Promise<{ userId: string, writerId : string }>;
}

// GET /api/users/[userId]/[writerId]
export async function GET(request: NextRequest, { params }: RouteParams ) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }
        //params.then((userId) => console.log(userId)).catch(()=> console.error("eeeeee"));
        const { userId,writerId } = await params;

        const writer = await prisma.writer.findFirst({
            select: {
                id: true,
            },
            where: {
                userId: userId,
                id: writerId
            }
        })

        if (!writer) {
            return NextResponse.json({ message: "Créateur non trouvé" }, { status: 404 });
        }

        return NextResponse.json(writer);
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}
