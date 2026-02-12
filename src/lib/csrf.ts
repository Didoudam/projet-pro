import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const CSRF_SECRET = process.env.CSRF_SECRET || process.env.BETTER_AUTH_SECRET || "fallback-secret-change-me";
const CSRF_COOKIE_NAME = "csrf_token";
const CSRF_HEADER_NAME = "x-csrf-token";
const TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 heure

/**
 * Génère un token CSRF signé avec timestamp
 */
export function generateCsrfToken(): string {
    const timestamp = Date.now().toString();
    const randomBytes = crypto.randomBytes(32).toString("hex");
    const data = `${timestamp}.${randomBytes}`;
    const signature = crypto
        .createHmac("sha256", CSRF_SECRET)
        .update(data)
        .digest("hex");
    return `${data}.${signature}`;
}

/**
 * Vérifie un token CSRF
 */
export function verifyCsrfToken(token: string): boolean {
    if (!token) return false;

    const parts = token.split(".");
    if (parts.length !== 3) return false;

    const [timestamp, randomBytes, signature] = parts;
    const data = `${timestamp}.${randomBytes}`;

    // Vérifier la signature
    const expectedSignature = crypto
        .createHmac("sha256", CSRF_SECRET)
        .update(data)
        .digest("hex");

    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
        return false;
    }

    // Vérifier l'expiration
    const tokenTime = parseInt(timestamp, 10);
    if (isNaN(tokenTime) || Date.now() - tokenTime > TOKEN_EXPIRY_MS) {
        return false;
    }

    return true;
}

/**
 * Méthodes HTTP qui nécessitent une vérification CSRF
 */
const UNSAFE_METHODS = ["POST", "PUT", "PATCH", "DELETE"];

/**
 * Routes exclues de la vérification CSRF (auth, webhooks, etc.)
 */
const EXCLUDED_ROUTES = [
    "/api/auth", // Better Auth gère sa propre sécurité
    "/api/webhooks",
];

/**
 * Vérifie si une route est exclue de la protection CSRF
 */
function isExcludedRoute(pathname: string): boolean {
    return EXCLUDED_ROUTES.some((route) => pathname.startsWith(route));
}

/**
 * Middleware de validation CSRF pour les routes API
 * Utilise le pattern "Double Submit Cookie"
 */
export function validateCsrf(request: NextRequest): NextResponse | null {
    const method = request.method;
    const pathname = new URL(request.url).pathname;

    // Ignorer les méthodes sûres (GET, HEAD, OPTIONS)
    if (!UNSAFE_METHODS.includes(method)) {
        return null;
    }

    // Ignorer les routes exclues
    if (isExcludedRoute(pathname)) {
        return null;
    }

    // Récupérer le token du cookie
    const cookieToken = request.cookies.get(CSRF_COOKIE_NAME)?.value;

    // Récupérer le token du header
    const headerToken = request.headers.get(CSRF_HEADER_NAME);

    // Les deux tokens doivent exister et correspondre
    if (!cookieToken || !headerToken) {
        return NextResponse.json(
            { message: "Token CSRF manquant" },
            { status: 403 }
        );
    }

    if (cookieToken !== headerToken) {
        return NextResponse.json(
            { message: "Token CSRF invalide" },
            { status: 403 }
        );
    }

    // Vérifier la validité du token (signature + expiration)
    if (!verifyCsrfToken(cookieToken)) {
        return NextResponse.json(
            { message: "Token CSRF expiré ou invalide" },
            { status: 403 }
        );
    }

    return null; // Validation réussie
}

/**
 * Crée une réponse avec un nouveau cookie CSRF
 */
export function setCsrfCookie(response: NextResponse): NextResponse {
    const token = generateCsrfToken();

    response.cookies.set(CSRF_COOKIE_NAME, token, {
        httpOnly: false, // Le JS doit pouvoir lire le cookie
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60, // 1 heure
    });

    return response;
}

/**
 * Utilitaire pour wrapper une route API avec la protection CSRF
 */
export function withCsrf<T extends unknown[]>(
    handler: (request: NextRequest, ...args: T) => Promise<NextResponse>
) {
    return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
        const csrfError = validateCsrf(request);
        if (csrfError) {
            return csrfError;
        }
        return handler(request, ...args);
    };
}
