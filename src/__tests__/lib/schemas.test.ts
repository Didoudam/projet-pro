import { describe, it, expect } from "vitest";
import { userCreateSchema } from "@/lib/schemas/users";
import { postCreateSchema } from "@/lib/schemas/posts";
import { commentCreateSchema } from "@/lib/schemas/comment";
import { companyCreateSchema } from "@/lib/schemas/companies";

describe("Schemas Yup", () => {
    describe("userCreateSchema", () => {
        const validUser = {
            firstName: "Jean",
            lastName: "Dupont",
            email: "jean.dupont@example.com",
            password: "Password1!",
        };

        it("valide un utilisateur correct", async () => {
            await expect(userCreateSchema.validate(validUser)).resolves.toBeDefined();
        });

        describe("firstName", () => {
            it("rejette un prénom trop court", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, firstName: "J" })
                ).rejects.toThrow("Le prénom doit faire au moins 2 caractères");
            });

            it("rejette un prénom manquant", async () => {
                const { firstName, ...userWithoutFirstName } = validUser;
                await expect(
                    userCreateSchema.validate(userWithoutFirstName)
                ).rejects.toThrow("Le prénom est requis");
            });
        });

        describe("lastName", () => {
            it("rejette un nom trop court", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, lastName: "D" })
                ).rejects.toThrow("Le nom doit faire au moins 2 caractères");
            });
        });

        describe("email", () => {
            it("rejette un email sans @", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, email: "invalid" })
                ).rejects.toThrow("Adresse email invalide");
            });

            it("rejette un email sans domaine valide", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, email: "test@" })
                ).rejects.toThrow("Adresse email invalide");
            });

            it("rejette un email avec TLD trop court", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, email: "test@domain.a" })
                ).rejects.toThrow("Adresse email invalide");
            });

            it("accepte un email valide", async () => {
                const validEmails = [
                    "user@example.com",
                    "user.name@example.com",
                    "user-name@example.co.uk",
                    "user_name@sub.domain.com",
                ];

                for (const email of validEmails) {
                    await expect(
                        userCreateSchema.validate({ ...validUser, email })
                    ).resolves.toBeDefined();
                }
            });
        });

        describe("password", () => {
            it("rejette un mot de passe trop court", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, password: "Pass1!" })
                ).rejects.toThrow("Le mot de passe doit faire au moins 8 caractères");
            });

            it("rejette un mot de passe sans minuscule", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, password: "PASSWORD1!" })
                ).rejects.toThrow("Le mot de passe doit contenir au moins une minuscule");
            });

            it("rejette un mot de passe sans majuscule", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, password: "password1!" })
                ).rejects.toThrow("Le mot de passe doit contenir au moins une majuscule");
            });

            it("rejette un mot de passe sans chiffre", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, password: "Password!!" })
                ).rejects.toThrow("Le mot de passe doit contenir au moins un chiffre");
            });

            it("rejette un mot de passe sans caractère spécial", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, password: "Password12" })
                ).rejects.toThrow("Le mot de passe doit contenir au moins un caractère spécial");
            });

            it("accepte un mot de passe valide", async () => {
                const validPasswords = [
                    "Password1!",
                    "MyP@ssw0rd",
                    "Secure$123",
                    "Test1234&",
                ];

                for (const password of validPasswords) {
                    await expect(
                        userCreateSchema.validate({ ...validUser, password })
                    ).resolves.toBeDefined();
                }
            });
        });
    });

    describe("postCreateSchema", () => {
        it("valide un post correct", async () => {
            await expect(
                postCreateSchema.validate({ content: "Ceci est un post valide" })
            ).resolves.toBeDefined();
        });

        it("rejette un contenu vide", async () => {
            await expect(
                postCreateSchema.validate({ content: "" })
            ).rejects.toThrow("Le contenu ne peut pas être vide");
        });

        it("rejette un contenu trop long", async () => {
            const longContent = "a".repeat(5001);
            await expect(
                postCreateSchema.validate({ content: longContent })
            ).rejects.toThrow("Le contenu ne peut pas dépasser 5000 caractères");
        });

        it("accepte un contenu à la limite (5000 caractères)", async () => {
            const maxContent = "a".repeat(5000);
            await expect(
                postCreateSchema.validate({ content: maxContent })
            ).resolves.toBeDefined();
        });
    });

    describe("commentCreateSchema", () => {
        const validComment = {
            content: "Ceci est un commentaire",
            writerId: "writer-123",
        };

        it("valide un commentaire correct", async () => {
            await expect(
                commentCreateSchema.validate(validComment)
            ).resolves.toBeDefined();
        });

        it("rejette un contenu trop court", async () => {
            await expect(
                commentCreateSchema.validate({ ...validComment, content: "abc" })
            ).rejects.toThrow("Le commentaire doit faire au moins 4 caractères");
        });

        it("rejette un commentaire sans writerId", async () => {
            await expect(
                commentCreateSchema.validate({ content: "Un commentaire" })
            ).rejects.toThrow("vous devez etre connecté pour créer un commentaire");
        });
    });

    describe("companyCreateSchema", () => {
        const validCompany = {
            name: "Ma Société",
        };

        it("valide une entreprise correcte", async () => {
            await expect(
                companyCreateSchema.validate(validCompany)
            ).resolves.toBeDefined();
        });

        it("rejette un nom trop court", async () => {
            await expect(
                companyCreateSchema.validate({ name: "ABC" })
            ).rejects.toThrow("Le nom doit faire au moins 4 caractères");
        });

        it("accepte une URL d'image valide", async () => {
            await expect(
                companyCreateSchema.validate({
                    ...validCompany,
                    image: "https://example.com/logo.png",
                })
            ).resolves.toBeDefined();
        });

        it("rejette une URL d'image invalide", async () => {
            await expect(
                companyCreateSchema.validate({
                    ...validCompany,
                    image: "not-a-url",
                })
            ).rejects.toThrow();
        });
    });
});
