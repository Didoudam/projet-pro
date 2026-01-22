"use client";

import { useState } from "react";
import { usePostsStore } from "@/stores/usePostsStore";
import { useToastStore } from "@/stores/useToastStore";
import { useSession } from "@/lib/auth-client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

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
            <Card variant="technical">
                <CardContent className="text-center py-8">
                    <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">
                        {`// Authentication required`}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        Connectez-vous pour publier un post
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card variant="technical">
            <CardHeader pattern="grid">
                <CardTitle mono>Nouveau Post</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Quoi de neuf ?"
                            rows={4}
                            disabled={isSubmitting}
                        />
                        <div className="mt-2 flex justify-between items-center text-xs font-mono text-muted-foreground">
                            <span className="uppercase tracking-wider">
                                Char count:
                            </span>
                            <span className="tabular-nums">
                                {content.length} / 5000
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting || !content.trim()}
                        >
                            {isSubmitting ? "Publishing..." : "Publier"}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
