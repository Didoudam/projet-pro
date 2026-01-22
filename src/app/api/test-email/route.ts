import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/email";

export async function GET() {
    try {
        await sendVerificationEmail(
            "test@example.com",
            "http://localhost:3000/verify?token=test123"
        );
        return NextResponse.json({ message: "Email envoyé !" });
    } catch (error) {
        console.error("Erreur envoi email:", error);
        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}
