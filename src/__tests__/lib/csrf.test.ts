/**
 * @vitest-environment node
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { generateCsrfToken, verifyCsrfToken, validateCsrf } from "@/lib/csrf";
import { NextRequest } from "next/server";

describe("CSRF Module", () => {
    describe("generateCsrfToken", () => {
        it("génère un token avec le bon format (timestamp.random.signature)", () => {
            const token = generateCsrfToken();
            const parts = token.split(".");

            expect(parts).toHaveLength(3);
            expect(parts[0]).toMatch(/^\d+$/); // timestamp
            expect(parts[1]).toMatch(/^[a-f0-9]{64}$/); // 32 bytes hex
            expect(parts[2]).toMatch(/^[a-f0-9]{64}$/); // sha256 hex
        });

        it("génère des tokens uniques à chaque appel", () => {
            const token1 = generateCsrfToken();
            const token2 = generateCsrfToken();

            expect(token1).not.toBe(token2);
        });
    });

    describe("verifyCsrfToken", () => {
        it("valide un token correctement généré", () => {
            const token = generateCsrfToken();
            expect(verifyCsrfToken(token)).toBe(true);
        });

        it("rejette un token vide", () => {
            expect(verifyCsrfToken("")).toBe(false);
        });

        it("rejette un token mal formé", () => {
            expect(verifyCsrfToken("invalid")).toBe(false);
            expect(verifyCsrfToken("only.two")).toBe(false);
            expect(verifyCsrfToken("one.two.three.four")).toBe(false);
        });

        it("rejette un token avec une signature invalide", () => {
            const token = generateCsrfToken();
            const parts = token.split(".");
            const tamperedToken = `${parts[0]}.${parts[1]}.${"a".repeat(64)}`;

            expect(verifyCsrfToken(tamperedToken)).toBe(false);
        });

        it("rejette un token expiré", () => {
            // Mock Date.now pour simuler un token expiré
            const realDateNow = Date.now;
            const pastTime = Date.now() - 2 * 60 * 60 * 1000; // 2 heures dans le passé

            vi.spyOn(Date, "now").mockReturnValueOnce(pastTime);
            const expiredToken = generateCsrfToken();

            vi.spyOn(Date, "now").mockRestore();

            expect(verifyCsrfToken(expiredToken)).toBe(false);
        });

        it("rejette un token avec un timestamp modifié", () => {
            const token = generateCsrfToken();
            const parts = token.split(".");
            const tamperedToken = `9999999999999.${parts[1]}.${parts[2]}`;

            expect(verifyCsrfToken(tamperedToken)).toBe(false);
        });
    });

    describe("validateCsrf", () => {
        const createMockRequest = (options: {
            method: string;
            url: string;
            cookieToken?: string;
            headerToken?: string;
        }): NextRequest => {
            const headers = new Headers();
            if (options.headerToken) {
                headers.set("x-csrf-token", options.headerToken);
            }

            const request = new NextRequest(options.url, {
                method: options.method,
                headers,
            });

            if (options.cookieToken) {
                // Simuler le cookie via une nouvelle requête avec le header Cookie
                const cookieHeader = new Headers(headers);
                cookieHeader.set("cookie", `csrf_token=${options.cookieToken}`);
                return new NextRequest(options.url, {
                    method: options.method,
                    headers: cookieHeader,
                });
            }

            return request;
        };

        it("ignore les requêtes GET", () => {
            const request = createMockRequest({
                method: "GET",
                url: "http://localhost/api/posts",
            });

            expect(validateCsrf(request)).toBeNull();
        });

        it("ignore les requêtes vers /api/auth", () => {
            const request = createMockRequest({
                method: "POST",
                url: "http://localhost/api/auth/login",
            });

            expect(validateCsrf(request)).toBeNull();
        });

        it("ignore les requêtes vers /api/webhooks", () => {
            const request = createMockRequest({
                method: "POST",
                url: "http://localhost/api/webhooks/stripe",
            });

            expect(validateCsrf(request)).toBeNull();
        });

        it("rejette une requête POST sans token", () => {
            const request = createMockRequest({
                method: "POST",
                url: "http://localhost/api/posts",
            });

            const result = validateCsrf(request);
            expect(result).not.toBeNull();
            expect(result?.status).toBe(403);
        });

        it("rejette une requête avec tokens qui ne correspondent pas", () => {
            const token1 = generateCsrfToken();
            const token2 = generateCsrfToken();

            const request = createMockRequest({
                method: "POST",
                url: "http://localhost/api/posts",
                cookieToken: token1,
                headerToken: token2,
            });

            const result = validateCsrf(request);
            expect(result).not.toBeNull();
            expect(result?.status).toBe(403);
        });

        it("accepte une requête avec tokens valides et correspondants", () => {
            const token = generateCsrfToken();

            const request = createMockRequest({
                method: "POST",
                url: "http://localhost/api/posts",
                cookieToken: token,
                headerToken: token,
            });

            expect(validateCsrf(request)).toBeNull();
        });

        it("valide les requêtes PUT, PATCH, DELETE", () => {
            const methods = ["PUT", "PATCH", "DELETE"];

            for (const method of methods) {
                const request = createMockRequest({
                    method,
                    url: "http://localhost/api/posts/1",
                });

                const result = validateCsrf(request);
                expect(result).not.toBeNull();
                expect(result?.status).toBe(403);
            }
        });
    });
});
