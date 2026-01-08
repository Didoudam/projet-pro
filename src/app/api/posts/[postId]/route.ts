import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await params;

    const post = await prisma.post.findUnique({
      where: { id: postId },
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
        Comment: {
          where: {
            commentId: null,
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
            Vote: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        Vote: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post non trouvé' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
