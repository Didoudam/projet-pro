import { createTransport } from "nodemailer";

export const transporter = createTransport({
    host: process.env.SMTP_HOST || "localhost",
    port: parseInt(process.env.SMTP_PORT || "1025"),
    secure: false, // true pour 465, false pour les autres ports
    auth: process.env.SMTP_USER
        ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
          }
        : undefined,
});

export async function sendVerificationEmail(
    email: string,
    verificationUrl: string
) {
    await transporter.sendMail({
        from: process.env.SMTP_FROM || "noreply@projetpro.local",
        to: email,
        subject: "Vérifiez votre adresse email",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb;">Bienvenue sur ProjetPro !</h2>
                <p>Cliquez sur le lien ci-dessous pour vérifier votre adresse email :</p>
                <a href="${verificationUrl}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 8px; margin: 16px 0;">
                    Vérifier mon email
                </a>
                <p style="color: #666; font-size: 14px;">
                    Si vous n'avez pas créé de compte, vous pouvez ignorer cet email.
                </p>
                <p style="color: #999; font-size: 12px; margin-top: 32px;">
                    Ce lien expire dans 24 heures.
                </p>
            </div>
        `,
        text: `Bienvenue sur ProjetPro ! Cliquez sur ce lien pour vérifier votre email : ${verificationUrl}`,
    });
}

export async function sendChangeEmailVerification(
    email: string,
    verificationUrl: string
) {
    await transporter.sendMail({
        from: process.env.SMTP_FROM || "noreply@projetpro.local",
        to: email,
        subject: "Confirmez votre nouvelle adresse email",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb;">Changement d'adresse email</h2>
                <p>Vous avez demandé à changer votre adresse email sur ProjetPro.</p>
                <p>Cliquez sur le lien ci-dessous pour confirmer votre nouvelle adresse :</p>
                <a href="${verificationUrl}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 8px; margin: 16px 0;">
                    Confirmer le nouvel email
                </a>
                <p style="color: #666; font-size: 14px;">
                    Si vous n'avez pas demandé ce changement, vous pouvez ignorer cet email.
                </p>
                <p style="color: #999; font-size: 12px; margin-top: 32px;">
                    Ce lien expire dans 24 heures.
                </p>
            </div>
        `,
        text: `Confirmez votre nouvelle adresse email sur ProjetPro : ${verificationUrl}`,
    });
}
