"use client";

import { useState } from "react";
import { CompanyRole } from "@prisma/client";

type Admin = {
  id: string;
  role: CompanyRole;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    email: string;
    image: string | null;
  };
};

interface CompanyAdminManagerProps {
  companyId: string;
  admins: Admin[];
  currentUserRole: CompanyRole;
}

export function CompanyAdminManager({
  companyId,
  admins: initialAdmins,
  currentUserRole,
}: CompanyAdminManagerProps) {
  const [admins, setAdmins] = useState(initialAdmins);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<CompanyRole>("MODERATOR");
  const [isLoading, setIsLoading] = useState(false);

  const canManageAdmins = currentUserRole === "SUPER_ADMIN";

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/companies/${companyId}/admins`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      if (response.ok) {
        const newAdmin = await response.json();
        setAdmins([...admins, newAdmin]);
        setEmail("");
        setRole("MODERATOR");
      } else {
        const error = await response.json();
        alert(error.message || "Erreur lors de l'ajout de l'administrateur");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout de l'administrateur");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveAdmin = async (adminId: string) => {
    if (!confirm("Êtes-vous sûr de vouloir retirer cet administrateur ?")) {
      return;
    }

    try {
      const response = await fetch(
        `/api/companies/${companyId}/admins/${adminId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setAdmins(admins.filter((a) => a.id !== adminId));
      } else {
        const error = await response.json();
        alert(error.message || "Erreur lors de la suppression");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression");
    }
  };

  const getRoleBadgeColor = (role: CompanyRole) => {
    switch (role) {
      case "SUPER_ADMIN":
        return "bg-red-500";
      case "ADMIN":
        return "bg-blue-500";
      case "MODERATOR":
        return "bg-green-500";
    }
  };

  return (
    <div className="border-4 border-black p-6">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
        ADMINISTRATEURS
      </h2>

      {/* Add admin form - only for SUPER_ADMIN */}
      {canManageAdmins && (
        <form onSubmit={handleAddAdmin} className="mb-6 border-2 border-black p-4">
          <h3 className="text-sm font-bold mb-4">AJOUTER UN ADMINISTRATEUR</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold mb-1">
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-black p-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1">
                RÔLE
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as CompanyRole)}
                className="w-full border-2 border-black p-2 text-sm"
              >
                <option value="MODERATOR">Modérateur</option>
                <option value="ADMIN">Administrateur</option>
                <option value="SUPER_ADMIN">Super Admin</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white p-2 font-bold text-sm hover:bg-white hover:text-black border-2 border-black transition-colors disabled:opacity-50"
            >
              {isLoading ? "AJOUT..." : "+ AJOUTER"}
            </button>
          </div>
        </form>
      )}

      {/* Admins list */}
      <div className="space-y-3">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="border-2 border-black p-4 flex items-center gap-4"
          >
            {admin.user.image ? (
              <img
                src={admin.user.image}
                alt={admin.user.name}
                className="w-12 h-12 border-2 border-black"
              />
            ) : (
              <div className="w-12 h-12 border-2 border-black bg-gray-100" />
            )}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold truncate">{admin.user.name}</div>
              <div className="text-xs text-muted-foreground truncate">
                {admin.user.email}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`${getRoleBadgeColor(
                  admin.role
                )} text-white px-3 py-1 text-xs font-bold border-2 border-black`}
              >
                {admin.role}
              </span>
              {canManageAdmins && admin.role !== "SUPER_ADMIN" && (
                <button
                  onClick={() => handleRemoveAdmin(admin.id)}
                  className="bg-red-500 text-white px-3 py-1 text-xs font-bold border-2 border-black hover:bg-white hover:text-red-500 transition-colors"
                >
                  RETIRER
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Permissions info */}
      <div className="mt-6 border-2 border-black p-4 bg-gray-50 text-xs">
        <p className="font-bold mb-2">PERMISSIONS :</p>
        <ul className="space-y-1">
          <li>• <strong>SUPER_ADMIN</strong> : Tous les droits, gestion des admins</li>
          <li>• <strong>ADMIN</strong> : Validation des expériences, modération</li>
          <li>• <strong>MODERATOR</strong> : Validation des expériences</li>
        </ul>
      </div>
    </div>
  );
}
