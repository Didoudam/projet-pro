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
        Vote: true,
        replies: {
          include: {
            writer: {
              include: writerSelect,
            },
            Vote: true,
          },
          orderBy: { createdAt: "asc" as const },
        },
      },
      orderBy: { createdAt: "asc" as const },
    },
    Vote: true,
  },
  orderBy: { createdAt: "desc" as const },
  take: 100,
});

export async function HomePage() {
  const posts = await prisma.post.findMany(getPostsQuery());

  return (
    <div className="min-h-screen bg-background pattern-dots">
      <main className="max-w-4xl mx-auto px-4 py-6">
        <PostsList initialPosts={posts} />
      </main>
    </div>
  );
}
