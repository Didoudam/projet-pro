"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    HomeIcon,
    UsersIcon,
    CompanyIcon,
    SearchIcon,
    LogoutIcon,
} from "@/lib/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { ThemeToggle } from "@/components/ui";

interface Company {
    id: string;
    name: string;
    image: string | null;
    activity: string;
}

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [adminCompanies, setAdminCompanies] = useState<Company[]>([]);

    const isActive = (path: string) => pathname === path;

    // Récupérer les entreprises administrées
    useEffect(() => {
        const fetchAdminCompanies = async () => {
            if (!session?.user?.id) return;

            try {
                const response = await fetch(`/api/users/${session.user.id}/companies`);
                if (response.ok) {
                    const data = await response.json();
                    setAdminCompanies(data.companies || []);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des entreprises:", error);
            }
        };

        if (isOpen) {
            fetchAdminCompanies();
        }
    }, [session, isOpen]);

    const handleSignOut = async () => {
        await authClient.signOut();
        setIsOpen(false);
        router.push("/");
        router.refresh();
    };

    const menuItems = [
        { href: "/", icon: HomeIcon, label: "Accueil" },
        { href: "/dashboard", icon: UsersIcon, label: "Dashboard" },
        { href: "/network", icon: UsersIcon, label: "Mon Réseau" },
        { href: "/companies", icon: CompanyIcon, label: "Entreprises" },
        { href: "/search", icon: SearchIcon, label: "Recherche" },
    ];

    return (
        <>
            {/* Bouton Burger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col gap-1.5 p-2 hover:bg-muted transition-colors md:hidden"
                aria-label="Menu"
            >
                <span
                    className={`block w-6 h-0.5 bg-foreground transition-transform ${
                        isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-foreground transition-opacity ${
                        isOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-foreground transition-transform ${
                        isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Menu Slide */}
            <div
                className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-card border-r-2 border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header du menu */}
                <div className="p-4 border-b-2 border-border bg-primary shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white border-2 border-border flex items-center justify-center">
                            <span className="text-primary font-bold text-xl font-mono">
                                PP
                            </span>
                        </div>
                        <div>
                            <h2 className="text-white font-bold font-mono uppercase text-sm">
                                Projet Pro
                            </h2>
                            <p className="text-white/70 text-xs font-mono">Menu</p>
                        </div>
                    </div>
                </div>

                {/* Items du menu */}
                <nav className="p-4 space-y-2 overflow-y-auto flex-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 p-4 border-2 transition-all ${
                                    isActive(item.href)
                                        ? "bg-primary text-primary-foreground border-primary shadow-[2px_2px_0px_0px_var(--shadow-color)]"
                                        : "border-border hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                                }`}
                            >
                                <Icon className="text-xl shrink-0" />
                                <span className="font-mono uppercase text-sm font-bold">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}

                    {/* Entreprises administrées */}
                    {adminCompanies.length > 0 && (
                        <>
                            <div className="h-px bg-border my-4" />
                            <div className="mb-2">
                                <h3 className="text-xs font-mono uppercase font-bold text-muted-foreground mb-2">
                                    Mes Entreprises
                                </h3>
                                <div className="space-y-2">
                                    {adminCompanies.map((company) => (
                                        <Link
                                            key={company.id}
                                            href={`/my-companies/${company.id}`}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 p-3 border-2 border-border hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                                        >
                                            {company.image ? (
                                                <img
                                                    src={company.image}
                                                    alt={company.name}
                                                    className="w-8 h-8 border-2 border-border object-cover"
                                                />
                                            ) : (
                                                <div className="w-8 h-8 bg-muted border-2 border-border flex items-center justify-center">
                                                    <CompanyIcon className="text-xs" />
                                                </div>
                                            )}
                                            <span className="font-mono text-xs font-bold truncate">
                                                {company.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Séparateur */}
                    <div className="h-px bg-border my-4" />

                    {/* Theme Toggle */}
                    <div className="p-4 border-2 border-border">
                        <div className="flex items-center justify-between">
                            <span className="font-mono uppercase text-sm font-bold">
                                Thème
                            </span>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Déconnexion */}
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-4 p-4 border-2 border-border hover:border-error hover:text-error transition-all"
                    >
                        <LogoutIcon className="text-xl shrink-0" />
                        <span className="font-mono uppercase text-sm font-bold">
                            Déconnexion
                        </span>
                    </button>
                </nav>
            </div>
        </>
    );
}
