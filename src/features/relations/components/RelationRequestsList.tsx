"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToastStore } from "@/stores/useToastStore";
import { Avatar } from "@/components/ui/Avatar";

interface RelationRequest {
    id: string;
    createdAt: string | Date;
    userId: string;
    user: {
        id: string;
        name: string;
        email: string;
        image: string | null;
        firstName: string | null;
        lastName: string | null;
    };
}

interface RelationRequestsListProps {
    requests: RelationRequest[];
}

export function RelationRequestsList({ requests: initialRequests }: RelationRequestsListProps) {
    const [requests, setRequests] = useState(initialRequests);
    const [loadingIds, setLoadingIds] = useState<Set<string>>(new Set());
    const { success, error } = useToastStore();
    const router = useRouter();

    const handleAccept = async (relationId: string, userName: string) => {
        setLoadingIds(prev => new Set(prev).add(relationId));

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

            setRequests(prev => prev.filter(r => r.id !== relationId));
            success(`Vous êtes maintenant connecté avec ${userName}`);
            router.refresh();
        } catch (err) {
            console.error("Erreur:", err);
            error("Erreur lors de l'acceptation");
        } finally {
            setLoadingIds(prev => {
                const newSet = new Set(prev);
                newSet.delete(relationId);
                return newSet;
            });
        }
    };

    const handleReject = async (relationId: string) => {
        setLoadingIds(prev => new Set(prev).add(relationId));

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

            setRequests(prev => prev.filter(r => r.id !== relationId));
            success("Demande refusée");
            router.refresh();
        } catch (err) {
            console.error("Erreur:", err);
            error("Erreur lors du refus");
        } finally {
            setLoadingIds(prev => {
                const newSet = new Set(prev);
                newSet.delete(relationId);
                return newSet;
            });
        }
    };

    if (requests.length === 0) {
        return (
            <div className="bg-card border-2 border-border p-8 text-center">
                <p className="text-muted-foreground font-mono text-sm">
                    Aucune demande de connexion en attente
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {requests.map((request) => {
                const isLoading = loadingIds.has(request.id);
                const displayName = request.user.firstName && request.user.lastName
                    ? `${request.user.firstName} ${request.user.lastName}`
                    : request.user.name;

                return (
                    <div
                        key={request.id}
                        className="bg-card border-2 border-border p-4 shadow-[2px_2px_0px_0px_var(--shadow-color)]"
                    >
                        <div className="flex items-center justify-between gap-4">
                            {/* Info utilisateur */}
                            <div className="flex items-center gap-4 flex-1">
                                {/* Avatar */}
                                <Avatar
                                    src={request.user.image}
                                    alt={displayName}
                                    size={48}
                                />

                                {/* Nom et email */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-foreground">
                                        {displayName}
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-mono">
                                        {request.user.email}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleAccept(request.id, displayName)}
                                    disabled={isLoading}
                                    className="px-4 py-2 bg-accent text-accent-foreground border-2 border-border font-mono uppercase text-xs font-bold hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all disabled:opacity-50"
                                >
                                    Accepter
                                </button>
                                <button
                                    onClick={() => handleReject(request.id)}
                                    disabled={isLoading}
                                    className="px-4 py-2 bg-muted text-muted-foreground border-2 border-border font-mono uppercase text-xs font-bold hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none transition-all disabled:opacity-50"
                                >
                                    Refuser
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
