"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Input";

interface CommentFormProps {
  postId: string;
  onCommentAdded?: () => void;
}

export function CommentForm({ postId, onCommentAdded }: CommentFormProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content.trim() }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du commentaire");
      }

      setContent("");
      onCommentAdded?.();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 border-t-2 border-border pt-4">
      <div className="flex gap-3">
        <div className="shrink-0">
          {/* Avatar de l'utilisateur connecté */}
          <div className="w-8 h-8 border-2 border-border bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold font-mono">
            U
          </div>
        </div>

        <div className="flex-1">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Écrivez un commentaire..."
            rows={2}
            disabled={isSubmitting}
          />

          {error && (
            <p className="text-error text-sm mt-1 font-mono">{error}</p>
          )}

          <div className="flex justify-end mt-2">
            <Button
              type="submit"
              disabled={!content.trim() || isSubmitting}
              variant="primary"
              size="sm"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Envoi...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Commenter</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
