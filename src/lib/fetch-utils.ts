// utils/fetchJson.ts

/**
 * Interface pour les réponses d'erreur de l'API
 */
interface ApiErrorResponse {
    message?: string;
    error?: string;
    errors?: Record<string, string>;
    details?: string[];
    code?: string;
}

/**
 * Classe d'erreur personnalisée pour les erreurs d'API
 */
export class APIError extends Error {
    public status: number;
    public errors?: Record<string, string>;
    public details?: string[];
    public code?: string;

    constructor(message: string, status: number, errors?: Record<string, string>, details?: string[], code?: string) {
        super(message);
        this.name = "APIError";
        this.status = status;
        this.errors = errors;
        this.details = details;
        this.code = code;
    }
}

/**
 * Parse une réponse d'erreur de l'API et retourne une APIError structurée
 */
function parseApiError(json: ApiErrorResponse, status: number): APIError {
    const message = json.message || json.error || "Erreur de l'API";
    const errors = json.errors;
    const details = json.details;
    const code = json.code;

    return new APIError(message, status, errors, details, code);
}

export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
    const defaultHeaders: HeadersInit = {
        Accept: "application/json",
    };

    const response = await fetch(url, {
        ...init,
        headers: {
            ...defaultHeaders,
            ...(init?.headers || {}),
        },
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type") ?? "";
        if (contentType.includes("application/json")) {
            const json = (await response.json()) as ApiErrorResponse;
            throw parseApiError(json, response.status);
        } else {
            const errorText = await response.text();
            throw new APIError(`${response.statusText} - ${errorText}`, response.status);
        }
    }

    return (await response.json()) as T;
}

export async function fetchText(url: string, init?: RequestInit): Promise<string> {
    const response = await fetch(url, {
        headers: {
            Accept: "text/plain",
            ...(init?.headers || {}),
        },
        ...init,
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type") ?? "";
        if (contentType.includes("application/json")) {
            const json = (await response.json()) as ApiErrorResponse;
            throw parseApiError(json, response.status);
        } else {
            const errorText = await response.text();
            throw new APIError(`${response.statusText} - ${errorText}`, response.status);
        }
    }

    return await response.text();
}

// utils/postJson.ts
export async function postJson<T>(url: string, data?: unknown, init?: RequestInit, throwError = true): Promise<T> {
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(init?.headers || {}),
    };

    const response = await fetch(url, {
        method: "POST",
        body: data !== undefined ? JSON.stringify(data) : undefined,
        ...init,
        headers, // remplace les headers après `init` pour garantir fusion propre
    });
    const contentType = response.headers.get("content-type") ?? "";

    if (!response.ok || (response.status !== 204 && !contentType.includes("application/json"))) {
        if (throwError) {
            if (contentType.includes("application/json")) {
                const json = (await response.json()) as ApiErrorResponse;
                throw parseApiError(json, response.status);
            } else {
                const errorText = await response.text();
                throw new APIError(errorText, response.status);
            }
        }
    }

    return response.status === 204 ? ({} as T) : ((await response.json()) as T);
}

export async function putJson<T>(url: string, data?: unknown, init?: RequestInit, throwError = true): Promise<T> {
    return postJson<T>(url, data, init ? { ...init, method: "PUT" } : { method: "PUT" }, throwError);
}

export async function patchJson<T>(url: string, data?: unknown, init?: RequestInit, throwError = true): Promise<T> {
    return postJson<T>(url, data, init ? { ...init, method: "PATCH" } : { method: "PATCH" }, throwError);
}

export async function deleteJson<T>(url: string, init?: RequestInit, throwError = true): Promise<T> {
    return postJson<T>(url, undefined, init ? { ...init, method: "DELETE" } : { method: "DELETE" }, throwError);
}
