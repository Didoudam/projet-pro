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
    postId: string;
    votes: Vote[];
}

export function VoteButtons({ postId, votes }: VoteButtonsProps) {
    const { data: session } = useSession();
    const { error } = useToastStore();
    const router = useRouter();

    // Calculer les statistiques initiales
    const initialUpvotes = votes.filter((v) => v.status === true).length;
    const initialDownvotes = votes.filter((v) => v.status === false).length;

    const [userWriterId, setUserWriterId] = useState<string | null>(null);
    const [userVote, setUserVote] = useState<boolean | null>(null);
    const [upvotes, setUpvotes] = useState(initialUpvotes);
    const [downvotes, setDownvotes] = useState(initialDownvotes);
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
                    const userVoteData = votes.find(
                        (v) => v.writerId === data.id
                    );
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
                    postId,
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
                    setUpvotes((prev) => prev - 1);
                } else if (userVote === false) {
                    setDownvotes((prev) => prev - 1);
                }
                setUserVote(null);
            } else if (data.action === "updated") {
                // Vote modifié
                if (userVote === true && voteStatus === false) {
                    setUpvotes((prev) => prev - 1);
                    setDownvotes((prev) => prev + 1);
                } else if (userVote === false && voteStatus === true) {
                    setDownvotes((prev) => prev - 1);
                    setUpvotes((prev) => prev + 1);
                }
                setUserVote(voteStatus);
            } else if (data.action === "created") {
                // Nouveau vote
                if (voteStatus === true) {
                    setUpvotes((prev) => prev + 1);
                } else {
                    setDownvotes((prev) => prev + 1);
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
        <div className="flex items-center gap-4">
            {/* Bouton Upvote */}
            <button
                onClick={() => handleVote(true)}
                disabled={isLoading}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                    userVote === true
                        ? "bg-green-100 text-green-700 border-2 border-green-500"
                        : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                <UpvoteIcon className="text-lg" />
                <span className="font-semibold">{upvotes}</span>
            </button>

            {/* Bouton Downvote */}
            <button
                onClick={() => handleVote(false)}
                disabled={isLoading}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                    userVote === false
                        ? "bg-red-100 text-red-700 border-2 border-red-500"
                        : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                <DownvoteIcon className="text-lg" />
                <span className="font-semibold">{downvotes}</span>
            </button>
        </div>
    );
}
