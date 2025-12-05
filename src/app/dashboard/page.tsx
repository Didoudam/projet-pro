import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DashboardContent } from "@/features/dashboard/DashboardContent";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/signUp");
    }

    // Récupérer les données complètes de l'utilisateur
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        include: {
            skill: true,
            Experience: {
                include: {
                    company: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
                orderBy: { startDate: "desc" },
            },
            formation: {
                include: {
                    company: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
                orderBy: { startDate: "desc" },
            },
        },
    });

    if (!user) {
        redirect("/signUp");
    }

    // Récupérer les posts de l'utilisateur
    const writer = await prisma.writer.findFirst({
        where: { userId: user.id },
    });

    const posts = writer
        ? await prisma.post.findMany({
              where: { writerId: writer.id },
              orderBy: { createdAt: "desc" },
              take: 5,
              include: {
                  Comment: true,
                  Vote: true,
              },
          })
        : [];

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 py-6">
                <DashboardContent user={user} posts={posts} />
            </main>
        </div>
    );
}
