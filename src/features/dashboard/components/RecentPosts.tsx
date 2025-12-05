"use client";

import Link from "next/link";
import { getRelativeTime } from "@/lib/utils";
import { CommentIcon, UpvoteIcon } from "@/lib/icons";

type Vote = {
    status: boolean;
};

type PostWithCounts = {
    id: string;
    content: string;
    createdAt: Date;
    Comment: any[];
    Vote: Vote[];
};

interface RecentPostsProps {
    posts: PostWithCounts[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
    if (posts.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Posts récents</h2>
                <p className="text-gray-500 text-center py-8">
                    Vous n avez pas encore publié de posts
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
                Posts récents ({posts.length})
            </h2>

            <div className="space-y-4">
                {posts.map((post) => {
                    const upvotes = post.Vote.filter((v) => v.status === true).length;
                    const downvotes = post.Vote.filter((v) => v.status === false).length;

                    return (
                        <Link
                            key={post.id}
                            href={`/posts/${post.id}`}
                            className="block border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 transition-colors rounded-r-lg"
                        >
                            <p className="text-gray-800 line-clamp-2 mb-2">
                                {post.content}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>{getRelativeTime(post.createdAt)}</span>
                                <span className="flex items-center gap-1">
                                    <CommentIcon className="text-xs" />
                                    {post.Comment.length}
                                </span>
                                <span className="flex items-center gap-1 text-green-600">
                                    <UpvoteIcon className="text-xs" />
                                    {upvotes}
                                </span>
                                {downvotes > 0 && (
                                    <span className="flex items-center gap-1 text-red-600">
                                        ↓ {downvotes}
                                    </span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
