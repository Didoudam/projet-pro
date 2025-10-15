import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'


interface RouteParams {
    params: Promise<{ writerId: string }>;
}


// retourne tous les posts d'un user
// GET /api/writers/[writerId]/posts
export async function GET(request: NextRequest, { params }: RouteParams ) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }
        //params.then((writerId) => console.log(writerId)).catch(()=> console.error("eeeeee"));
        const { writerId } = await params;

        const writer = await prisma.post.findFirst({
            select: {
                id: true,
            },
            where: {
                id: writerId,
            }
        })

        if (!writer) {
            return NextResponse.json({ message: "utilisateur non trouvé" }, { status: 404 });
        }

        // GET /api/users/[writerId]/posts?page=x&limit=y
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "100");
        const offset = (page - 1) * limit;

        const countRecords = async () => {
            if (page === 1) {
                return await prisma.post.count({ where: {
                        writerId,
                    } });
            }

            return undefined;
        }
        const [posts, totalCount] = await Promise.all([
            prisma.post.findMany({
                where: {
                    writerId,
                },
                take: limit,
                skip: offset,
                orderBy: {
                    createdAt : 'desc'
                }
            }),

            countRecords,
        ]);

        return NextResponse.json({posts, totalCount: totalCount !== undefined ? totalCount : -1});
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}

