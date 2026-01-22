"use client";

import Link from "next/link";
import { getRelativeTime } from "@/lib/utils";
import { CommentIcon, UpvoteIcon } from "@/lib/icons";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { StatBadge } from "@/components/ui/Badge";
import { Comment, Vote } from "@/types/post";

type PostWithCounts = {
    id: string;
    content: string;
    createdAt: Date;
    Comment: Comment[];
    Vote: Vote[];
};

interface RecentPostsProps {
    posts: PostWithCounts[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
    if (posts.length === 0) {
        return (
            <Card variant="technical">
                <CardHeader pattern="grid">
                    <CardTitle mono>Posts récents</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12 pattern-dots">
                        <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">
                            {`// No posts yet`}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                            Vous n&apos;avez pas encore publié de posts
                        </p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card variant="technical">
            <CardHeader pattern="barcode" className="flex flex-row items-center justify-between">
                <CardTitle mono>Posts récents</CardTitle>
                <StatBadge value={posts.length} variant="primary" />
            </CardHeader>

            <CardContent className="p-0">
                <div className="divide-y-2 divide-border">
                    {posts.map((post) => {
                        const upvotes = post.Vote.filter((v) => v.status === true).length;
                        const downvotes = post.Vote.filter((v) => v.status === false).length;

                        return (
                            <Link
                                key={post.id}
                                href={`/posts/${post.id}`}
                                className="block border-l-4 border-primary hover:border-accent px-6 py-4 hover:bg-muted/30 transition-all group"
                            >
                                <p className="text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                                    {post.content}
                                </p>
                                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider">
                                    <span className="text-muted-foreground">
                                        {getRelativeTime(post.createdAt)}
                                    </span>
                                    <span className="h-3 w-px bg-border" />
                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                        <CommentIcon className="text-xs" />
                                        <span className="tabular-nums">{post.Comment.length}</span>
                                    </span>
                                    <span className="h-3 w-px bg-border" />
                                    <span className="flex items-center gap-1.5 text-success">
                                        <UpvoteIcon className="text-xs" />
                                        <span className="tabular-nums font-bold">{upvotes}</span>
                                    </span>
                                    {downvotes > 0 && (
                                        <>
                                            <span className="h-3 w-px bg-border" />
                                            <span className="flex items-center gap-1.5 text-error">
                                                <span>↓</span>
                                                <span className="tabular-nums font-bold">{downvotes}</span>
                                            </span>
                                        </>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
