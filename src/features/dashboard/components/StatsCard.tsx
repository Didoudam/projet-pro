"use client";

import { User, Skill, Experience, formation } from "@prisma/client";
import { StatsIcons } from "@/lib/icons";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { StatBadge } from "@/components/ui/stat-badge";
import { Comment, Vote } from "@/types/post";

type UserWithRelations = User & {
    skill: Skill[];
    Experience: Experience[];
    formation: formation[];
};

type PostWithCounts = {
    id: string;
    Comment: Comment[];
    Vote: Vote[];
};

interface StatsCardProps {
    user: UserWithRelations;
    posts: PostWithCounts[];
}

export function StatsCard({ posts }: StatsCardProps) {
    const totalPosts = posts.length;


    // Calculer upvotes et downvotes
    const upvotes = posts.reduce(
        (acc, post) => acc + post.Vote.filter((v) => v.status === true).length,
        0
    );
    const downvotes = posts.reduce(
        (acc, post) => acc + post.Vote.filter((v) => v.status === false).length,
        0
    );
    const totalVotes = upvotes + downvotes;
    const voteRatio =
        totalVotes > 0 ? ((upvotes / totalVotes) * 100).toFixed(0) : "0";

    const stats = [
        {
            label: "Posts",
            value: totalPosts,
            icon: StatsIcons.posts,
            variant: "primary" as const,
        },
        {
            label: "Upvotes",
            value: `${voteRatio}%`,
            subValue: `${upvotes}↑ ${downvotes}↓`,
            icon: StatsIcons.upvotes,
            variant: "accent" as const,
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle mono>Statistiques</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                        <StatBadge
                            key={stat.label}
                            label={stat.label}
                            value={stat.value}
                            subValue={stat.subValue}
                            icon={stat.icon}
                            variant={stat.variant}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
