"use client";

import { useState } from "react";
import { User, Skill, Experience, formation } from "@prisma/client";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileEditForm } from "./components/ProfileEditForm";
import { StatsCard } from "./components/StatsCard";
import { RecentPosts } from "./components/RecentPosts";
import { SkillsManager } from "./components/SkillsManager";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Comment, Vote } from "@/types/post";

type UserWithRelations = User & {
    skill: Skill[];
    Experience: (Experience & {
        company: {
            id: string;
            name: string;
            image: string | null;
        } | null;
    })[];
    formation: (formation & {
        company: {
            id: string;
            name: string;
            image: string | null;
        } | null;
    })[];
};

type PostWithCounts = {
    id: string;
    content: string;
    createdAt: Date;
    Comment: Comment[];
    Vote: Vote[];
};

interface DashboardContentProps {
    user: UserWithRelations;
    posts: PostWithCounts[];
}

export function DashboardContent({ user, posts }: DashboardContentProps) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="min-h-screen bg-background pattern-dots p-6">
            <div className="max-w-7xl mx-auto space-y-6">
            {/* En-tête */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-foreground font-mono uppercase tracking-wide">
                    Mon Profil
                </h1>
                <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant={isEditing ? "outline" : "primary"}
                >
                    {isEditing ? "Annuler" : "Modifier le profil"}
                </Button>
            </div>

            {/* Grille principale */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Colonne gauche - Profil */}
                <div className="lg:col-span-1 space-y-6">
                    {isEditing ? (
                        <ProfileEditForm
                            user={user}
                            onCancel={() => setIsEditing(false)}
                        />
                    ) : (
                        <ProfileCard user={user} />
                    )}
                    <StatsCard user={user} posts={posts} />
                    {/* Compétences avec gestion */}
                    <SkillsManager initialSkills={user.skill} />
                </div>

                {/* Colonne droite - Activité */}
                <div className="lg:col-span-2 space-y-6">
                    <RecentPosts posts={posts} />


                    {/* Expériences */}
                    {user.Experience.length > 0 && (
                        <Card>
                            <CardHeader pattern="grid">
                                <CardTitle mono>
                                    Expériences
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {user.Experience.map((exp) => (
                                        <div
                                            key={exp.id}
                                            className="border-l-2 border-primary pl-4"
                                        >
                                            <h3 className="font-semibold text-foreground">
                                                {exp.name}
                                            </h3>
                                            {exp.company && (
                                                <p className="text-sm text-muted-foreground">
                                                    {exp.company.name}
                                                </p>
                                            )}
                                            <p className="text-sm text-muted-foreground font-mono">
                                                {new Date(
                                                    exp.startDate
                                                ).toLocaleDateString()}{" "}
                                                -{" "}
                                                {exp.endDate
                                                    ? new Date(
                                                          exp.endDate
                                                      ).toLocaleDateString()
                                                    : "Aujourd'hui"}
                                            </p>
                                            {exp.description && (
                                                <p className="text-sm text-foreground mt-2">
                                                    {exp.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Formations */}
                    {user.formation.length > 0 && (
                        <Card>
                            <CardHeader pattern="dots">
                                <CardTitle mono>
                                    Formations
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {user.formation.map((form) => (
                                        <div
                                            key={form.id}
                                            className="border-l-2 border-accent pl-4"
                                        >
                                            <h3 className="font-semibold text-foreground">
                                                {form.name}
                                            </h3>
                                            {form.company && (
                                                <p className="text-sm text-muted-foreground">
                                                    {form.company.name}
                                                </p>
                                            )}
                                            <p className="text-sm text-muted-foreground font-mono">
                                                {new Date(
                                                    form.startDate
                                                ).toLocaleDateString()}{" "}
                                                -{" "}
                                                {form.endDate
                                                    ? new Date(
                                                          form.endDate
                                                      ).toLocaleDateString()
                                                    : "En cours"}
                                            </p>
                                            {form.description && (
                                                <p className="text-sm text-foreground mt-2">
                                                    {form.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
            </div>
        </div>
    );
}
