import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { NotificationsClient } from "./NotificationsClient";

export default async function NotificationsPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/auth");
    }

    // Récupérer le writer de l'utilisateur
    const writer = await prisma.writer.findFirst({
        where: { userId: session.user.id },
    });

    // Récupérer les demandes de connexion en attente
    const pendingRequests = await prisma.relation.findMany({
        where: {
            relationId: session.user.id,
            status: false,
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

    // Récupérer les activités (commentaires et votes) sur les posts de l'utilisateur
    const activities = writer
        ? await Promise.all([
              // Commentaires reçus
              prisma.comment.findMany({
                  where: {
                      post: {
                          writerId: writer.id,
                      },
                      writerId: {
                          not: writer.id, // Exclure ses propres commentaires
                      },
                  },
                  take: 20,
                  orderBy: {
                      createdAt: "desc",
                  },
                  include: {
                      post: {
                          select: {
                              id: true,
                              content: true,
                          },
                      },
                      writer: {
                          include: {
                              user: {
                                  select: {
                                      id: true,
                                      name: true,
                                      image: true,
                                      firstName: true,
                                      lastName: true,
                                  },
                              },
                          },
                      },
                  },
              }),
              // Votes reçus
              prisma.vote.findMany({
                  where: {
                      post: {
                          writerId: writer.id,
                      },
                      writerId: {
                          not: writer.id, // Exclure ses propres votes
                      },
                  },
                  take: 20,
                  orderBy: {
                      createdAt: "desc",
                  },
                  include: {
                      post: {
                          select: {
                              id: true,
                              content: true,
                          },
                      },
                      writer: {
                          include: {
                              user: {
                                  select: {
                                      id: true,
                                      name: true,
                                      image: true,
                                      firstName: true,
                                      lastName: true,
                                  },
                              },
                          },
                      },
                  },
              }),
          ]).then(([comments, votes]) => {
              const commentActivities = comments.map((c) => ({
                  id: c.id,
                  type: "comment" as const,
                  createdAt: c.createdAt.toISOString(),
                  post: c.post!,
                  writer: c.writer,
                  content: c.content,
              }));

              const voteActivities = votes.map((v) => ({
                  id: v.id,
                  type: "vote" as const,
                  createdAt: v.createdAt.toISOString(),
                  post: v.post!,
                  writer: v.writer,
                  voteStatus: v.status,
              }));

              return [...commentActivities, ...voteActivities].sort(
                  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              );
          })
        : [];

    return (
        <div className="max-w-4xl mx-auto p-2 sm:p-4 space-y-4 sm:space-y-8">
            {/* En-tête */}
            <div className="bg-card border-2 border-border p-4 sm:p-6 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground font-mono uppercase tracking-wider mb-2">
                    Notifications
                </h1>
                <p className="text-muted-foreground font-mono text-xs sm:text-sm uppercase">
                    Restez informé de votre activité
                </p>
            </div>

            <NotificationsClient activities={activities} requests={pendingRequests} />
        </div>
    );
}
