import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { getCsrfToken, getCsrfHeaders } from "@/hooks/useCsrf";

describe("useCsrf Hook", () => {
    beforeEach(() => {
        // Reset document.cookie
        Object.defineProperty(document, "cookie", {
            writable: true,
            value: "",
        });
    });

    describe("getCsrfToken", () => {
        it("retourne null si pas de cookie", () => {
            expect(getCsrfToken()).toBeNull();
        });

        it("retourne le token CSRF si présent", () => {
            Object.defineProperty(document, "cookie", {
                writable: true,
                value: "csrf_token=abc123",
            });

            expect(getCsrfToken()).toBe("abc123");
        });

        it("trouve le token parmi plusieurs cookies", () => {
            Object.defineProperty(document, "cookie", {
                writable: true,
                value: "other=value; csrf_token=mytoken; another=test",
            });

            expect(getCsrfToken()).toBe("mytoken");
        });

        it("décode les valeurs URL-encoded", () => {
            Object.defineProperty(document, "cookie", {
                writable: true,
                value: "csrf_token=token%20with%20spaces",
            });

            expect(getCsrfToken()).toBe("token with spaces");
        });
    });

    describe("getCsrfHeaders", () => {
        it("retourne un objet vide si pas de token", () => {
            expect(getCsrfHeaders()).toEqual({});
        });

        it("retourne le header x-csrf-token si token présent", () => {
            Object.defineProperty(document, "cookie", {
                writable: true,
                value: "csrf_token=mytoken123",
            });

            expect(getCsrfHeaders()).toEqual({
                "x-csrf-token": "mytoken123",
            });
        });
    });
});
