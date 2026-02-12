import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { generateCsrfToken } from "@/lib/csrf";

const CSRF_COOKIE_NAME = "csrf_token";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Générer un token CSRF si absent ou pour les pages HTML
    const existingToken = request.cookies.get(CSRF_COOKIE_NAME)?.value;
    const isPageRequest = request.headers.get("accept")?.includes("text/html");

    // Renouveler le token pour les requêtes de page ou si absent
    if (!existingToken || isPageRequest) {
        const token = generateCsrfToken();

        response.cookies.set(CSRF_COOKIE_NAME, token, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60,
        });
    }

    return response;
}

// Appliquer le middleware à toutes les routes sauf les fichiers statiques
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - public files (images, etc.)
         */
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
    ],
};
