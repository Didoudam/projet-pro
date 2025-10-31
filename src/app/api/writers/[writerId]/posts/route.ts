import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/auth-helpers";

interface RouteParams {
    params: Promise<{ writerId: string }>;
}

// retourne tous les posts d'un writer
// GET /api/writers/[writerId]/posts
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }
        const { writerId } = await params;

        // GET /api/users/[writerId]/posts?page=x&limit=y
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "100");
        const offset = (page - 1) * limit;

        const countRecords = async () => {
            if (page === 1) {
                return await prisma.post.count({
                    where: {
                        writerId,
                    },
                });
            }

            return undefined;
        };
        const [posts, totalCount] = await Promise.all([
            prisma.post.findMany({
                where: {
                    writerId,
                },
                take: limit,
                skip: offset,
                orderBy: {
                    createdAt: "desc",
                },
            }),

            countRecords,
        ]);

        return NextResponse.json({
            posts,
            totalCount: totalCount !== undefined ? totalCount : -1,
        });
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}
