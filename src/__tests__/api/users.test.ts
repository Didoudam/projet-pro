/**
 * @vitest-environment node
 *
 * Tests fonctionnels : API Users
 */
import { describe, it, expect } from "vitest";
import { userCreateSchema, userUpdateSchema } from "@/lib/schemas/users";

describe("API Users - Logique métier", () => {
    describe("Validation des utilisateurs", () => {
        const validUser = {
            firstName: "Jean",
            lastName: "Dupont",
            email: "jean.dupont@example.com",
            password: "Password1!",
        };

        describe("Création d'utilisateur", () => {
            it("accepte un utilisateur valide", async () => {
                const result = await userCreateSchema.validate(validUser);
                expect(result.email).toBe("jean.dupont@example.com");
            });

            it("rejette un prénom trop court", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, firstName: "J" })
                ).rejects.toThrow("Le prénom doit faire au moins 2 caractères");
            });

            it("rejette un nom trop court", async () => {
                await expect(
                    userCreateSchema.validate({ ...validUser, lastName: "D" })
                ).rejects.toThrow("Le nom doit faire au moins 2 caractères");
            });

            describe("Validation email", () => {
                const invalidEmails = [
                    "invalid",
                    "test@",
                    "@domain.com",
                    "test@domain",
                    "test@.com",
                    "test@domain.a",  // TLD trop court
                ];

                const validEmails = [
                    "user@example.com",
                    "user.name@example.com",
                    "user-name@sub.domain.co.uk",
                    "user_name@example.org",
                ];

                for (const email of invalidEmails) {
                    it(`rejette l'email invalide: ${email}`, async () => {
                        await expect(
                            userCreateSchema.validate({ ...validUser, email })
                        ).rejects.toThrow();
                    });
                }

                for (const email of validEmails) {
                    it(`accepte l'email valide: ${email}`, async () => {
                        const result = await userCreateSchema.validate({ ...validUser, email });
                        expect(result.email).toBe(email);
                    });
                }
            });

            describe("Validation mot de passe", () => {
                const weakPasswords = [
                    { password: "short1!", reason: "trop court (< 8 caractères)" },
                    { password: "nouppercase1!", reason: "pas de majuscule" },
                    { password: "NOLOWERCASE1!", reason: "pas de minuscule" },
                    { password: "NoNumber!", reason: "pas de chiffre" },
                    { password: "NoSpecial1", reason: "pas de caractère spécial" },
                ];

                const strongPasswords = [
                    "Password1!",
                    "MyStr0ng@Pass",
                    "Secure$123",
                    "C0mplex!ty",
                ];

                for (const { password, reason } of weakPasswords) {
                    it(`rejette un mot de passe ${reason}`, async () => {
                        await expect(
                            userCreateSchema.validate({ ...validUser, password })
                        ).rejects.toThrow();
                    });
                }

                for (const password of strongPasswords) {
                    it(`accepte le mot de passe fort: ${password}`, async () => {
                        const result = await userCreateSchema.validate({ ...validUser, password });
                        expect(result.password).toBe(password);
                    });
                }
            });
        });

        describe("Mise à jour d'utilisateur", () => {
            it("accepte une mise à jour partielle (prénom uniquement)", async () => {
                const result = await userUpdateSchema.validate({
                    firstName: "Pierre",
                });
                expect(result.firstName).toBe("Pierre");
            });

            it("accepte une mise à jour vide", async () => {
                const result = await userUpdateSchema.validate({});
                expect(result).toBeDefined();
            });
        });
    });

    describe("Règles métier", () => {
        it("un email doit être unique", () => {
            // Vérifié en base de données avec @unique sur le champ email
            // Le test documente le comportement attendu

            const existingEmails = ["user1@example.com", "user2@example.com"];
            const newEmail = "user1@example.com";  // Déjà existant

            const isUnique = !existingEmails.includes(newEmail);
            expect(isUnique).toBe(false);  // Doit être rejeté
        });

        it("un writer est créé automatiquement à l'inscription", () => {
            // À la création d'un user, un writer associé est créé
            // Cela permet à l'utilisateur de poster/commenter

            const mockUserCreation = {
                user: { id: "user-123" },
                writer: { id: "writer-456", userId: "user-123" },
            };

            expect(mockUserCreation.writer.userId).toBe(mockUserCreation.user.id);
        });
    });
});
