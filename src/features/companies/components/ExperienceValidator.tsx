"use client";

import { useState } from "react";
import { CompanyRole } from "@prisma/client";

type Experience = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date | null;
  description: string | null;
  user: {
    id: string;
    name: string;
    email: string;
    image: string | null;
  };
};

interface ExperienceValidatorProps {
  companyId: string;
  experiences: Experience[];
  userRole: CompanyRole;
}

export function ExperienceValidator({
  companyId,
  experiences: initialExperiences,
  userRole,
}: ExperienceValidatorProps) {
  const [experiences, setExperiences] = useState(initialExperiences);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const canValidate = ["SUPER_ADMIN", "ADMIN", "MODERATOR"].includes(userRole);

  const handleValidate = async (experienceId: string, validated: boolean) => {
    setIsLoading(experienceId);

    try {
      const response = await fetch(
        `/api/companies/${companyId}/experiences/${experienceId}/validate`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ validated }),
        }
      );

      if (response.ok) {
        setExperiences(experiences.filter((e) => e.id !== experienceId));
      } else {
        const error = await response.json();
        alert(error.message || "Erreur lors de la validation");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la validation");
    } finally {
      setIsLoading(null);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      month: "short",
      year: "numeric",
    });
  };

  if (!canValidate) {
    return (
      <div className="border-4 border-black p-6">
        <h2 className="text-2xl font-bold mb-4">VALIDATION DES EXPÉRIENCES</h2>
        <p className="text-sm text-muted-foreground">
          Vous n&apos;avez pas les permissions pour valider les expériences.
        </p>
      </div>
    );
  }

  return (
    <div className="border-4 border-black p-6">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
        EXPÉRIENCES À VALIDER
      </h2>

      {experiences.length === 0 ? (
        <div className="text-center py-12 border-2 border-black">
          <p className="text-sm text-muted-foreground">
            Aucune expérience en attente de validation
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-2 border-black p-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            >
              {/* User info */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-black">
                {exp.user.image ? (
                  <img
                    src={exp.user.image}
                    alt={exp.user.name}
                    className="w-10 h-10 border-2 border-black"
                  />
                ) : (
                  <div className="w-10 h-10 border-2 border-black bg-gray-100" />
                )}
                <div className="flex-1">
                  <div className="text-sm font-bold">{exp.user.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {exp.user.email}
                  </div>
                </div>
              </div>

              {/* Experience details */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1">{exp.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {formatDate(exp.startDate)} -{" "}
                  {exp.endDate ? formatDate(exp.endDate) : "Aujourd'hui"}
                </p>
                {exp.description && (
                  <p className="text-sm mt-2">{exp.description}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleValidate(exp.id, true)}
                  disabled={isLoading === exp.id}
                  className="flex-1 bg-green-500 text-white p-2 font-bold text-sm hover:bg-white hover:text-green-500 border-2 border-black transition-colors disabled:opacity-50"
                >
                  {isLoading === exp.id ? "..." : "✓ VALIDER"}
                </button>
                <button
                  onClick={() => handleValidate(exp.id, false)}
                  disabled={isLoading === exp.id}
                  className="flex-1 bg-red-500 text-white p-2 font-bold text-sm hover:bg-white hover:text-red-500 border-2 border-black transition-colors disabled:opacity-50"
                >
                  {isLoading === exp.id ? "..." : "✗ REFUSER"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
