"use client";

const CSRF_COOKIE_NAME = "csrf_token";

/**
 * Récupère le token CSRF depuis les cookies
 */
export function getCsrfToken(): string | null {
    if (typeof document === "undefined") {
        return null;
    }

    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === CSRF_COOKIE_NAME) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

/**
 * Retourne les headers nécessaires pour les requêtes CSRF
 */
export function getCsrfHeaders(): Record<string, string> {
    const token = getCsrfToken();
    if (!token) {
        return {};
    }
    return {
        "x-csrf-token": token,
    };
}
