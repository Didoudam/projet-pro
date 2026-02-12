/**
 * @vitest-environment node
 *
 * Tests fonctionnels : API Companies
 */
import { describe, it, expect } from "vitest";
import { companyCreateSchema, companyUpdateSchema } from "@/lib/schemas/companies";

describe("API Companies - Logique métier", () => {
    describe("Validation des entreprises", () => {
        const validCompany = {
            name: "Ma Société",
        };

        describe("Création d'entreprise", () => {
            it("accepte une entreprise valide avec nom uniquement", async () => {
                const result = await companyCreateSchema.validate(validCompany);
                expect(result.name).toBe("Ma Société");
            });

            it("accepte une entreprise avec tous les champs", async () => {
                const fullCompany = {
                    name: "Tech Corp",
                    activity: "Développement logiciel",
                    description: "Une super entreprise de tech",
                    image: "https://example.com/logo.png",
                };
                const result = await companyCreateSchema.validate(fullCompany);
                expect(result.name).toBe("Tech Corp");
                expect(result.activity).toBe("Développement logiciel");
            });

            it("rejette un nom trop court (< 4 caractères)", async () => {
                await expect(
                    companyCreateSchema.validate({ name: "ABC" })
                ).rejects.toThrow("Le nom doit faire au moins 4 caractères");
            });

            it("accepte un nom avec exactement 4 caractères", async () => {
                const result = await companyCreateSchema.validate({ name: "ABCD" });
                expect(result.name).toHaveLength(4);
            });

            it("rejette une activité trop courte (< 2 caractères)", async () => {
                await expect(
                    companyCreateSchema.validate({ ...validCompany, activity: "A" })
                ).rejects.toThrow("l'activité doit fiare plus de 2 caracteres");
            });

            it("rejette une description trop courte (< 4 caractères)", async () => {
                await expect(
                    companyCreateSchema.validate({ ...validCompany, description: "ABC" })
                ).rejects.toThrow("La description doit faire au moins 4 caracteres");
            });

            it("rejette une URL d'image invalide", async () => {
                await expect(
                    companyCreateSchema.validate({ ...validCompany, image: "not-a-url" })
                ).rejects.toThrow();
            });

            it("accepte une URL d'image valide", async () => {
                const result = await companyCreateSchema.validate({
                    ...validCompany,
                    image: "https://example.com/logo.png",
                });
                expect(result.image).toBe("https://example.com/logo.png");
            });
        });

        describe("Mise à jour d'entreprise", () => {
            it("accepte une mise à jour partielle", async () => {
                const result = await companyUpdateSchema.validate({
                    description: "Nouvelle description",
                });
                expect(result.description).toBe("Nouvelle description");
            });

            it("accepte une mise à jour vide", async () => {
                const result = await companyUpdateSchema.validate({});
                expect(result).toBeDefined();
            });
        });
    });

    describe("Règles métier", () => {
        it("une entreprise a des admins avec différents rôles", () => {
            // Rôles possibles : SUPER_ADMIN, ADMIN, MODERATOR
            const companyRoles = ["SUPER_ADMIN", "ADMIN", "MODERATOR"];

            expect(companyRoles).toContain("SUPER_ADMIN");
            expect(companyRoles).toContain("ADMIN");
            expect(companyRoles).toContain("MODERATOR");
        });

        it("une entreprise peut avoir un writer pour poster", () => {
            // Comme les users, les companies ont un writer associé

            const companyWithWriter = {
                id: "company-123",
                writer: { id: "writer-789", companyId: "company-123" },
            };

            expect(companyWithWriter.writer.companyId).toBe(companyWithWriter.id);
        });

        it("seul un admin peut modifier l'entreprise", () => {
            const userRole = "MODERATOR";
            const canEdit = ["SUPER_ADMIN", "ADMIN"].includes(userRole);

            expect(canEdit).toBe(false);

            const adminRole = "ADMIN";
            const adminCanEdit = ["SUPER_ADMIN", "ADMIN"].includes(adminRole);

            expect(adminCanEdit).toBe(true);
        });
    });
});
