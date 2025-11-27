"use client";

import { User, Skill, Experience, formation } from "@prisma/client";
import { StatsIcons } from "@/lib/icons";

type UserWithRelations = User & {
    skill: Skill[];
    Experience: Experience[];
    formation: formation[];
};

type Vote = {
    status: boolean;
};

type PostWithCounts = {
    id: string;
    Comment: any[];
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
            color: "bg-blue-100 text-blue-700",
        },
        {
            label: "Upvotes",
            value: `${voteRatio}%`,
            subValue: `${upvotes}↑ ${downvotes}↓`,
            icon: StatsIcons.upvotes,
            color: "bg-purple-100 text-purple-700",
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Statistiques</h2>

            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className={`${stat.color} rounded-lg p-4 text-center`}
                    >
                        <div className="text-2xl mb-1">{stat.icon}</div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        {stat.subValue && (
                            <div className="text-xs text-gray-600 mb-1">
                                {stat.subValue}
                            </div>
                        )}
                        <div className="text-sm font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
