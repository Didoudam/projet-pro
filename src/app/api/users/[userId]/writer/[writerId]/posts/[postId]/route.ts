import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { postCreateSchema } from "@/lib/schemas";
import { getAuthenticatedUser } from "@/lib/auth-helpers";

interface RouteParams {
    params: Promise<{ userId: string; postId: string }>;
}

// TODO -- fichier a faire


// /api/users/[userId]/writer/[writerId]/posts/[postId]         Création de post
export async function POST(request: NextRequest, { params }: RouteParams) {
    try {
        const { userId, postId } = await params;
        const auth = await getAuthenticatedUser(request) //{userId})
        if(auth instanceof NextResponse){
            return auth
        }

        if (auth.userId !== userId) {
            return NextResponse.json({ message: "Non authorisé" }, { status: 403 });
        }

        const body = await request.json();

        // /api/writer/[writerId]/posts/[postId]/comments

        // Validation des données
        const validatedData = await postCreateSchema.validate(body, {
            stripUnknown: true,
        });

        //verification si le post existe deja
        const post = await prisma.post.findFirst({
            select: {
                id: true,
            },
            where:{
                id: postId
            }
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
