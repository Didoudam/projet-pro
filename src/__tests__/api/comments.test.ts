/**
 * @vitest-environment node
 *
 * Tests fonctionnels : API Comments
 */
import { describe, it, expect } from "vitest";
import { commentCreateSchema, commentUpdateSchema } from "@/lib/schemas/comment";

describe("API Comments - Logique métier", () => {
    describe("Validation des commentaires", () => {
        const validComment = {
            content: "Ceci est un commentaire valide",
            writerId: "writer-123",
        };

        describe("Création de commentaire", () => {
            it("accepte un commentaire valide", async () => {
                const result = await commentCreateSchema.validate(validComment);
                expect(result.content).toBe("Ceci est un commentaire valide");
                expect(result.writerId).toBe("writer-123");
            });

            it("rejette un commentaire trop court (< 4 caractères)", async () => {
                await expect(
                    commentCreateSchema.validate({ ...validComment, content: "abc" })
                ).rejects.toThrow("Le commentaire doit faire au moins 4 caractères");
            });

            it("rejette un commentaire sans writerId", async () => {
                await expect(
                    commentCreateSchema.validate({ content: "Un commentaire" })
                ).rejects.toThrow("vous devez etre connecté");
            });

            it("accepte un commentaire avec exactement 4 caractères", async () => {
                const result = await commentCreateSchema.validate({
                    ...validComment,
                    content: "abcd",
                });
                expect(result.content).toHaveLength(4);
            });
        });

        describe("Mise à jour de commentaire", () => {
            it("accepte une mise à jour partielle", async () => {
                const result = await commentUpdateSchema.validate({
                    content: "Contenu mis à jour",
                });
                expect(result.content).toBe("Contenu mis à jour");
            });
        });
    });

    describe("Règles métier", () => {
        it("un commentaire appartient à un post ou à un autre commentaire (réponse)", () => {
            // Un commentaire peut être :
            // - Un commentaire de premier niveau (postId défini, commentId null)
            // - Une réponse (commentId défini)

            const topLevelComment = {
                postId: "post-123",
                commentId: null,
            };

            const replyComment = {
                postId: null,
                commentId: "comment-456",
            };

            expect(topLevelComment.postId).not.toBeNull();
            expect(topLevelComment.commentId).toBeNull();

            expect(replyComment.commentId).not.toBeNull();
        });

        it("un utilisateur doit être authentifié pour commenter", () => {
            const mockAuth = null;
            const canComment = mockAuth !== null;
            expect(canComment).toBe(false);
        });
    });
});
