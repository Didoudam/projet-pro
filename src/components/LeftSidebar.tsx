"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UsersIcon, ProfileIcon, CompanyIcon } from "@/lib/icons";
import { useEffect, useState } from "react";

interface UserWithCompanies {
  isAdmin: boolean;
  companies: Array<{ id: string; name: string; image?: string; activity?: string }>;
}

interface LeftSidebarProps {
  userId: string;
}

export function LeftSidebar({ userId }: LeftSidebarProps) {
  const pathname = usePathname();
  const [userCompanies, setUserCompanies] = useState<UserWithCompanies | null>(null);

  useEffect(() => {
    const fetchUserCompanies = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/companies`);
        if (response.ok) {
          const data = await response.json();
          setUserCompanies(data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des entreprises:", error);
      }
    };

    fetchUserCompanies();
  }, [userId]);

  const isActive = (path: string) => pathname === path;
  const isCompanyAdmin = userCompanies?.isAdmin ?? false;

  return (
    <aside className="w-72 border-r-4 border-black bg-card sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="p-6 space-y-3">
        <div className="mb-6">
          <h2 className="text-xs font-bold text-muted-foreground mb-1">NAVIGATION</h2>
          <div className="h-1 w-12 bg-black"></div>
        </div>

        {/* Dashboard */}
        <Link
          href="/dashboard"
          className={`group flex items-center gap-4 p-4 border-2 border-black transition-all relative overflow-hidden ${
            isActive("/dashboard")
              ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              : "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
          }`}
        >
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${isActive("/dashboard") ? "bg-white" : "bg-black"}`}></div>
          <ProfileIcon className="text-2xl flex-shrink-0" />
          <div className="flex-1">
            <div className="text-sm font-bold font-mono">DASHBOARD</div>
            <div className="text-xs opacity-70">Mon profil</div>
          </div>
        </Link>

        {/* Réseau */}
        <Link
          href="/network"
          className={`group flex items-center gap-4 p-4 border-2 border-black transition-all relative overflow-hidden ${
            isActive("/network")
              ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              : "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
          }`}
        >
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${isActive("/network") ? "bg-white" : "bg-black"}`}></div>
          <UsersIcon className="text-2xl flex-shrink-0" />
          <div className="flex-1">
            <div className="text-sm font-bold font-mono">RÉSEAU</div>
            <div className="text-xs opacity-70">Mes connexions</div>
          </div>
        </Link>

        {/* Entreprises */}
        <Link
          href="/companies"
          className={`group flex items-center gap-4 p-4 border-2 border-black transition-all relative overflow-hidden ${
            isActive("/companies")
              ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              : "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
          }`}
        >
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${isActive("/companies") ? "bg-white" : "bg-black"}`}></div>
          <CompanyIcon className="text-2xl flex-shrink-0" />
          <div className="flex-1">
            <div className="text-sm font-bold font-mono">ENTREPRISES</div>
            <div className="text-xs opacity-70">Toutes</div>
          </div>
        </Link>

        {/* Mes Entreprises - visible uniquement si admin */}
        {isCompanyAdmin && (
          <>
            <div className="my-6 flex items-center gap-2">
              <div className="h-0.5 flex-1 bg-black"></div>
              <span className="text-xs font-bold text-muted-foreground">ADMIN</span>
              <div className="h-0.5 flex-1 bg-black"></div>
            </div>
            <Link
              href="/my-companies"
              className={`group flex items-center gap-4 p-4 border-2 border-black transition-all relative overflow-hidden ${
                isActive("/my-companies")
                  ? "bg-green-500 text-white border-green-500 shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]"
                  : "hover:border-green-500 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              }`}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${isActive("/my-companies") ? "bg-white" : "bg-green-500"}`}></div>
              <CompanyIcon className="text-2xl flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-bold font-mono">MES ENTREPRISES</div>
                <div className="text-xs opacity-70">Administrées</div>
              </div>
              {userCompanies && userCompanies.companies.length > 0 && (
                <span className="w-7 h-7 bg-white text-black text-xs font-bold flex items-center justify-center border-2 border-black">
                  {userCompanies.companies.length}
                </span>
              )}
            </Link>

            {/* Liste des entreprises administrées */}
            {userCompanies && userCompanies.companies.length > 0 && (
              <div className="ml-8 mt-2 space-y-2 border-l-2 border-black pl-4">
                {userCompanies.companies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/companies/${company.id}`}
                    className="flex items-center gap-3 p-3 border-2 border-black hover:bg-black hover:text-white transition-all group"
                  >
                    {company.image ? (
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-8 h-8 border-2 border-black"
                      />
                    ) : (
                      <div className="w-8 h-8 border-2 border-black bg-white group-hover:bg-gray-100" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate">{company.name}</div>
                      {company.activity && (
                        <div className="text-[10px] truncate opacity-70">{company.activity}</div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </nav>
    </aside>
  );
}
