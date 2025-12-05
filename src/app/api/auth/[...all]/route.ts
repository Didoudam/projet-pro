import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";

const handlers = toNextJsHandler(auth);

console.log("🔍 [Auth Route] Handlers exportés:", {
    hasGET: !!handlers.GET,
    hasPOST: !!handlers.POST,
    allKeys: Object.keys(handlers),
});

export async function GET(request: NextRequest) {
    console.log("📥 [Auth Route] GET appelé:", request.url);
    return handlers.GET(request);
}

export async function POST(request: NextRequest) {
    console.log("📥 [Auth Route] POST appelé:", request.url);
    console.log("📥 [Auth Route] Content-Type:", request.headers.get("content-type"));
    return handlers.POST(request);
}