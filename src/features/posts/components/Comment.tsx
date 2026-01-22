"use client";

import Image from "next/image";
import Link from "next/link";
import { getRelativeTime } from "@/lib/utils";
import { VoteButtons } from "./VoteButtons";

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

type Vote = {
  id: string;
  status: boolean;
  writerId: string;
};

type CommentType = {
  id: string;
  content: string;
  createdAt: Date;
  writer: CommentWriter;
  replies?: CommentType[];
  Vote?: Vote[];
};

interface CommentProps {
  comment: CommentType;
  isReply?: boolean;
}

export function Comment({ comment, isReply = false }: CommentProps) {
  const author = comment.writer.user || comment.writer.company;
  const authorName = author?.name || "Utilisateur inconnu";
  const authorImage = author?.image;

  const displayName =
    comment.writer.user?.firstName && comment.writer.user?.lastName
      ? `${comment.writer.user.firstName} ${comment.writer.user.lastName}`
      : authorName;

  const relativeTime = getRelativeTime(comment.createdAt);

  // Construire l'URL du profil
  const profileUrl = comment.writer.user
    ? `/profile/${comment.writer.user.id}`
    : comment.writer.company
    ? `/companies/${comment.writer.company.id}`
    : null;

  return (
    <div className={`${isReply ? "ml-8" : ""}`}>
      <div className="flex gap-3 py-2 border-2 border-border bg-muted/30 p-3">
        {/* Avatar cliquable */}
        <div className="shrink-0">
          {profileUrl ? (
            <Link href={profileUrl} className="block hover:opacity-80 transition-opacity">
              {authorImage ? (
                <Image
                  src={authorImage}
                  alt={displayName}
                  width={32}
                  height={32}
                  className="border-2 border-border object-cover"
                />
              ) : (
                <div className="w-8 h-8 border-2 border-border bg-background flex items-center justify-center text-foreground text-xs font-mono font-bold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}
            </Link>
          ) : (
            <>
              {authorImage ? (
                <Image
                  src={authorImage}
                  alt={displayName}
                  width={32}
                  height={32}
                  className="border-2 border-border object-cover"
                />
              ) : (
                <div className="w-8 h-8 border-2 border-border bg-background flex items-center justify-center text-foreground text-xs font-mono font-bold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}
            </>
          )}
        </div>

        {/* Contenu */}
        <div className="flex-1 min-w-0">
          <div className="border-2 border-border bg-background p-2">
            {profileUrl ? (
              <Link href={profileUrl} className="hover:text-primary transition-colors">
                <p className="font-bold text-xs font-mono uppercase tracking-wider text-foreground inline-block">{displayName}</p>
              </Link>
            ) : (
              <p className="font-bold text-xs font-mono uppercase tracking-wider text-foreground">{displayName}</p>
            )}
            <p className="text-sm text-foreground mt-1 whitespace-pre-wrap">
              {comment.content}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground font-mono">{relativeTime}</span>
              <button className="text-xs text-muted-foreground hover:text-primary font-mono uppercase tracking-wider transition-colors">
                Répondre
              </button>
            </div>
            <VoteButtons commentId={comment.id} votes={comment.Vote || []} />
          </div>
        </div>
      </div>

      {/* Réponses */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-2 space-y-2">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );
}
