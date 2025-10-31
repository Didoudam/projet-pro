import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'
import { voteUpdateSchema } from "@/lib/schemas";
import { getAuthenticatedUser } from "@/lib/auth-helpers";


interface RouteParams {
    params: Promise<{ voteId: string }>;
}

// PUT /api/votes/[voteId]
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        const auth = await getAuthenticatedUser(request)
                if(auth instanceof NextResponse){
                    return auth
                }

        const { voteId } = await params;

        const vote = await prisma.vote.findFirst({
            select: {
                id: true,
            },
            where: {
                id: voteId,
            }
        })

        if (!vote) {
            return NextResponse.json({ message: "vote non trouvé" }, { status: 404 });
        }

        const body = await request.json();

        // Validation des données
        const { ...validatedData } = await voteUpdateSchema.validate(body, {
            stripUnknown: true,
        });

        const updatedVote = await prisma.vote.update({
            where: {
                id: voteId
            },
            data: {
                ...validatedData,
                writerId: auth.writerId
            }
        });

        return NextResponse.json(updatedVote);
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

export async function DELETE(request: NextRequest, { params }: RouteParams){
        try {
        const auth = await getAuthenticatedUser(request)
                if(auth instanceof NextResponse){
                    return auth
                }

        const { voteId } = await params;

        const vote = await prisma.vote.findFirst({
            select: {
                id: true,
            },
            where: {
                id: voteId,
            }
        })

        if (!vote) {
            return NextResponse.json({ message: "vote non trouvé" }, { status: 404 });
        }

        const deletedVote = await prisma.vote.delete({
            where: {
                id: voteId
            },
        });

        return NextResponse.json(deletedVote);
    } catch (error) {
        console.log(error);
        if (error instanceof Error && error.name === "ValidationError") {
            console.log(error.message);
            return NextResponse.json({ message: "Données invalides", details: error.message }, { status: 400 });
        }

        console.error("Create alert error:", error);
        return NextResponse.json({ message: "Erreur lors de la supression de l'alerte" }, { status: 500 });
    }
}