import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function NetworkPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/auth");
    }

    // Récupérer toutes les relations acceptées (où l'utilisateur est l'initiateur)
    const acceptedRelationsSent = await prisma.relation.findMany({
        where: {
            userId: session.user.id,
            status: true,
        },
        include: {
            relation: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                    firstName: true,
                    lastName: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    // Récupérer toutes les relations acceptées (où l'utilisateur est la cible)
    const acceptedRelationsReceived = await prisma.relation.findMany({
        where: {
            relationId: session.user.id,
            status: true,
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                    firstName: true,
                    lastName: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    // Combiner toutes les relations acceptées
    const allConnections = [
        ...acceptedRelationsSent.map((r) => ({
            id: r.id,
            user: r.relation,
            createdAt: r.createdAt,
        })),
        ...acceptedRelationsReceived.map((r) => ({
            id: r.id,
            user: r.user,
            createdAt: r.createdAt,
        })),
    ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return (
        <div className="max-w-5xl mx-auto p-2 sm:p-4 space-y-4 sm:space-y-8">
            {/* En-tête */}
            <div className="bg-card border-2 border-border p-4 sm:p-6 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground font-mono uppercase tracking-wider mb-2">
                    Mon Réseau
                </h1>
                <p className="text-muted-foreground font-mono text-xs sm:text-sm uppercase">
                    {allConnections.length} connexion{allConnections.length > 1 ? "s" : ""}
                </p>
            </div>

            {/* Liste des connexions */}
            <div>
                {allConnections.length === 0 ? (
                    <div className="bg-card border-2 border-border p-6 sm:p-8 text-center">
                        <p className="text-muted-foreground font-mono text-xs sm:text-sm mb-4">
                            Vous n&apos;avez pas encore de connexions
                        </p>
                        <Link
                            href="/search"
                            className="inline-block px-3 sm:px-4 py-2 bg-primary text-primary-foreground border-2 border-border font-mono uppercase text-xs sm:text-sm font-bold hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all"
                        >
                            Rechercher des utilisateurs
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {allConnections.map((connection) => {
                            const displayName =
                                connection.user.firstName && connection.user.lastName
                                    ? `${connection.user.firstName} ${connection.user.lastName}`
                                    : connection.user.name;

                            return (
                                <Link
                                    key={connection.id}
                                    href={`/profile/${connection.user.id}`}
                                    className="bg-card border-2 border-border p-6 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all group"
                                >
                                    <div className="flex flex-col items-center text-center gap-4">
                                        {/* Avatar */}
                                        <div className="w-20 h-20 border-2 border-border bg-muted flex items-center justify-center">
                                            {connection.user.image ? (
                                                <Image
                                                    src={connection.user.image}
                                                    alt={displayName}
                                                    width={80}
                                                    height={80}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-3xl font-bold text-muted-foreground font-mono">
                                                    {displayName.charAt(0).toUpperCase()}
                                                </span>
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div>
                                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                                                {displayName}
                                            </h3>
                                            <p className="text-xs text-muted-foreground font-mono">
                                                {connection.user.email}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
