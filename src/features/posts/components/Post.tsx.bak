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
    const { data: session } = useSession();

    // Récupérer l'auteur (user ou company)
    const author = post.writer.user || post.writer.company;
    const authorName = author?.name || "Utilisateur inconnu";
    const authorImage = author?.image;
    const authorId = post.writer.user?.id || post.writer.company?.id;

    // Pour les users, afficher prénom + nom si disponible
    const displayName =
        post.writer.user?.firstName && post.writer.user?.lastName
            ? `${post.writer.user.firstName} ${post.writer.user.lastName}`
            : authorName;

    const relativeTime = getRelativeTime(post.createdAt);
    const commentCount = post.Comment?.length || 0;
    const isAuthenticated = !!session?.user;

    return (
        <div
            className={`border rounded-lg p-4 bg-white shadow-sm ${className}`}
        >
            {/* Header avec avatar et infos auteur */}
            <div className="flex items-start gap-3 mb-3">
                {/* Avatar cliquable */}
                {authorId && (
                    <Link
                        href={`/profile/${authorId}`}
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        {authorImage ? (
                            <Image
                                src={authorImage}
                                alt={displayName}
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                                {displayName.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </Link>
                )}

                {/* Infos auteur */}
                <div className="flex-1 min-w-0">
                    {authorId ? (
                        <Link
                            href={`/profile/${authorId}`}
                            className="font-semibold text-gray-900 truncate hover:text-blue-600 transition-colors block"
                        >
                            {displayName}
                        </Link>
                    ) : (
                        <p className="font-semibold text-gray-900 truncate">
                            {displayName}
                        </p>
                    )}
                    <p className="text-sm text-gray-500">{relativeTime}</p>
                </div>
            </div>

            {/* Contenu du post */}
            <div className="mb-3">
                <p className="text-gray-800 whitespace-pre-wrap">
                    {post.content}
                </p>
            </div>

            {/* Médias */}
            {post.media && post.media.length > 0 && (
                <div className="mt-3 space-y-2">
                    {post.media.map((media) => (
                        <div
                            key={media.id}
                            className="rounded-lg overflow-hidden"
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
                                    className="block p-3 bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    Fichier joint
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Actions : Votes et Commentaires */}
            <div className="mt-4 pt-3 border-t flex items-center justify-between">
                {/* Boutons de vote */}
                {post.Vote && <VoteButtons postId={post.id} votes={post.Vote} />}

                {/* Bouton pour afficher/masquer les commentaires */}
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                    <FaComment />
                    <span>
                        {commentCount} {commentCount <= 1 ? "commentaire" : "commentaires"}
                    </span>
                </button>
            </div>

            {/* Section commentaires */}
            {showComments && (
                <div className="mt-4">
                    {/* Liste des commentaires */}
                    {post.Comment && post.Comment.length > 0 && (
                        <div className="space-y-1 mb-4">
                            {post.Comment.map((comment) => (
                                <Comment key={comment.id} comment={comment} />
                            ))}
                        </div>
                    )}

                    {/* Formulaire d'ajout de commentaire - seulement si connecté */}
                    {isAuthenticated ? (
                        <CommentForm postId={post.id} />
                    ) : (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
                            <p className="text-gray-600 text-sm">
                                Connectez-vous pour laisser un commentaire
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
