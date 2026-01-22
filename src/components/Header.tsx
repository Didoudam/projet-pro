"use client";

import Link from "next/link";
import {
    HomeIcon,
    NotificationsIcon,
    LogoutIcon,
} from "@/lib/icons";
import { useSession } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { ThemeToggle, Button } from "@/components/ui";
import { SearchBar } from "@/components/SearchBar";
import { MobileMenu } from "@/components/MobileMenu";
import { useState, useEffect } from "react";

export function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const isAuthenticated = !!session?.user;
  const [hasNotifications, setHasNotifications] = useState(false);

  // Vérifier s'il y a des notifications
  useEffect(() => {
    const checkNotifications = async () => {
      if (!session?.user) return;

      try {
        const response = await fetch("/api/relations?status=pending");
        if (response.ok) {
          const data = await response.json();
          const pendingCount = data.received?.length || 0;
          setHasNotifications(pendingCount > 0);
        }
      } catch (error) {
        console.error("Erreur lors de la vérification des notifications:", error);
      }
    };

    checkNotifications();
    // Vérifier toutes les 30 secondes
    const interval = setInterval(checkNotifications, 30000);
    return () => clearInterval(interval);
  }, [session]);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="bg-card border-b-2 border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Menu Burger (mobile uniquement) */}
          {isAuthenticated && <MobileMenu />}

          {/* Logo et titre */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-none border-2 border-border flex items-center justify-center">
              <span className="text-white font-bold text-3xl absolute top-2">ρ</span>
            </div>
            <h1 className="text-xl font-bold text-foreground font-mono uppercase tracking-wide hidden sm:block">
              Pro Link
            </h1>
          </Link>

          {/* Search Bar - visible uniquement si connecté */}
          {isAuthenticated && (
            <div className="flex-1 max-w-xl">
              <SearchBar />
            </div>
          )}

          {/* Navigation principale */}
          <nav className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
            {isAuthenticated ? (
              <>
                {/* Accueil - masqué sur mobile */}
                <Link
                  href="/"
                  className="hidden md:flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <HomeIcon className="text-xl" />
                  <span className="text-xs font-mono uppercase tracking-wider">Accueil</span>
                </Link>

                {/* Notifications - simplifié sur mobile (icône uniquement) */}
                <Link
                  href="/notifications"
                  className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group relative"
                >
                  <NotificationsIcon className="text-xl" />
                  <span className="text-xs font-mono uppercase tracking-wider hidden md:block">Notifications</span>
                  {/* Badge de notification - visible seulement s'il y a des notifications */}
                  {hasNotifications && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full animate-pulse"></span>
                  )}
                </Link>

                {/* Bouton déconnexion - masqué sur mobile */}
                <button
                  onClick={handleSignOut}
                  className="hidden md:flex flex-col items-center gap-1 px-2 py-1 border-2 border-transparent text-muted-foreground hover:border-border hover:text-error transition-all group"
                >
                  <LogoutIcon className="text-xl" />
                  <span className="text-xs font-mono uppercase tracking-wider">Déconnexion</span>
                </button>

                {/* Theme Toggle - masqué sur mobile (dans le burger menu) */}
                <div className="hidden md:block">
                  <ThemeToggle />
                </div>
              </>
            ) : (
              <>
                {/* Boutons pour utilisateurs non connectés */}
                <Link href="/auth?tab=signin">
                  <Button
                    variant="ghost"
                    className="text-xs sm:text-sm"
                  >
                    Connexion
                  </Button>
                </Link>
                <Link href="/auth?tab=signup">
                  <Button
                    variant="primary"
                    className="text-xs sm:text-sm"
                  >
                    Inscription
                  </Button>
                </Link>

                {/* Theme Toggle - visible pour les utilisateurs non connectés */}
                <ThemeToggle />
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
