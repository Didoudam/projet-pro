import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { postCreateSchema } from "@/lib/schemas";
import { getAuthenticatedUser } from "@/lib/auth-helpers";


// POST /api/post           Création de post
export async function POST(request: NextRequest) {
    try {
        const auth = await getAuthenticatedUser(request)
        if(auth instanceof NextResponse){
            return auth
        }
        const body = await request.json();

        // Validation des données
        const validatedData = await postCreateSchema.validate(body, {
            stripUnknown: true,
        });

        //verification si le post existe deja
        const post = await prisma.post.findFirst({
            select: {
                id: true,
            },
        });

        if (post) {
            return NextResponse.json({ message: "Post déjà existant" }, { status: 404 });
        }
        const newPost = await prisma.post.create({
            data: {
                ...validatedData,
                writerId: auth.writerId
            },
        });

        return NextResponse.json(newPost, { status: 201 });
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
