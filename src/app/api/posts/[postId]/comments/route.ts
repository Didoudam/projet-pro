import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'


interface RouteParams {
    params: Promise<{ postId: string }>;
}


// retourne tous les commentaire d'un post
// GET /api/users/[postId]/posts
export async function GET(request: NextRequest, { params }: RouteParams ) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }
        //params.then((postId) => console.log(postId)).catch(()=> console.error("eeeeee"));
        const { postId } = await params;

        const post = await prisma.post.findFirst({
            select: {
                id: true,
            },
            where: {
                id: postId,
            }
        })

        if (!post) {
            return NextResponse.json({ message: "post non trouvé" }, { status: 404 });
        }

        // GET /api/users/[postId]/posts?page=x&limit=y
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "100");
        const offset = (page - 1) * limit;

        const countRecords = async () => {
            if (page === 1) {
                return await prisma.comment.count({ where: {
                        postId,
                    } });
            }

            return undefined;
        }
        const [comments, totalCount] = await Promise.all([
            prisma.comment.findMany({
                where: {
                    postId,
                },
                take: limit,
                skip: offset,
                orderBy: {
                    createdAt : 'desc'
                }
            }),

            countRecords,
        ]);

        return NextResponse.json({comments, totalCount: totalCount !== undefined ? totalCount : -1});
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}