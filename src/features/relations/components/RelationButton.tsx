"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { useToastStore } from "@/stores/useToastStore";
import { useRouter } from "next/navigation";

interface RelationButtonProps {
    targetUserId: string;
    targetUserName?: string;
}

type RelationStatus = "none" | "pending_sent" | "pending_received" | "accepted";

export function RelationButton({ targetUserId, targetUserName }: RelationButtonProps) {
    const { data: session } = useSession();
    const { success, error } = useToastStore();
    const router = useRouter();
    const [relationStatus, setRelationStatus] = useState<RelationStatus>("none");
    const [relationId, setRelationId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Vérifier le statut de la relation au chargement
    useEffect(() => {
        const checkRelationStatus = async () => {
            if (!session?.user) return;

            try {
                const response = await fetch("/api/relations");
                if (!response.ok) return;

                const data = await response.json();

                // Vérifier si une demande a été envoyée
                const sentRelation = data.sent.find(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (r: any) => r.relationId === targetUserId
                );
                if (sentRelation) {
                    setRelationId(sentRelation.id);
                    setRelationStatus(sentRelation.status ? "accepted" : "pending_sent");
                    return;
                }

                // Vérifier si une demande a été reçue
                const receivedRelation = data.received.find(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (r: any) => r.userId === targetUserId
                );
                if (receivedRelation) {
                    setRelationId(receivedRelation.id);
                    setRelationStatus(receivedRelation.status ? "accepted" : "pending_received");
                    return;
                }
            } catch (err) {
                console.error("Erreur lors de la vérification de la relation:", err);
            }
        };

        checkRelationStatus();
    }, [session, targetUserId]);

    const handleSendRequest = async () => {
        if (!session?.user) {
            error("Connectez-vous pour envoyer une demande");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/relations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    targetUserId,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                error(data.error || "Erreur lors de l'envoi de la demande");
                return;
            }

            setRelationId(data.id);
            setRelationStatus("pending_sent");
            success(`Demande envoyée à ${targetUserName || "l'utilisateur"}`);
            router.refresh();
        } catch (err) {
            console.error("Erreur:", err);
            error("Erreur lors de l'envoi de la demande");
        } finally {
            setIsLoading(false);
        }
    };

    const handleAcceptRequest = async () => {
        if (!relationId) return;
        setIsLoading(true);

        try {
            const response = await fetch(`/api/relations/${relationId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action: "accept",
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                error(data.error || "Erreur lors de l'acceptation");
                return;
            }

            setRelationStatus("accepted");
            success(`Vous êtes maintenant connecté avec ${targetUserName || "cet utilisateur"}`);
            router.refresh();
        } catch (err) {
            console.error("Erreur:", err);
            error("Erreur lors de l'acceptation");
        } finally {
            setIsLoading(false);
        }
    };

    const handleRejectRequest = async () => {
        if (!relationId) return;
        setIsLoading(true);

        try {
            const response = await fetch(`/api/relations/${relationId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action: "reject",
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                error(data.error || "Erreur lors du refus");
                return;
            }

            setRelationStatus("none");
            setRelationId(null);
            success("Demande refusée");
            router.refresh();
        } catch (err) {
            console.error("Erreur:", err);
            error("Erreur lors du refus");
        } finally {
            setIsLoading(false);
        }
    };

    const handleRemoveRelation = async () => {
        if (!relationId) return;
        setIsLoading(true);

        try {
            const response = await fetch(`/api/relations/${relationId}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (!response.ok) {
                error(data.error || "Erreur lors de la suppression");
                return;
            }

            setRelationStatus("none");
            setRelationId(null);
            success("Relation supprimée");
            router.refresh();
        } catch (err) {
            console.error("Erreur:", err);
            error("Erreur lors de la suppression");
        } finally {
            setIsLoading(false);
        }
    };

    // Ne pas afficher le bouton si c'est l'utilisateur connecté
    if (session?.user?.id === targetUserId) {
        return null;
    }

    // Bouton pour accepter une demande reçue
    if (relationStatus === "pending_received") {
        return (
            <div className="flex gap-2">
                <button
                    onClick={handleAcceptRequest}
                    disabled={isLoading}
                    className="px-4 py-2 bg-accent text-accent-foreground border-2 border-border font-mono uppercase text-sm font-bold hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all disabled:opacity-50"
                >
                    Accepter
                </button>
                <button
                    onClick={handleRejectRequest}
                    disabled={isLoading}
                    className="px-4 py-2 bg-muted text-muted-foreground border-2 border-border font-mono uppercase text-sm font-bold hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all disabled:opacity-50"
                >
                    Refuser
                </button>
            </div>
        );
    }

    // Bouton pour une demande envoyée en attente
    if (relationStatus === "pending_sent") {
        return (
            <button
                onClick={handleRemoveRelation}
                disabled={isLoading}
                className="px-4 py-2 bg-muted text-muted-foreground border-2 border-border font-mono uppercase text-sm font-bold hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all disabled:opacity-50"
            >
                En attente
            </button>
        );
    }

    // Bouton pour une relation acceptée
    if (relationStatus === "accepted") {
        return (
            <button
                onClick={handleRemoveRelation}
                disabled={isLoading}
                className="px-4 py-2 bg-accent/20 text-accent border-2 border-accent font-mono uppercase text-sm font-bold hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all disabled:opacity-50"
            >
                Connecté
            </button>
        );
    }

    // Bouton pour envoyer une demande
    return (
        <button
            onClick={handleSendRequest}
            disabled={isLoading}
            className="px-4 py-2 bg-primary text-primary-foreground border-2 border-border font-mono uppercase text-sm font-bold hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all disabled:opacity-50"
        >
            {isLoading ? "..." : "Se connecter"}
        </button>
    );
}
