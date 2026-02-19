import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Type pour les commentaires avec writer
type CommentWithWriter = {
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
  replies?: CommentWithWriter[];
};

// Fonction pour construire l'arbre de commentaires (profondeur illimitée)
function buildCommentTree(comments: CommentWithWriter[]): CommentWithWriter[] {
  const commentMap = new Map<string, CommentWithWriter>();
  const rootComments: CommentWithWriter[] = [];

  // Indexer tous les commentaires par ID
  for (const comment of comments) {
    commentMap.set(comment.id, { ...comment, replies: [] });
  }

  // Construire l'arbre
  for (const comment of comments) {
    const commentWithReplies = commentMap.get(comment.id)!;

    if (comment.commentId === null) {
      // C'est un commentaire racine
      rootComments.push(commentWithReplies);
    } else {
      // C'est une réponse, l'ajouter au parent
      const parent = commentMap.get(comment.commentId);
      if (parent) {
        parent.replies!.push(commentWithReplies);
      }
    }
  }

  // Trier les réponses par date (plus anciennes en premier)
  const sortReplies = (comments: CommentWithWriter[]) => {
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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await params;

    // Récupérer le post sans les commentaires
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
        Vote: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post non trouvé' }, { status: 404 });
    }

    // Récupérer TOUS les commentaires pour filtrer ceux liés à ce post
    const allCommentsInDb = await prisma.comment.findMany({
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
    });

    // Créer un index des commentaires par ID pour recherche rapide
    const commentById = new Map(allCommentsInDb.map(c => [c.id, c]));

    // Fonction pour trouver le postId racine d'un commentaire
    const getPostIdForComment = (comment: typeof allCommentsInDb[0], visited = new Set<string>()): string | null => {
      if (visited.has(comment.id)) return null; // Éviter les boucles infinies
      visited.add(comment.id);

      if (comment.postId) return comment.postId;
      if (comment.commentId) {
        const parent = commentById.get(comment.commentId);
        if (parent) return getPostIdForComment(parent, visited);
      }
      return null;
    };

    // Filtrer les commentaires qui appartiennent à ce post
    const commentsForPost = allCommentsInDb.filter(c => getPostIdForComment(c) === postId);

    // Construire l'arbre de commentaires
    const commentTree = buildCommentTree(commentsForPost as CommentWithWriter[]);

    return NextResponse.json({
      ...post,
      Comment: commentTree,
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
