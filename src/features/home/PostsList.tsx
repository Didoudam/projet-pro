"use client";

import { useEffect } from "react";
import { Post } from "@/features/posts/components/Post";
import { CreatePostForm } from "@/features/posts/components/CreatePostForm";
import { usePostsStore } from "@/stores/usePostsStore";

type PostType = {
  id: string;
  content: string;
  createdAt: Date;
  writer: any;
  media?: any[];
  Comment?: any[];
};

interface PostsListProps {
  initialPosts: PostType[];
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
      <CreatePostForm />
      <div className="space-y-4">
        {displayPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
