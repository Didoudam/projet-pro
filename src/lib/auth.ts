import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthMiddleware } from "better-auth/api";
import { prisma } from "./prisma";
import { sendVerificationEmail } from "./email";

console.log("🔧 [Better Auth] Configuration:", {
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    hasSecret: !!process.env.BETTER_AUTH_SECRET,
});

export const auth = betterAuth({
	database: prismaAdapter(prisma, { provider: "mysql" }),
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    secret: process.env.BETTER_AUTH_SECRET,
    emailAndPassword:{
        enabled: true,
        requireEmailVerification: false,
        sendResetPassword: async () => {
            // Placeholder pour l'instant
        },
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url }: { user: { email: string }; url: string }) => {
            console.log("🔔 Envoi d'email de vérification à:", user.email);
            await sendVerificationEmail(user.email, url);
            console.log("✅ Email envoyé avec succès");
        },
    },
    hooks: {
        after: createAuthMiddleware(async (ctx) => {
            // Créer le Writer après vérification de l'email
            if (ctx.path === "/verify-email" && ctx.context.newSession?.user?.id) {
                const userId = ctx.context.newSession.user.id;

                // Vérifier si le Writer n'existe pas déjà
                const existingWriter = await prisma.writer.findFirst({
                    where: { userId },
                });

                if (!existingWriter) {
                    await prisma.writer.create({
                        data: { userId },
                    });
                    console.log("✅ Writer créé pour l'utilisateur:", userId);
                }
            }
        }),
    },
});

export type Session = typeof auth.$Infer.Session