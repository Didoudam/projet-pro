"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToastStore } from "@/stores/useToastStore";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface DeleteCompanyButtonProps {
    companyId: string;
    companyName: string;
}

export function DeleteCompanyButton({ companyId, companyName }: DeleteCompanyButtonProps) {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [confirmText, setConfirmText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const { success, error } = useToastStore();
    const router = useRouter();

    const handleDelete = async () => {
        if (confirmText !== companyName) {
            error("Le nom de l'entreprise ne correspond pas");
            return;
        }

        setIsDeleting(true);
        try {
            const response = await fetch(`/api/companies/${companyId}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (!response.ok) {
                error(data.message || "Erreur lors de la suppression");
                return;
            }

            success("Entreprise supprimée avec succès");
            router.push("/my-companies");
        } catch (err) {
            console.error("Erreur:", err);
            error("Erreur lors de la suppression de l'entreprise");
        } finally {
            setIsDeleting(false);
        }
    };

    if (!isConfirmOpen) {
        return (
            <Card className="border-destructive/50">
                <CardHeader pattern="grid">
                    <CardTitle mono className="text-destructive">Zone de danger</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                        La suppression de l&apos;entreprise est irréversible. Toutes les données associées
                        (posts, commentaires, expériences, formations) seront définitivement supprimées.
                    </p>
                    <Button
                        variant="outline"
                        onClick={() => setIsConfirmOpen(true)}
                        className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                        Supprimer l&apos;entreprise
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-destructive">
            <CardHeader pattern="grid" className="bg-destructive/10">
                <CardTitle mono className="text-destructive">Confirmer la suppression</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm text-foreground">
                    Cette action est <strong>irréversible</strong>. Pour confirmer,
                    tapez le nom de l&apos;entreprise ci-dessous :
                </p>
                <p className="font-mono text-sm bg-muted p-2 border-2 border-border">
                    {companyName}
                </p>
                <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder="Tapez le nom de l'entreprise"
                    className="w-full px-3 py-2 border-2 border-border bg-background text-foreground font-mono text-sm focus:outline-none focus:border-destructive"
                />
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        onClick={() => {
                            setIsConfirmOpen(false);
                            setConfirmText("");
                        }}
                        disabled={isDeleting}
                        className="flex-1"
                    >
                        Annuler
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleDelete}
                        disabled={isDeleting || confirmText !== companyName}
                        className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                    >
                        {isDeleting ? "Suppression..." : "Supprimer définitivement"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
