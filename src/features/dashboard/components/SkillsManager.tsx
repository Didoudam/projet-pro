"use client";

import { useState, useEffect, useRef } from "react";
import { Skill } from "@prisma/client";
import { useToastStore } from "@/stores/useToastStore";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface SkillsManagerProps {
    initialSkills: Skill[];
}

interface SkillSuggestion {
    name: string;
    usageCount: number;
}

export function SkillsManager({ initialSkills }: SkillsManagerProps) {
    const [skills, setSkills] = useState<Skill[]>(initialSkills);
    const [newSkillName, setNewSkillName] = useState("");
    const [newSkillLevel, setNewSkillLevel] = useState(3);
    const [suggestions, setSuggestions] = useState<SkillSuggestion[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const { success, error } = useToastStore();
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    // Récupérer les suggestions quand l'utilisateur tape
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (newSkillName.length < 2) {
                setSuggestions([]);
                return;
            }

            try {
                const response = await fetch(
                    `/api/skills/suggestions?query=${encodeURIComponent(
                        newSkillName
                    )}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setSuggestions(data);
                }
            } catch (err) {
                console.error("Erreur récupération suggestions:", err);
            }
        };

        const timeoutId = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeoutId);
    }, [newSkillName]);

    const handleAddSkill = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newSkillName.trim()) {
            error("Le nom de la compétence est requis");
            return;
        }

        setIsAdding(true);
        try {
            const response = await fetch("/api/skills", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: newSkillName.trim(),
                    level: newSkillLevel,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                error(data.error || "Erreur lors de l'ajout de la compétence");
                return;
            }

            const skill = await response.json();
            setSkills([...skills, skill]);
            setNewSkillName("");
            setNewSkillLevel(3);
            setSuggestions([]);
            setShowSuggestions(false);
            success("Compétence ajoutée !");
            router.refresh();
        } catch (err) {
            error("Erreur lors de l'ajout de la compétence");
            console.error(err);
        } finally {
            setIsAdding(false);
        }
    };

    const handleDeleteSkill = async (skillId: string) => {
        try {
            const response = await fetch(`/api/skills/${skillId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                error("Erreur lors de la suppression");
                return;
            }

            setSkills(skills.filter((s) => s.id !== skillId));
            success("Compétence supprimée !");
            router.refresh();
        } catch (err) {
            error("Erreur lors de la suppression");
            console.error(err);
        }
    };

    const handleSelectSuggestion = (suggestionName: string) => {
        setNewSkillName(suggestionName);
        setShowSuggestions(false);
        setSuggestions([]);
        inputRef.current?.focus();
    };

    return (
        <Card>
            <CardHeader pattern="dots">
                <CardTitle mono>Compétences</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Formulaire d'ajout */}
                <form onSubmit={handleAddSkill} className="mb-6">
                    <div className="space-y-3">
                        {/* Champ nom avec autocomplete */}
                        <div className="relative">
                            <label
                                htmlFor="skillName"
                                className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                            >
                                Nom de la compétence
                            </label>
                            <Input
                                ref={inputRef}
                                type="text"
                                id="skillName"
                                value={newSkillName}
                                onChange={(e) => {
                                    setNewSkillName(e.target.value);
                                    setShowSuggestions(true);
                                }}
                                onFocus={() => setShowSuggestions(true)}
                                placeholder="Ex: JavaScript, Marketing, Communication..."
                            />

                            {/* Suggestions */}
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute z-10 w-full mt-1 bg-card border-2 border-border shadow-[4px_4px_0_0_var(--shadow-color)] max-h-60 overflow-y-auto">
                                    {suggestions.map((suggestion) => (
                                        <button
                                            key={suggestion.name}
                                            type="button"
                                            onClick={() =>
                                                handleSelectSuggestion(
                                                    suggestion.name
                                                )
                                            }
                                            className="w-full px-4 py-2 text-left hover:bg-primary/10 hover:text-primary flex justify-between items-center border-b border-border last:border-b-0 font-mono transition-colors"
                                        >
                                            <span>{suggestion.name}</span>
                                            <span className="text-xs text-muted-foreground">
                                                {suggestion.usageCount}{" "}
                                                {suggestion.usageCount > 1
                                                    ? "utilisateurs"
                                                    : "utilisateur"}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Niveau */}
                        <div>
                            <label
                                htmlFor="skillLevel"
                                className="block text-sm font-medium text-foreground mb-1 font-mono uppercase tracking-wider"
                            >
                                Niveau (1-5): <span className="text-primary font-bold">{newSkillLevel}</span>
                            </label>
                            <input
                                type="range"
                                id="skillLevel"
                                min="1"
                                max="5"
                                value={newSkillLevel}
                                onChange={(e) =>
                                    setNewSkillLevel(Number(e.target.value))
                                }
                                className="w-full accent-primary"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                                <span>Débutant</span>
                                <span>Expert</span>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isAdding}
                            variant="primary"
                            className="w-full"
                        >
                            {isAdding ? "Ajout..." : "Ajouter la compétence"}
                        </Button>
                    </div>
                </form>

                {/* Liste des compétences */}
                {skills.length > 0 ? (
                    <div className="space-y-2">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="flex items-center justify-between p-3 bg-muted/30 border-2 border-border"
                            >
                                <div className="flex-1">
                                    <span className="font-medium font-mono text-foreground">
                                        {skill.name}
                                    </span>
                                    <div className="flex gap-1 mt-1">
                                        {[1, 2, 3, 4, 5].map((level) => (
                                            <div
                                                key={level}
                                                className={`w-6 h-2 border border-border ${
                                                    level <= skill.level
                                                        ? "bg-primary"
                                                        : "bg-muted"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDeleteSkill(skill.id)}
                                    className="ml-3 px-3 py-1 border-2 border-border bg-background text-foreground hover:border-secondary hover:text-secondary font-medium text-sm font-mono uppercase tracking-wider transition-all"
                                >
                                    Supprimer
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground text-center py-4 font-mono uppercase tracking-wider text-sm">
                        Aucune compétence ajoutée
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
