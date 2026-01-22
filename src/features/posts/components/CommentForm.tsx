"use client";

import { useState, useEffect } from "react";
import { FaPaperPlane, FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Input";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";

interface Writer {
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
}

interface CommentFormProps {
  postId: string;
  onCommentAdded?: () => void;
}

export function CommentForm({ postId, onCommentAdded }: CommentFormProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [writers, setWriters] = useState<Writer[]>([]);
  const [selectedWriterId, setSelectedWriterId] = useState<string | null>(null);
  const [showWriterMenu, setShowWriterMenu] = useState(false);
  const { data: session } = useSession();

  // Récupérer les writers disponibles
  useEffect(() => {
    const fetchWriters = async () => {
      if (!session?.user?.id) return;

      try {
        const response = await fetch(`/api/users/${session.user.id}/writer`);
        if (response.ok) {
          const data = await response.json();
          setWriters(data);
          // Sélectionner le writer personnel par défaut
          const personalWriter = data.find((w: Writer) => w.userId === session.user.id);
          if (personalWriter) {
            setSelectedWriterId(personalWriter.id);
          }
        }
      } catch (err) {
        console.error("Erreur lors du chargement des writers:", err);
      }
    };

    fetchWriters();
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim() || !selectedWriterId) {
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
        body: JSON.stringify({
          content: content.trim(),
          writerId: selectedWriterId,
        }),
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

  const selectedWriter = writers.find(w => w.id === selectedWriterId);
  const selectedAuthor = selectedWriter?.user || selectedWriter?.company;
  const selectedDisplayName = selectedWriter?.user?.firstName && selectedWriter?.user?.lastName
    ? `${selectedWriter.user.firstName} ${selectedWriter.user.lastName}`
    : selectedAuthor?.name || "Vous";

  return (
    <form onSubmit={handleSubmit} className="mt-4 border-t-2 border-border pt-4">
      <div className="flex gap-3">
        {/* Avatar avec sélecteur de writer */}
        <div className="shrink-0 relative">
          <button
            type="button"
            onClick={() => setShowWriterMenu(!showWriterMenu)}
            className="relative group"
            disabled={writers.length <= 1}
          >
            {selectedAuthor?.image ? (
              <Image
                src={selectedAuthor.image}
                alt={selectedDisplayName}
                width={32}
                height={32}
                className="border-2 border-border object-cover"
              />
            ) : (
              <div className="w-8 h-8 border-2 border-border bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-mono">
                {selectedDisplayName.charAt(0).toUpperCase()}
              </div>
            )}
            {writers.length > 1 && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background border-2 border-border flex items-center justify-center">
                <FaChevronDown className="text-[8px] text-foreground" />
              </div>
            )}
          </button>

          {/* Menu déroulant des writers */}
          {showWriterMenu && writers.length > 1 && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowWriterMenu(false)}
              />
              <div className="absolute top-full left-0 mt-2 bg-card border-2 border-border shadow-lg z-20 min-w-[200px]">
                {writers.map((writer) => {
                  const author = writer.user || writer.company;
                  const displayName = writer.user?.firstName && writer.user?.lastName
                    ? `${writer.user.firstName} ${writer.user.lastName}`
                    : author?.name || "Inconnu";

                  return (
                    <button
                      key={writer.id}
                      type="button"
                      onClick={() => {
                        setSelectedWriterId(writer.id);
                        setShowWriterMenu(false);
                      }}
                      className={`w-full flex items-center gap-3 p-3 hover:bg-muted transition-colors ${
                        selectedWriterId === writer.id ? 'bg-muted' : ''
                      }`}
                    >
                      {author?.image ? (
                        <Image
                          src={author.image}
                          alt={displayName}
                          width={24}
                          height={24}
                          className="border-2 border-border object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-6 h-6 border-2 border-border bg-muted flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold font-mono">
                            {displayName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span className="text-xs font-mono font-bold text-left truncate">
                        {displayName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
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
