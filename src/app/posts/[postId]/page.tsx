import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Post } from "@/features/posts/components/Post";

type PageProps = {
    params: Promise<{ postId: string }>;
};

export default async function PostDetailPage({ params }: PageProps) {
    const { postId } = await params;

    const post = await prisma.post.findUnique({
        where: { id: postId },
        include: {
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
                    company: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
            },
            media: {
                select: {
                    id: true,
                    url: true,
                    altText: true,
                    type: true,
                },
            },
            Comment: {
                where: {
                    commentId: null, // Seulement les commentaires de premier niveau
                },
                include: {
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
                            company: {
                                select: {
                                    id: true,
                                    name: true,
                                    image: true,
                                },
                            },
                        },
                    },
                    replies: {
                        include: {
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
                                    company: {
                                        select: {
                                            id: true,
                                            name: true,
                                            image: true,
                                        },
                                    },
                                },
                            },
                        },
                        orderBy: { createdAt: "asc" as const },
                    },
                },
                orderBy: { createdAt: "asc" as const },
            },
            Vote: true,
        },
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-4xl mx-auto px-4 py-6">
                <Post post={post} />
            </main>
        </div>
    );
}
