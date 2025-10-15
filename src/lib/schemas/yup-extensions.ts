import * as yup from "yup";

// Regex stricte : nom@domaine.tld avec TLD >= 2 lettres
const strictEmailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,}$/;

// Ajout d'une méthode personnalisée .strictEmail() sur yup.string()
yup.addMethod<yup.StringSchema>(yup.string, "strictEmail", function (message) {
    return this.matches(strictEmailRegex, {
        message: message ?? "Adresse email invalide",
        excludeEmptyString: true,
    });
});

// Pour que TypeScript reconnaisse strictEmail()
//c'est l'export
declare module "yup" {
    interface StringSchema {
        strictEmail(message?: string): this;
    }
}
