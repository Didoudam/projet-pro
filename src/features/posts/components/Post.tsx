"use client";

import { Post as PrismaPost } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { getRelativeTime } from "@/lib/utils";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import { VoteButtons } from "./VoteButtons";
import { FaComment } from "react-icons/fa";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Card, CardContent } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";

type CommentWriter = {
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

type CommentType = {
    id: string;
    content: string;
    createdAt: Date;
    writer: CommentWriter;
    replies?: CommentType[];
    Vote?: Vote[];
};

type Vote = {
    id: string;
    status: boolean;
    writerId: string;
};

type PostWithAuthor = PrismaPost & {
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
    media?: Array<{
        id: string;
        url: string;
        altText: string | null;
        type: string | null;
    }>;
    Comment?: CommentType[];
    Vote?: Vote[];
};

interface PostProps {
    post: PostWithAuthor;
    className?: string;
}

export const Post = ({ post, className = "" }: PostProps) => {
    const [showComments, setShowComments] = useState(true);
    const [comments, setComments] = useState<CommentType[]>(post.Comment || []);
    const { data: session } = useSession();

    // Récupérer l'auteur (user ou company)
    const author = post.writer.user || post.writer.company;
    const authorName = author?.name || "Utilisateur inconnu";
    const authorImage = author?.image;
    const isCompany = !!post.writer.company;
    const authorId = post.writer.user?.id || post.writer.company?.id;
    const authorLink = isCompany ? `/companies/${authorId}` : `/profile/${authorId}`;

    // Pour les users, afficher prénom + nom si disponible
    const displayName =
        post.writer.user?.firstName && post.writer.user?.lastName
            ? `${post.writer.user.firstName} ${post.writer.user.lastName}`
            : authorName;

    const relativeTime = getRelativeTime(post.createdAt);
    const commentCount = comments.length;
    const isAuthenticated = !!session?.user;

    // Callback pour ajouter un nouveau commentaire
    const handleCommentAdded = async () => {
        try {
            // Récupérer les commentaires mis à jour depuis le serveur
            const response = await fetch(`/api/posts/${post.id}`);
            if (response.ok) {
                const updatedPost = await response.json();
                setComments(updatedPost.Comment || []);
            }
        } catch (error) {
            console.error("Erreur lors du rafraîchissement des commentaires:", error);
        }
    };

    return (
        <Card className={className}>
            <CardContent className="p-0">
                {/* Header avec avatar et infos auteur */}
                <div className="flex items-start gap-3 p-4 bg-muted/20 pattern-grid">
                    {/* Avatar cliquable */}
                    {authorId && (
                        <Link
                            href={authorLink}
                            className="shrink-0 hover:opacity-80 transition-opacity"
                        >
                            <Avatar
                                src={authorImage}
                                alt={displayName}
                                size={40}
                            />
                        </Link>
                    )}

                    {/* Infos auteur */}
                    <div className="flex-1 min-w-0">
                        {authorId ? (
                            <Link
                                href={authorLink}
                                className="font-bold text-sm font-mono uppercase tracking-wider text-foreground truncate hover:text-primary transition-colors block"
                            >
                                {displayName}
                            </Link>
                        ) : (
                            <p className="font-bold text-sm font-mono uppercase tracking-wider text-foreground truncate">
                                {displayName}
                            </p>
                        )}
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">{relativeTime}</p>
                    </div>
                </div>

                {/* Contenu du post */}
                <div className="px-4 py-4 bg-background border-y-2 border-border">
                    <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                        {post.content}
                    </p>
                </div>

                {/* Médias */}
                {post.media && post.media.length > 0 && (
                    <div className="space-y-2 p-4 bg-muted/10">
                        {post.media.map((media) => (
                            <div
                                key={media.id}
                                className="overflow-hidden border-2 border-border"
                            >
                                {media.type?.startsWith("image") ? (
                                    <div
                                        className="relative w-full"
                                        style={{ maxHeight: "384px" }}
                                    >
                                        <Image
                                            src={media.url}
                                            alt={media.altText || "Image du post"}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-cover"
                                            style={{ maxHeight: "384px" }}
                                        />
                                    </div>
                                ) : media.type?.startsWith("video") ? (
                                    <video
                                        src={media.url}
                                        controls
                                        className="w-full h-auto max-h-96"
                                    >
                                        Votre navigateur ne supporte pas la vidéo.
                                    </video>
                                ) : (
                                    <a
                                        href={media.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-3 bg-muted hover:bg-accent transition-colors"
                                    >
                                        Fichier joint
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Actions : Votes et Commentaires */}
                <div className="p-4 border-t-2 border-border bg-muted/20 flex items-center justify-between">
                    {/* Boutons de vote */}
                    <VoteButtons postId={post.id} votes={post.Vote || []} />

                    {/* Bouton pour afficher/masquer les commentaires */}
                    <button
                        onClick={() => setShowComments(!showComments)}
                        className="flex items-center gap-2 px-3 py-1.5 border-2 border-border bg-background text-foreground hover:border-primary hover:text-primary transition-all text-xs font-mono uppercase tracking-wider active:translate-x-[2px] active:translate-y-[2px]"
                    >
                        <FaComment />
                        <span>
                            {commentCount} {commentCount <= 1 ? "commentaire" : "commentaires"}
                        </span>
                    </button>
                </div>

                {/* Section commentaires */}
                {showComments && (
                    <div className="p-4 bg-muted/5 border-t-2 border-border">
                        {/* Liste des commentaires */}
                        {comments.length > 0 && (
                            <div className="space-y-2 mb-4">
                                {comments.map((comment) => (
                                    <Comment key={comment.id} comment={comment} />
                                ))}
                            </div>
                        )}

                        {/* Formulaire d'ajout de commentaire - seulement si connecté */}
                        {isAuthenticated ? (
                            <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
                        ) : (
                            <div className="p-4 bg-muted text-center border-2 border-border">
                                <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">
                                    Connectez-vous pour laisser un commentaire
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
