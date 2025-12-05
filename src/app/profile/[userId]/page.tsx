import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { UserProfile } from "@/features/users/components/UserProfile";

type PageProps = {
    params: Promise<{ userId: string }>;
};

// Sélection des champs pour user/company
const writerSelect = {
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
};

export default async function UserProfilePage({ params }: PageProps) {
    const { userId } = await params;

    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            skill: true,
            Experience: {
                include: {
                    company: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
                orderBy: { startDate: "desc" },
            },
            formation: {
                include: {
                    company: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
                orderBy: { startDate: "desc" },
            },
        },
    });

    if (!user) {
        notFound();
    }

    // Récupérer les posts de l'utilisateur avec tous les détails
    const writer = await prisma.writer.findFirst({
        where: { userId: user.id },
    });

    const posts = writer
        ? await prisma.post.findMany({
              where: { writerId: writer.id },
              orderBy: { createdAt: "desc" },
              take: 10,
              include: {
                  writer: {
                      include: writerSelect,
                  },
                  media: {
                      select: {
                          id: true,
                          url: true,
                          altText: true,
                          type: true,
                      },
                  },
                  Comment: {
                      where: {
                          commentId: null, // Seulement les commentaires de premier niveau
                      },
                      include: {
                          writer: {
                              include: writerSelect,
                          },
                          replies: {
                              include: {
                                  writer: {
                                      include: writerSelect,
                                  },
                              },
                              orderBy: { createdAt: "asc" },
                          },
                      },
                      orderBy: { createdAt: "asc" },
                  },
                  Vote: true,
              },
          })
        : [];

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 py-6">
                <UserProfile user={user} posts={posts} />
            </main>
        </div>
    );
}
