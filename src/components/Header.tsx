"use client";

import Link from "next/link";
import {
    HomeIcon,
    UsersIcon,
    NotificationsIcon,
    ProfileIcon,
    LogoutIcon,
    CompanyIcon,
} from "@/lib/icons";
import { useSession } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserWithCompanies {
  isAdmin: boolean;
  companies: Array<{ id: string; name: string; image?: string; activity?: string }>;
}

export function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const isAuthenticated = !!session?.user;
  const [userCompanies, setUserCompanies] = useState<UserWithCompanies | null>(null);

  // Récupérer les entreprises administrées par l'utilisateur
  useEffect(() => {
    const fetchUserCompanies = async () => {
      if (!isAuthenticated || !session?.user?.id) {
        setUserCompanies(null);
        return;
      }

      try {
        const response = await fetch(`/api/users/${session.user.id}/companies`);
        if (response.ok) {
          const data = await response.json();
          setUserCompanies(data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des entreprises:", error);
      }
    };

    fetchUserCompanies();
  }, [isAuthenticated, session?.user?.id]);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  const isCompanyAdmin = userCompanies?.isAdmin ?? false;

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et titre */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">PP</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
              Projet Pro
            </h1>
          </Link>

          {/* Navigation principale */}
          <nav className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                {/* Accueil - visible uniquement si connecté */}
                <Link
                  href="/"
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <HomeIcon className="text-xl" />
                  <span className="text-xs font-medium">Accueil</span>
                </Link>

                {/* Réseau - visible uniquement si connecté */}
                <Link
                  href="/users"
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <UsersIcon className="text-xl" />
                  <span className="text-xs font-medium">Réseau</span>
                </Link>

                {/* Mes entreprises - visible uniquement si admin d'une entreprise */}
                {isCompanyAdmin && (
                  <Link
                    href="/my-companies"
                    className="flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 transition-colors group relative"
                  >
                    <CompanyIcon className="text-xl" />
                    <span className="text-xs font-medium">Mes entreprises</span>
                    {userCompanies && userCompanies.companies.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                        {userCompanies.companies.length}
                      </span>
                    )}
                  </Link>
                )}

                {/* Notifications - visible uniquement si connecté */}
                <Link
                  href="/notifications"
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors group relative"
                >
                  <NotificationsIcon className="text-xl" />
                  <span className="text-xs font-medium">Notifications</span>
                  {/* Badge de notification (optionnel) */}
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </Link>

                {/* Dashboard - visible uniquement si connecté */}
                <Link
                  href="/dashboard"
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <ProfileIcon className="text-xl" />
                  <span className="text-xs font-medium">Dashboard</span>
                </Link>

                {/* Bouton déconnexion */}
                <button
                  onClick={handleSignOut}
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-red-600 transition-colors group"
                >
                  <LogoutIcon className="text-xl" />
                  <span className="text-xs font-medium">Déconnexion</span>
                </button>
              </>
            ) : (
              <>
                {/* Boutons pour utilisateurs non connectés */}
                <Link
                  href="/auth?tab=signin"
                  className="px-6 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Connexion
                </Link>
                <Link
                  href="/auth?tab=signup"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm"
                >
                  Inscription
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
