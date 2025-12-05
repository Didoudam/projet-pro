"use client";

import { useState } from "react";
import { User, Skill, Experience, formation } from "@prisma/client";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileEditForm } from "./components/ProfileEditForm";
import { StatsCard } from "./components/StatsCard";
import { RecentPosts } from "./components/RecentPosts";
import { SkillsManager } from "./components/SkillsManager";

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
    Comment: any[];
    Vote: any[];
};

interface DashboardContentProps {
    user: UserWithRelations;
    posts: PostWithCounts[];
}

export function DashboardContent({ user, posts }: DashboardContentProps) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="space-y-6">
            {/* En-tête */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    Mon Profil
                </h1>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                    {isEditing ? "Annuler" : "Modifier le profil"}
                </button>
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
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Expériences
                            </h2>
                            <div className="space-y-4">
                                {user.Experience.map((exp) => (
                                    <div
                                        key={exp.id}
                                        className="border-l-2 border-blue-500 pl-4"
                                    >
                                        <h3 className="font-semibold">
                                            {exp.name}
                                        </h3>
                                        {exp.company && (
                                            <p className="text-sm text-gray-600">
                                                {exp.company.name}
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-500">
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
                                            <p className="text-sm text-gray-700 mt-2">
                                                {exp.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Formations */}
                    {user.formation.length > 0 && (
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Formations
                            </h2>
                            <div className="space-y-4">
                                {user.formation.map((form) => (
                                    <div
                                        key={form.id}
                                        className="border-l-2 border-green-500 pl-4"
                                    >
                                        <h3 className="font-semibold">
                                            {form.name}
                                        </h3>
                                        {form.company && (
                                            <p className="text-sm text-gray-600">
                                                {form.company.name}
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-500">
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
                                            <p className="text-sm text-gray-700 mt-2">
                                                {form.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
