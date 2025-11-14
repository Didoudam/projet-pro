import { create } from "zustand";
import { fetchJson, postJson, patchJson, deleteJson } from "@/lib/fetch-utils";
import { Post } from "@prisma/client";
import { CreatePostSchemaType, UpdatePostSchemaType } from "@/lib/schemas";

interface FetchOptions {
    force?: boolean;
    safety?: boolean;
}

// Type pour un post avec infos du writer
type PostWithWriter = Post & {
    writer: {
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
};

type FetchContext =
    | { type: 'all' }
    | { type: 'myPosts'; userId: string }
    | { type: 'writer'; writerId: string };

interface AllPostsStore {
    posts: PostWithWriter[];
    fetchContext?: FetchContext;
    isLoading: boolean;

    // Récupérer tous les posts (fil d'actualité global)
    fetchAllPosts: (options?: FetchOptions) => Promise<void>;

    // Récupérer les posts de l'utilisateur connecté
    fetchMyPosts: (userId: string, options?: FetchOptions) => Promise<void>;

    // Récupérer les posts d'un writer spécifique
    fetchPostsByWriter: (
        userId: string,
        writerId: string,
        options?: FetchOptions
    ) => Promise<void>;

    // Créer un post
    createPost: (
        data: CreatePostSchemaType,
        userId: string,
        writerId: string
    ) => Promise<void>;

    // Mettre à jour un post
    updatePost: (postId: string, data: UpdatePostSchemaType) => Promise<void>;

    // Supprimer un post
    deletePost: (postId: string) => Promise<void>;
}

export const useAllPostsStore = create<AllPostsStore>((set, get) => ({
    posts: [],
    fetchContext: undefined,
    isLoading: false,

    fetchAllPosts: async (options?: FetchOptions) => {
        const { force = false, safety = false } = options ?? {};
        const { posts, fetchContext } = get();

        // Si déjà chargé en mode 'all' et pas de force reload
        if (fetchContext?.type === 'all' && posts.length > 0 && !force) {
            return;
        }

        set({ isLoading: true });

        try {
            const fetchedPosts = await fetchJson<PostWithWriter[]>(
                `/api/posts`
            );

            set({
                posts: fetchedPosts,
                fetchContext: { type: 'all' },
                isLoading: false,
            });
        } catch (err) {
            if (safety) {
                set({ posts: [], isLoading: false });
                return;
            }

            set({ isLoading: false });
            throw err;
        }
    },

    fetchMyPosts: async (userId: string, options?: FetchOptions) => {
        const { force = false, safety = false } = options ?? {};
        const { posts, fetchContext } = get();

        // Si déjà chargé pour cet userId et pas de force reload
        if (
            fetchContext?.type === 'myPosts' &&
            fetchContext.userId === userId &&
            posts.length > 0 &&
            !force
        ) {
            return;
        }

        set({ isLoading: true });

        try {
            const fetchedPosts = await fetchJson<PostWithWriter[]>(
                `/api/users/${userId}/posts`
            );

            set({
                posts: fetchedPosts,
                fetchContext: { type: 'myPosts', userId },
                isLoading: false,
            });
        } catch (err) {
            if (safety) {
                set({ posts: [], isLoading: false });
                return;
            }

            set({ isLoading: false });
            throw err;
        }
    },

    fetchPostsByWriter: async (
        userId: string,
        writerId: string,
        options?: FetchOptions
    ) => {
        const { force = false, safety = false } = options ?? {};
        const { fetchContext, posts } = get();

        // Si déjà chargé pour ce writer et pas de force reload
        if (
            fetchContext?.type === 'writer' &&
            fetchContext.writerId === writerId &&
            posts.length > 0 &&
            !force
        ) {
            return;
        }

        set({ isLoading: true });

        try {
            const fetchedPosts = await fetchJson<PostWithWriter[]>(
                `/api/users/${userId}/writer/${writerId}/posts`
            );

            set({
                posts: fetchedPosts,
                fetchContext: { type: 'writer', writerId },
                isLoading: false,
            });
        } catch (err) {
            if (safety) {
                set({ posts: [], isLoading: false });
                return;
            }

            set({ isLoading: false });
            throw err;
        }
    },

    createPost: async (
        data: CreatePostSchemaType,
        userId: string,
        writerId: string
    ) => {
        try {
            const newPost = await postJson<PostWithWriter>(
                `/api/users/${userId}/writer/${writerId}/posts`,
                data
            );

            // Ajouter le nouveau post au début de la liste
            set((state) => ({
                posts: [newPost, ...state.posts],
            }));
        } catch (err) {
            throw err;
        }
    },

    updatePost: async (postId: string, data: UpdatePostSchemaType) => {
        try {
            const updatedPost = await patchJson<PostWithWriter>(
                `/api/posts/${postId}`,
                data
            );

            // Mettre à jour le post dans la liste
            set((state) => ({
                posts: state.posts.map((post) =>
                    post.id === postId ? updatedPost : post
                ),
            }));
        } catch (err) {
            throw err;
        }
    },

    deletePost: async (postId: string) => {
        try {
            await deleteJson(`/api/posts/${postId}`);

            // Retirer le post de la liste
            set((state) => ({
                posts: state.posts.filter((post) => post.id !== postId),
            }));
        } catch (err) {
            throw err;
        }
    },
}));
