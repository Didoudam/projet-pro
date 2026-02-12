import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock de crypto pour Node.js
vi.mock("crypto", async () => {
    const actual = await vi.importActual<typeof import("crypto")>("crypto");
    return {
        ...actual,
        randomBytes: actual.randomBytes,
        createHmac: actual.createHmac,
    };
});

// Mock des variables d'environnement
process.env.CSRF_SECRET = "test-csrf-secret-for-testing";
process.env.BETTER_AUTH_SECRET = "test-auth-secret";
process.env.NODE_ENV = "test";
