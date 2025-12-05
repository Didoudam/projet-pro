"use client";

import { useState, useEffect, useRef } from "react";
import { Skill } from "@prisma/client";
import { useToastStore } from "@/stores/useToastStore";
import { useRouter } from "next/navigation";

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
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Compétences</h2>

            {/* Formulaire d'ajout */}
            <form onSubmit={handleAddSkill} className="mb-6">
                <div className="space-y-3">
                    {/* Champ nom avec autocomplete */}
                    <div className="relative">
                        <label
                            htmlFor="skillName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nom de la compétence
                        </label>
                        <input
                            ref={inputRef}
                            type="text"
                            id="skillName"
                            value={newSkillName}
                            onChange={(e) => {
                                setNewSkillName(e.target.value);
                                setShowSuggestions(true);
                            }}
                            onFocus={() => setShowSuggestions(true)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Ex: JavaScript, Marketing, Communication..."
                        />

                        {/* Suggestions */}
                        {showSuggestions && suggestions.length > 0 && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                {suggestions.map((suggestion) => (
                                    <button
                                        key={suggestion.name}
                                        type="button"
                                        onClick={() =>
                                            handleSelectSuggestion(
                                                suggestion.name
                                            )
                                        }
                                        className="w-full px-4 py-2 text-left hover:bg-blue-50 flex justify-between items-center"
                                    >
                                        <span>{suggestion.name}</span>
                                        <span className="text-xs text-gray-500">
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
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Niveau (1-5): {newSkillLevel}
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
                            className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Débutant</span>
                            <span>Expert</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isAdding}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        {isAdding ? "Ajout..." : "Ajouter la compétence"}
                    </button>
                </div>
            </form>

            {/* Liste des compétences */}
            {skills.length > 0 ? (
                <div className="space-y-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                            <div className="flex-1">
                                <span className="font-medium">
                                    {skill.name}
                                </span>
                                <div className="flex gap-1 mt-1">
                                    {[1, 2, 3, 4, 5].map((level) => (
                                        <div
                                            key={level}
                                            className={`w-6 h-2 rounded-full ${
                                                level <= skill.level
                                                    ? "bg-blue-500"
                                                    : "bg-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button
                                onClick={() => handleDeleteSkill(skill.id)}
                                className="ml-3 text-red-600 hover:text-red-800 font-medium text-sm"
                            >
                                Supprimer
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center py-4">
                    Aucune compétence ajoutée
                </p>
            )}
        </div>
    );
}
