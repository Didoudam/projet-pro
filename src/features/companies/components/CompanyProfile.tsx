"use client";

import Link from "next/link";
import { CompanyWithRelations } from "@/types/company";
import { Post } from "@/types/post";
import { Post as PostComponent } from "@/features/posts/components/Post";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

type CompanyWithAdmin = CompanyWithRelations & {
    companyAdmin?: Array<{
        id: string;
        role: string;
        userId: string;
        user: {
            id: string;
            name: string;
            image: string | null;
            firstName: string | null;
            lastName: string | null;
        };
    }>;
};

interface CompanyProfileProps {
    company: CompanyWithAdmin;
    posts: Post[];
    isAdmin: boolean;
    currentEmployees?: Array<{
        id: string;
        name: string;
        startDate: Date;
        user: {
            id: string;
            name: string;
            image: string | null;
            firstName: string | null;
            lastName: string | null;
        };
    }>;
}

export function CompanyProfile({ company, posts, isAdmin, currentEmployees = [] }: CompanyProfileProps) {
    const totalPosts = posts.length;
    const admins = company.companyAdmin || [];

    return (
        <div className="min-h-screen bg-background pattern-dots p-2 sm:p-4 md:p-6">
            <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                {/* En-tête profil entreprise */}
                <Card>
                    <CardContent className="p-0">
                        <div className="p-4 sm:p-6 pattern-grid border-b-2 border-border">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                {/* Logo */}
                                <Avatar
                                    src={company.image}
                                    alt={company.name}
                                    size={96}
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                                />

                                {/* Infos */}
                                <div className="flex-1 text-center sm:text-left w-full">
                                    <h1 className="text-xl sm:text-2xl font-bold font-mono uppercase tracking-wider text-foreground">
                                        {company.name}
                                    </h1>
                                    {company.activity && (
                                        <p className="text-xs sm:text-sm text-muted-foreground font-mono mt-1">
                                            {company.activity}
                                        </p>
                                    )}
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                                        <Badge variant="primary">
                                            <span className="font-bold">{totalPosts}</span> Posts
                                        </Badge>
                                        <Badge variant="accent">
                                            <span className="font-bold">{currentEmployees.length}</span> Employé{currentEmployees.length > 1 ? "s" : ""}
                                        </Badge>
                                        {/* Afficher le nombre d'admins uniquement si l'utilisateur est admin */}
                                        {isAdmin && (
                                            <Badge variant="secondary">
                                                <span className="font-bold">{admins.length}</span> Admin{admins.length > 1 ? "s" : ""}
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Boutons d'administration */}
                                    {isAdmin && (
                                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                                            <Link href={`/companies/${company.id}/edit`}>
                                                <Button variant="outline" className="text-xs">
                                                    Modifier l&apos;entreprise
                                                </Button>
                                            </Link>
                                            <Link href={`/companies/${company.id}/manage`}>
                                                <Button variant="outline" className="text-xs">
                                                    Gérer les admins
                                                </Button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            {company.description && (
                                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-background border-2 border-border">
                                    <p className="text-foreground text-sm sm:text-base">{company.description}</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Grille principale */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Colonne gauche - Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Employés actuels */}
                        {currentEmployees.length > 0 && (
                            <Card>
                                <CardHeader pattern="grid">
                                    <CardTitle mono>Employés actuels</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {currentEmployees.map((experience) => {
                                            const displayName =
                                                experience.user.firstName && experience.user.lastName
                                                    ? `${experience.user.firstName} ${experience.user.lastName}`
                                                    : experience.user.name;

                                            return (
                                                <a
                                                    key={experience.id}
                                                    href={`/profile/${experience.user.id}`}
                                                    className="flex items-start gap-3 p-3 border-2 border-border bg-card hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] transition-all"
                                                >
                                                    <Avatar
                                                        src={experience.user.image}
                                                        alt={displayName}
                                                        size={40}
                                                        className="shrink-0"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-xs text-foreground truncate">
                                                            {displayName}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground font-mono truncate">
                                                            {experience.name}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground font-mono mt-1">
                                                            {new Date(experience.startDate).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}
                                                        </p>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Administrateurs - uniquement visible pour les admins */}
                        {isAdmin && admins.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle mono>Administrateurs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {admins.map((admin) => {
                                            const displayName =
                                                admin.user.firstName && admin.user.lastName
                                                    ? `${admin.user.firstName} ${admin.user.lastName}`
                                                    : admin.user.name;

                                            return (
                                                <div
                                                    key={admin.id}
                                                    className="flex items-center gap-3 p-3 border-2 border-border bg-muted/20"
                                                >
                                                    <Avatar
                                                        src={admin.user.image}
                                                        alt={displayName}
                                                        size={40}
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-xs font-mono uppercase tracking-wider text-foreground truncate">
                                                            {displayName}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground font-mono">
                                                            {admin.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Colonne droite - Posts */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle mono>Publications</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {posts.length === 0 ? (
                                    <div className="text-center py-12 pattern-dots">
                                        <p className="text-muted-foreground font-mono uppercase tracking-wider">
                                            Aucune publication pour le moment
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {posts.map((post) => (
                                            <PostComponent key={post.id} post={post} />
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
