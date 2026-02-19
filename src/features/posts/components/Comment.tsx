"use client";

import { useState } from "react";
import Link from "next/link";
import { getRelativeTime } from "@/lib/utils";
import { VoteButtons } from "./VoteButtons";
import { Avatar } from "@/components/ui/Avatar";
import { ReplyForm } from "./ReplyForm";

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
  postId: string;
  isReply?: boolean;
  onReplyAdded?: () => void;
}

export function Comment({ comment, postId, isReply = false, onReplyAdded }: CommentProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);
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
              <Avatar src={authorImage} alt={displayName} size={32} />
            </Link>
          ) : (
            <Avatar src={authorImage} alt={displayName} size={32} />
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
              <button
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="text-xs text-muted-foreground hover:text-primary font-mono uppercase tracking-wider transition-colors"
              >
                {showReplyForm ? "Annuler" : "Répondre"}
              </button>
            </div>
            <VoteButtons commentId={comment.id} votes={comment.Vote || []} />
          </div>

          {/* Formulaire de réponse */}
          {showReplyForm && (
            <ReplyForm
              postId={postId}
              parentCommentId={comment.id}
              onReplyAdded={() => {
                setShowReplyForm(false);
                onReplyAdded?.();
              }}
              onCancel={() => setShowReplyForm(false)}
            />
          )}
        </div>
      </div>

      {/* Réponses */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-2 space-y-2">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} postId={postId} isReply={true} onReplyAdded={onReplyAdded} />
          ))}
        </div>
      )}
    </div>
  );
}
