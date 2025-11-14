import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { postUpdateSchema } from "@/lib/schemas";
import { getAuthenticatedUser } from "@/lib/auth-helpers";

interface RouteParams {
    params: Promise<{ postId: string }>;
}

// GET /api/post/[postId]       Recuperation d'un post par id
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }
        //params.then((postId) => console.log(postId)).catch(()=> console.error("eeeeee"));
        const { postId } = await params;

        const post = await prisma.post.findFirst({
            where: {
                id: postId,
            },
            include: {
                writer: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                image: true,
                                firstName: true,
                                lastName: true,
                            },
                        },
                        company: {
                            select: {
                                id: true,
                                name: true,
                                image: true,
                            },
                        },
                    },
                },
            },
        });

        if (!post) {
            return NextResponse.json(
                { message: "post non trouvé" },
                { status: 404 }
            );
        }

        return NextResponse.json(post);
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}

// PUT /api/users/[postId]      Modification d'un post par id
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { postId } = await params;

        const post = await prisma.post.findFirst({
            select: {
                id: true,
            },
            where: {
                id: postId,
            },
        });

        if (!post) {
            return NextResponse.json(
                { message: "post non trouvé" },
                { status: 404 }
            );
        }

        const body = await request.json();

        // Validation des données
        const validatedData = await postUpdateSchema.validate(body, {
            stripUnknown: true,
        });

        const updatedPost = await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                ...validatedData,
            },
        });

        return NextResponse.json(updatedPost);
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

// PATCH /api/posts/[postId]      Modification partielle d'un post par id
export async function PATCH(request: NextRequest, { params }: RouteParams) {
    try {
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { postId } = await params;

        const post = await prisma.post.findFirst({
            select: {
                id: true,
                writerId: true,
            },
            where: {
                id: postId,
            },
        });

        if (!post) {
            return NextResponse.json(
                { message: "post non trouvé" },
                { status: 404 }
            );
        }

        // Vérifier que l'utilisateur est propriétaire du post
        if (post.writerId !== auth.writerId) {
            return NextResponse.json(
                { message: "Non autorisé à modifier ce post" },
                { status: 403 }
            );
        }

        const body = await request.json();

        // Validation des données
        const validatedData = await postUpdateSchema.validate(body, {
            stripUnknown: true,
        });

        const updatedPost = await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                ...validatedData,
            },
            include: {
                writer: {
                    select: {
                        id: true,
                        userId: true,
                        companyId: true,
                    },
                },
            },
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        console.log(error);
        if (error instanceof Error && error.name === "ValidationError") {
            console.log(error.message);
            return NextResponse.json(
                { message: "Données invalides", details: error.message },
                { status: 400 }
            );
        }

        console.error("Update post error:", error);
        return NextResponse.json(
            { message: "Erreur lors de la modification du post" },
            { status: 500 }
        );
    }
}

// DELETE /api/posts/[postId]      Suppression d'un post par id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { postId } = await params;

        const post = await prisma.post.findFirst({
            select: {
                id: true,
                writerId: true,
            },
            where: {
                id: postId,
            },
        });

        if (!post) {
            return NextResponse.json(
                { message: "post non trouvé" },
                { status: 404 }
            );
        }

        // Vérifier que l'utilisateur est propriétaire du post
        if (post.writerId !== auth.writerId) {
            return NextResponse.json(
                { message: "Non autorisé à supprimer ce post" },
                { status: 403 }
            );
        }

        await prisma.post.delete({
            where: {
                id: postId,
            },
        });

        return NextResponse.json(
            { message: "Post supprimé avec succès" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Delete post error:", error);
        return NextResponse.json(
            { message: "Erreur lors de la suppression du post" },
            { status: 500 }
        );
    }
}
