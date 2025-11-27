import { create } from "zustand";

type Writer = {
  id: string;
  userId: string | null;
  companyId: string | null;
  user?: {
    id: string;
    name: string;
    image: string | null;
    firstName: string | null;
    lastName: string | null;
  } | null;
  company?: {
    id: string;
    name: string;
    image: string | null;
  } | null;
};

type Comment = {
  id: string;
  content: string;
  createdAt: Date;
  writer: Writer;
  replies?: Comment[];
};

type Post = {
  id: string;
  content: string;
  createdAt: Date;
  writer: Writer;
  media?: Array<{
    id: string;
    url: string;
    altText: string | null;
    type: string | null;
  }>;
  Comment?: Comment[];
};

type PostsStore = {
  posts: Post[];
  isLoading: boolean;
  error: string | null;

  // Actions
  setPosts: (posts: Post[]) => void;
  fetchPosts: () => Promise<void>;
  addPost: (post: Post) => void;
  addComment: (postId: string, comment: Comment) => void;
  optimisticAddComment: (postId: string, content: string, tempId: string) => void;
};

export const usePostsStore = create<PostsStore>((set, get) => ({
  posts: [],
  isLoading: false,
  error: null,

  // Définir les posts (utilisé par Server Component)
  setPosts: (posts) => set({ posts }),

  // Récupérer les posts depuis l'API
  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des posts");
      }
      const posts = await response.json();
      set({ posts, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Une erreur est survenue",
        isLoading: false,
      });
    }
  },

  // Ajouter un nouveau post (optimistic update)
  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),

  // Ajouter un commentaire à un post existant
  addComment: (postId, comment) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              Comment: [...(post.Comment || []), comment],
            }
          : post
      ),
    })),

  // Ajout optimiste d'un commentaire (avant la réponse du serveur)
  optimisticAddComment: (postId, content, tempId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              Comment: [
                ...(post.Comment || []),
                {
                  id: tempId,
                  content,
                  createdAt: new Date(),
                  writer: {
                    id: "temp",
                    userId: "temp",
                    companyId: null,
                    user: {
                      id: "temp",
                      name: "Vous",
                      image: null,
                      firstName: "Vous",
                      lastName: "",
                    },
                  },
                  replies: [],
                },
              ],
            }
          : post
      ),
    })),
}));
