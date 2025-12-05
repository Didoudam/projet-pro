"use client";

import { useState } from "react";
import { usePostsStore } from "@/stores/usePostsStore";
import { useToastStore } from "@/stores/useToastStore";
import { useSession } from "@/lib/auth-client";

export function CreatePostForm() {
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { createPost } = usePostsStore();
    const { success, error } = useToastStore();
    const { data: session } = useSession();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!content.trim()) {
            error("Le contenu ne peut pas être vide");
            return;
        }

        if (!session?.user) {
            error("Vous devez être connecté pour publier un post");
            return;
        }

        setIsSubmitting(true);
        try {
            await createPost({ content: content.trim() });
            success("Post publié avec succès !");
            setContent("");
        } catch (err) {
            error("Erreur lors de la publication du post");
            console.error("Erreur création post:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!session?.user) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <p className="text-gray-600 text-center">
                    Connectez-vous pour publier un post
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Quoi de neuf ?"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        disabled={isSubmitting}
                    />
                    <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                        <span>
                            {content.length} / 5000 caractères
                        </span>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting || !content.trim()}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Publication..." : "Publier"}
                    </button>
                </div>
            </form>
        </div>
    );
}
