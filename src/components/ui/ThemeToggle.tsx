"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // Check system preference on mount
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else if (isDark) {
            setTheme("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);

        // Force CSS variables update
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="animate-flicker"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <span className="text-xs font-mono">
                {theme === "light" ? "☀" : "☾"}
            </span>
            <span className="hidden sm:inline">
                {theme === "light" ? "LIGHT" : "DARK"}
            </span>
        </Button>
    );
}
