import { prisma } from "@/lib/prisma";

export class PostModel {
	static async create(data: { content: string; userId: string; mediaUrl?: string }) {
		return await prisma.post.create({
			data: {
				content: data.content,
				userId: data.userId,
				mediaUrl: data.mediaUrl,
			},
		});
	}

	static async findAll() {
		return await prisma.post.findMany({
			orderBy: { createdAt: "desc" },
		});
	}

	static async upVote(postId: string, userId: string) {
		//show if user as also upvote
		const existingVote = await prisma.vote.findUnique({
			where: {
				userId_postId: {
					userId,
					postId,
				},
			},
		});
		if (existingVote) {
			await prisma.vote.delete({
				where: { id: existingVote.id },
			});
			return { action: "removed" };
		} else {
			await prisma.vote.create({
				data: { userId, postId },
			});
			return { action: "added" };
		}
	}

	static async findManyByUserId(userId: string, number: number) {
		return await prisma.post.findMany({
			where: { userId },
			orderBy: { createdAt: "desc" },
			take: number,
		});
	}
}
