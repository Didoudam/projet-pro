import { prisma } from "@/lib/prisma";
import { PostsList } from "./PostsList";

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

// Configuration de récupération des posts
const getPostsQuery = () => ({
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
          orderBy: { createdAt: "asc" as const },
        },
      },
      orderBy: { createdAt: "asc" as const },
    },
  },
  orderBy: { createdAt: "desc" as const },
  take: 100,
});

export async function HomePage() {
  const posts = await prisma.post.findMany(getPostsQuery());

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-6">
        {posts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <p className="text-gray-500 text-lg">
              Aucun post à afficher pour le moment.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Soyez le premier à publier quelque chose !
            </p>
          </div>
        ) : (
          <PostsList initialPosts={posts} />
        )}
      </main>
    </div>
  );
}
