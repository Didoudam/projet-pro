"use client";

import Image from "next/image";
import { getRelativeTime } from "@/lib/utils";

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

  return (
    <div className={`${isReply ? "ml-12" : ""}`}>
      <div className="flex gap-3 py-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {authorImage ? (
            <Image
              src={authorImage}
              alt={displayName}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-semibold">
              {displayName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="flex-1 min-w-0">
          <div className="bg-gray-100 rounded-lg px-3 py-2">
            <p className="font-semibold text-sm text-gray-900">{displayName}</p>
            <p className="text-sm text-gray-800 mt-1 whitespace-pre-wrap">
              {comment.content}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-1 px-3">
            <span className="text-xs text-gray-500">{relativeTime}</span>
            <button className="text-xs text-gray-600 hover:text-blue-600 font-medium">
              Répondre
            </button>
          </div>
        </div>
      </div>

      {/* Réponses */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-0">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );
}
