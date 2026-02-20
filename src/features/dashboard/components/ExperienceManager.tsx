"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToastStore } from "@/stores/useToastStore";
import { Experience } from "@prisma/client";

type ExperienceWithCompany = Experience & {
    company: {
        id: string;
        name: string;
        image: string | null;
    } | null;
};

interface ExperienceManagerProps {
    experiences: ExperienceWithCompany[];
}

export function ExperienceManager({ experiences: initialExperiences }: ExperienceManagerProps) {
    const router = useRouter();
    const { success, error } = useToastStore();
    const [experiences, setExperiences] = useState<ExperienceWithCompany[]>(initialExperiences);
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        startDate: "",
        endDate: "",
        description: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/experiences", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    endDate: formData.endDate || null,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erreur lors de la création");
            }

            success("Expérience ajoutée avec succès");
            setFormData({ name: "", companyName: "", startDate: "", endDate: "", description: "" });
            setShowForm(false);
            router.refresh();
        } catch (err) {
            error(err instanceof Error ? err.message : "Erreur lors de la création");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card>
            <CardHeader className="pattern-grid">
                <div className="flex items-center justify-between">
                    <CardTitle mono>Expériences Professionnelles</CardTitle>
                    <Button
                        onClick={() => setShowForm(!showForm)}
                        variant="primary"
                        size="sm"
                    >
                        {showForm ? "Annuler" : "+ Ajouter"}
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                {/* Formulaire d'ajout */}
                {showForm && (
                    <form onSubmit={handleSubmit} className="space-y-4 mb-4 p-4 border-2 border-border bg-muted/10">
                        <div>
                            <label className="block text-sm font-mono uppercase tracking-wider text-foreground mb-2">
                                Poste
                            </label>
                            <Input
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Développeur Full Stack"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono uppercase tracking-wider text-foreground mb-2">
                                Employeur
                            </label>
                            <Input
                                value={formData.companyName}
                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                placeholder="Nom de l&apos;entreprise"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-mono uppercase tracking-wider text-foreground mb-2">
                                    Date de début
                                </label>
                                <Input
                                    type="date"
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono uppercase tracking-wider text-foreground mb-2">
                                    Date de fin (optionnel)
                                </label>
                                <Input
                                    type="date"
                                    value={formData.endDate}
                                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-mono uppercase tracking-wider text-foreground mb-2">
                                Description
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Décrivez vos missions..."
                                rows={3}
                                className="w-full px-3 py-2 border-2 border-border bg-background text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                variant="primary"
                                size="sm"
                                disabled={isSubmitting || !formData.name.trim() || !formData.companyName.trim() || !formData.startDate}
                            >
                                {isSubmitting ? "Ajout..." : "Ajouter"}
                            </Button>
                        </div>
                    </form>
                )}

                {/* Liste des expériences */}
                {experiences.length === 0 ? (
                    <div className="text-center py-8 pattern-dots">
                        <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">
                            Aucune expérience ajoutée
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className="border-l-4 border-primary pl-4 py-2"
                            >
                                <h3 className="font-bold text-foreground font-mono uppercase tracking-wider">
                                    {exp.name}
                                </h3>
                                <p className="text-sm text-muted-foreground font-mono">
                                    {exp.companyName || exp.company?.name || "Entreprise non spécifiée"}
                                </p>
                                <p className="text-xs text-muted-foreground font-mono mt-1">
                                    {new Date(exp.startDate).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}
                                    {" → "}
                                    {exp.endDate
                                        ? new Date(exp.endDate).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })
                                        : "Aujourd'hui"}
                                </p>
                                {exp.description && (
                                    <p className="text-sm text-foreground mt-2">
                                        {exp.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
