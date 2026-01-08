"use client";

import { useState } from "react";
import { RelationRequestsList } from "@/features/relations";
import Image from "next/image";
import Link from "next/link";

type Activity = {
    id: string;
    type: "comment" | "vote";
    createdAt: string;
    post: {
        id: string;
        content: string;
    };
    writer: {
        user: {
            id: string;
            name: string;
            image: string | null;
            firstName: string | null;
            lastName: string | null;
        };
    };
    content?: string;
    voteStatus?: boolean;
};

type RelationRequest = {
    id: string;
    createdAt: string;
    userId: string;
    user: {
        id: string;
        name: string;
        email: string;
        image: string | null;
        firstName: string | null;
        lastName: string | null;
    };
};

interface NotificationsClientProps {
    activities: Activity[];
    requests: RelationRequest[];
}

export function NotificationsClient({ activities, requests }: NotificationsClientProps) {
    const [activeTab, setActiveTab] = useState<"activities" | "requests">("activities");

    const activitiesCount = activities.length;
    const requestsCount = requests.length;

    return (
        <div className="space-y-8">
            {/* Onglets */}
            <div className="flex gap-0 border-2 border-border">
                <button
                    onClick={() => setActiveTab("activities")}
                    className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 font-mono uppercase text-xs sm:text-sm font-bold transition-all relative ${
                        activeTab === "activities"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-primary/20"
                    }`}
                >
                    <span className="hidden sm:inline">Activités</span>
                    <span className="sm:hidden">Act.</span>
                    {activitiesCount > 0 && (
                        <span className="ml-1 sm:ml-2 inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-xs bg-accent text-accent-foreground border-2 border-border">
                            {activitiesCount}
                        </span>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("requests")}
                    className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 font-mono uppercase text-xs sm:text-sm font-bold transition-all border-l-2 border-border relative ${
                        activeTab === "requests"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-primary/20"
                    }`}
                >
                    <span className="hidden sm:inline">Demandes</span>
                    <span className="sm:hidden">Dem.</span>
                    {requestsCount > 0 && (
                        <span className="ml-1 sm:ml-2 inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-xs bg-accent text-accent-foreground border-2 border-border">
                            {requestsCount}
                        </span>
                    )}
                </button>
            </div>

            {/* Contenu des onglets */}
            <div>
                {activeTab === "activities" ? (
                    // Onglet Activités
                    <div className="space-y-4">
                        {activities.length === 0 ? (
                            <div className="bg-card border-2 border-border p-8 text-center">
                                <p className="text-muted-foreground font-mono text-sm">
                                    Aucune activité récente
                                </p>
                            </div>
                        ) : (
                            activities.map((activity) => {
                                const displayName =
                                    activity.writer.user.firstName && activity.writer.user.lastName
                                        ? `${activity.writer.user.firstName} ${activity.writer.user.lastName}`
                                        : activity.writer.user.name;

                                return (
                                    <div
                                        key={activity.id}
                                        className="bg-card border-2 border-border p-4 shadow-[2px_2px_0px_0px_var(--shadow-color)]"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Avatar */}
                                            <Link
                                                href={`/users/${activity.writer.user.id}`}
                                                className="w-12 h-12 border-2 border-border bg-muted flex items-center justify-center flex-shrink-0"
                                            >
                                                {activity.writer.user.image ? (
                                                    <Image
                                                        src={activity.writer.user.image}
                                                        alt={displayName}
                                                        width={48}
                                                        height={48}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <span className="text-xl font-bold text-muted-foreground font-mono">
                                                        {displayName.charAt(0).toUpperCase()}
                                                    </span>
                                                )}
                                            </Link>

                                            {/* Contenu */}
                                            <div className="flex-1">
                                                <div className="mb-2">
                                                    <Link
                                                        href={`/users/${activity.writer.user.id}`}
                                                        className="font-bold text-foreground hover:text-primary"
                                                    >
                                                        {displayName}
                                                    </Link>
                                                    {activity.type === "comment" ? (
                                                        <span className="text-muted-foreground text-sm ml-2">
                                                            a commenté votre post
                                                        </span>
                                                    ) : (
                                                        <span className="text-muted-foreground text-sm ml-2">
                                                            a voté {activity.voteStatus ? "👍" : "👎"} sur votre post
                                                        </span>
                                                    )}
                                                </div>

                                                {activity.content && (
                                                    <p className="text-sm text-foreground mb-2 bg-muted/50 p-2 border-l-2 border-accent">
                                                        {activity.content}
                                                    </p>
                                                )}

                                                <Link
                                                    href={`/posts/${activity.post.id}`}
                                                    className="text-xs text-muted-foreground hover:text-primary font-mono line-clamp-2"
                                                >
                                                    Sur : {activity.post.content}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                ) : (
                    // Onglet Demandes
                    <RelationRequestsList requests={requests} />
                )}
            </div>
        </div>
    );
}
