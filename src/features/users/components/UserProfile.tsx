"use client";

import { User, Skill, Experience, formation } from "@prisma/client";
import Image from "next/image";
import { StatsIcons } from "@/lib/icons";
import { Post } from "@/features/posts/components/Post";

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

interface UserProfileProps {
    user: UserWithRelations;
    posts: any[];
}

export function UserProfile({ user, posts }: UserProfileProps) {
    const displayName =
        user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.name;

    // Calculer les statistiques
    const totalPosts = posts.length;
    const totalComments = posts.reduce(
        (acc, post) => acc + post.Comment.length,
        0
    );
    const upvotes = posts.reduce(
        (acc, post) => acc + post.Vote.filter((v) => v.status === true).length,
        0
    );
    const downvotes = posts.reduce(
        (acc, post) => acc + post.Vote.filter((v) => v.status === false).length,
        0
    );

    return (
        <div className="space-y-6">
            {/* En-tête du profil */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start gap-6">
                    {/* Avatar */}
                    {user.image ? (
                        <Image
                            src={user.image}
                            alt={displayName}
                            width={120}
                            height={120}
                            className="rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-30 h-30 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
                            {displayName.charAt(0).toUpperCase()}
                        </div>
                    )}

                    {/* Informations */}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {displayName}
                        </h1>
                        <p className="text-gray-600 mb-4">{user.email}</p>

                        {/* Statistiques en ligne */}
                        <div className="flex gap-6 text-sm">
                            <div>
                                <span className="font-semibold">
                                    {totalPosts}
                                </span>{" "}
                                <span className="text-gray-600">Posts</span>
                            </div>
                            <div>
                                <span className="font-semibold">
                                    {totalComments}
                                </span>{" "}
                                <span className="text-gray-600">
                                    Commentaires reçus
                                </span>
                            </div>
                            <div>
                                <span className="font-semibold">
                                    {user.skill.length}
                                </span>{" "}
                                <span className="text-gray-600">
                                    Compétences
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grille principale */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Colonne gauche - Informations */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Compétences */}
                    {user.skill.length > 0 && (
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Compétences
                            </h2>
                            <div className="space-y-3">
                                {user.skill.map((skill) => (
                                    <div key={skill.id}>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium text-sm">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {skill.level}/5
                                            </span>
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((level) => (
                                                <div
                                                    key={level}
                                                    className={`flex-1 h-2 rounded-full ${
                                                        level <= skill.level
                                                            ? "bg-blue-500"
                                                            : "bg-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Colonne droite - Activité */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Posts récents */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4 px-2">
                            Posts récents
                        </h2>
                        {posts.length > 0 ? (
                            <div className="space-y-4">
                                {posts.map((post) => (
                                    <Post key={post.id} post={post} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <p className="text-gray-500 text-center py-8">
                                    Aucun post publié
                                </p>
                            </div>
                        )}
                    </div>

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
