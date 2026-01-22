"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CompanyWithRelations } from "@/types/company";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToastStore } from "@/stores/useToastStore";

interface CreateCompanyFormProps {
    onSuccess?: (company: CompanyWithRelations) => void;
}

export function CreateCompanyForm({ onSuccess }: CreateCompanyFormProps) {
    const router = useRouter();
    const { success, error } = useToastStore();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        activity: "",
        description: "",
        image: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/companies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erreur lors de la création");
            }

            success("Entreprise créée avec succès");
            setFormData({ name: "", activity: "", description: "", image: "" });

            if (onSuccess) {
                onSuccess(data.company);
            } else {
                router.refresh();
            }
        } catch (err) {
            error(err instanceof Error ? err.message : "Erreur lors de la création");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Nom de l'entreprise"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Acme Corp"
                    required
                />
                <Input
                    label="Secteur d'activité"
                    value={formData.activity}
                    onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                    placeholder="Technologie"
                />
            </div>

            <Input
                label="URL de l'image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://..."
            />

            <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-foreground mb-2">
                    Description
                </label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Description de l'entreprise..."
                    rows={4}
                    className="w-full px-3 py-2 border-2 border-border bg-background text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                />
            </div>

            <div className="flex justify-end gap-2">
                <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting || !formData.name.trim()}
                >
                    {isSubmitting ? "Création..." : "Créer l'entreprise"}
                </Button>
            </div>
        </form>
    );
}
