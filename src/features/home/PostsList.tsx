"use client";

import { useEffect } from "react";
import { Post as PostComponent } from "@/features/posts/components/Post";
import { CreatePostForm } from "@/features/posts/components/CreatePostForm";
import { usePostsStore } from "@/stores/usePostsStore";
import { Post } from "@/types/post";

interface PostsListProps {
  initialPosts: Post[];
}

export function PostsList({ initialPosts }: PostsListProps) {
  const { posts, setPosts } = usePostsStore();

  // Initialiser le store avec les posts du serveur
  useEffect(() => {
    if (initialPosts.length > 0 && posts.length === 0) {
      setPosts(initialPosts);
    }
  }, [initialPosts, posts.length, setPosts]);

  // Utiliser les posts du store (pour les mises à jour en temps réel)
  const displayPosts = posts.length > 0 ? posts : initialPosts;

  return (
    <div className="space-y-6">
      <section aria-label="Créer une publication">
        <CreatePostForm />
      </section>
      <section aria-label="Liste des publications" aria-live="polite">
        <h2 className="sr-only">Publications récentes</h2>
        <div className="space-y-4" role="feed" aria-busy="false">
          {displayPosts.map((post, index) => (
            <article key={post.id} aria-posinset={index + 1} aria-setsize={displayPosts.length}>
              <PostComponent post={post} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
