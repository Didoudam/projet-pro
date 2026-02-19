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

// Type pour les commentaires
type CommentFromDb = {
  id: string;
  content: string;
  createdAt: Date;
  commentId: string | null;
  postId: string | null;
  writerId: string;
  votes: number | null;
  writer: {
    id: string;
    userId: string | null;
    companyId: string | null;
    user: {
      id: string;
      name: string;
      image: string | null;
      firstName: string | null;
      lastName: string | null;
    } | null;
    company: {
      id: string;
      name: string;
      image: string | null;
    } | null;
  };
  Vote: Array<{
    id: string;
    status: boolean;
    writerId: string;
  }>;
  replies?: CommentFromDb[];
};

// Fonction pour construire l'arbre de commentaires (profondeur illimitée)
function buildCommentTree(comments: CommentFromDb[]): CommentFromDb[] {
  const commentMap = new Map<string, CommentFromDb>();
  const rootComments: CommentFromDb[] = [];

  // Indexer tous les commentaires par ID
  for (const comment of comments) {
    commentMap.set(comment.id, { ...comment, replies: [] });
  }

  // Construire l'arbre
  for (const comment of comments) {
    const commentWithReplies = commentMap.get(comment.id)!;

    if (comment.commentId === null) {
      rootComments.push(commentWithReplies);
    } else {
      const parent = commentMap.get(comment.commentId);
      if (parent) {
        parent.replies!.push(commentWithReplies);
      }
    }
  }

  // Trier les réponses par date (plus anciennes en premier)
  const sortReplies = (comments: CommentFromDb[]) => {
    for (const comment of comments) {
      if (comment.replies && comment.replies.length > 0) {
        comment.replies.sort((a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        sortReplies(comment.replies);
      }
    }
  };

  // Trier les commentaires racines par date (plus récents en premier)
  rootComments.sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  sortReplies(rootComments);

  return rootComments;
}

export async function HomePage() {
  // Récupérer les posts sans les commentaires
  const posts = await prisma.post.findMany({
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
      Vote: true,
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  const postIds = posts.map(p => p.id);

  // Récupérer TOUS les commentaires
  const allCommentsInDb = await prisma.comment.findMany({
    include: {
      writer: {
        include: writerSelect,
      },
      Vote: true,
    },
  });

  // Créer un index des commentaires par ID
  const commentById = new Map(allCommentsInDb.map(c => [c.id, c]));

  // Fonction pour trouver le postId racine d'un commentaire
  const getPostIdForComment = (comment: typeof allCommentsInDb[0], visited = new Set<string>()): string | null => {
    if (visited.has(comment.id)) return null;
    visited.add(comment.id);

    if (comment.postId) return comment.postId;
    if (comment.commentId) {
      const parent = commentById.get(comment.commentId);
      if (parent) return getPostIdForComment(parent, visited);
    }
    return null;
  };

  // Grouper les commentaires par postId
  const commentsByPostId = new Map<string, typeof allCommentsInDb>();
  for (const postId of postIds) {
    commentsByPostId.set(postId, []);
  }

  for (const comment of allCommentsInDb) {
    const postId = getPostIdForComment(comment);
    if (postId && commentsByPostId.has(postId)) {
      commentsByPostId.get(postId)!.push(comment);
    }
  }

  // Construire l'arbre pour chaque post
  const postsWithComments = posts.map(post => ({
    ...post,
    Comment: buildCommentTree(commentsByPostId.get(post.id) as CommentFromDb[] || []),
  }));

  return (
    <div className="min-h-screen bg-background pattern-dots" role="application" aria-label="Fil d'actualité">
      <main className="max-w-4xl mx-auto px-4 py-6" aria-label="Contenu principal">
        <PostsList initialPosts={postsWithComments} />
      </main>
    </div>
  );
}
