"use client";

import { useState, useEffect } from "react";
import { UpvoteIcon, DownvoteIcon } from "@/lib/icons";
import { useSession } from "@/lib/auth-client";
import { useToastStore } from "@/stores/useToastStore";
import { useRouter } from "next/navigation";

type Vote = {
	id: string;
	status: boolean;
	writerId: string;
};

interface VoteButtonsProps {
	postId?: string;
	commentId?: string;
	votes: Vote[];
}

export function VoteButtons({ postId, commentId, votes }: VoteButtonsProps) {
	const { data: session } = useSession();
	const { error } = useToastStore();
	const router = useRouter();

	// Calculer le score total initial (upvotes - downvotes)
	const initialUpvotes = votes.filter((v) => v.status === true).length;
	const initialDownvotes = votes.filter((v) => v.status === false).length;
	const initialScore = initialUpvotes - initialDownvotes;

	const [userWriterId, setUserWriterId] = useState<string | null>(null);
	const [userVote, setUserVote] = useState<boolean | null>(null);
	const [score, setScore] = useState(initialScore);
	const [isLoading, setIsLoading] = useState(false);

	// Récupérer le writerId de l'utilisateur
	useEffect(() => {
		const fetchWriterId = async () => {
			if (!session?.user) return;

			try {
				const response = await fetch(`/api/writers/current`);
				if (response.ok) {
					const data = await response.json();
					setUserWriterId(data.id);

					// Trouver le vote de l'utilisateur
					const userVoteData = votes.find((v) => v.writerId === data.id);
					setUserVote(userVoteData?.status ?? null);
				}
			} catch (err) {
				console.error("Erreur lors de la récupération du writer:", err);
			}
		};

		fetchWriterId();
	}, [session, votes]);

	const handleVote = async (voteStatus: boolean) => {
		if (!session?.user) {
			error("Connectez-vous pour voter");
			return;
		}

		setIsLoading(true);

		try {
			const response = await fetch("/api/votes", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...(postId ? { postId } : {}),
					...(commentId ? { commentId } : {}),
					status: voteStatus,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				error(data.error || "Erreur lors du vote");
				return;
			}

			// Mettre à jour l'état local
			if (data.action === "removed") {
				// Vote supprimé
				if (userVote === true) {
					setScore((prev) => prev - 1);
				} else if (userVote === false) {
					setScore((prev) => prev + 1);
				}
				setUserVote(null);
			} else if (data.action === "updated") {
				// Vote modifié
				if (userVote === true && voteStatus === false) {
					// Passe de upvote à downvote : -2 au score
					setScore((prev) => prev - 2);
				} else if (userVote === false && voteStatus === true) {
					// Passe de downvote à upvote : +2 au score
					setScore((prev) => prev + 2);
				}
				setUserVote(voteStatus);
			} else if (data.action === "created") {
				// Nouveau vote
				if (voteStatus === true) {
					setScore((prev) => prev + 1);
				} else {
					setScore((prev) => prev - 1);
				}
				setUserVote(voteStatus);
			}

			// Rafraîchir la page pour obtenir les données à jour
			router.refresh();
		} catch (err) {
			console.error("Erreur lors du vote:", err);
			error("Erreur lors du vote");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='flex items-center gap-2'>
			{/* Score total */}
			<span className={`font-mono font-bold text-sm px-2 ${score > 0 ? "text-accent" : score < 0 ? "text-error" : "text-muted-foreground"}`}>
				{score > 0 ? "+" : ""}
				{score}
			</span>
            
			{/* Bouton Upvote */}
			<button
				onClick={() => handleVote(true)}
				disabled={isLoading}
				className={`
                    flex items-center gap-1 px-2 py-1 font-mono
                    border-2 transition-all
                    ${
											userVote === true
												? "bg-accent/20 text-accent border-accent"
												: "bg-background text-foreground border-border hover:border-accent hover:text-accent"
										}
                    ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                    active:translate-x-0.5 active:translate-y-0.5
                `}>
				<UpvoteIcon className='text-base' />
			</button>

			{/* Bouton Downvote */}
			<button
				onClick={() => handleVote(false)}
				disabled={isLoading}
				className={`
                    flex items-center gap-1 px-2 py-1 font-mono
                    border-2 transition-all
                    ${
											userVote === false
												? "bg-error/20 text-error border-error"
												: "bg-background text-foreground border-border hover:border-error hover:text-error"
										}
                    ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                    active:translate-x-0.5 active:translate-y-0.5
                `}>
				<DownvoteIcon className='text-base' />
			</button>
		</div>
	);
}
