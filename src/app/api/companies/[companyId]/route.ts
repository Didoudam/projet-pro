import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/auth-helpers";
import { companyUpdateSchema } from "@/lib/schemas/companies";

interface RouteParams {
    params: Promise<{ companyId: string }>;
}

// GET /api/company/[companyId]
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        // if (!session?.session?.activeOrganizationId) {
        //     return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        // }
        //params.then((userId) => console.log(userId)).catch(()=> console.error("eeeeee"));
        const { companyId } = await params;
        const company = await prisma.company.findFirst({
            select: {
                id: true,
                name: true,
            },
            where: {
                id: companyId,
            },
        });

        if (!company) {
            return NextResponse.json(
                { message: "utilisateur non trouvé" },
                { status: 404 }
            );
        }

        return NextResponse.json(company);
    } catch (error) {
        console.error("error:", error);
        return NextResponse.json({ message: "erreur !!!" }, { status: 500 });
    }
}

// PUT /api/company/[companyId]
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        //Vérifier que l'user est identifié ici
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { companyId } = await params;

        const company = await prisma.company.findFirst({
            select: {
                id: true,
            },
            where: {
                id: companyId,
            },
        });

        if (!company) {
            return NextResponse.json(
                { message: "Entreprise non trouvé" },
                { status: 404 }
            );
        }

        const body = await request.json();

        // Validation des données
        const { ...validatedData } = await companyUpdateSchema.validate(
            body,
            {
                stripUnknown: true,
            }
        );

        const updatedCompany = await prisma.company.update({
            where: {
                id: companyId,
            },
            data: {
                ...validatedData,
            },
        });

        return NextResponse.json(updatedCompany);
    } catch (error) {
        console.log(error);
        if (error instanceof Error && error.name === "ValidationError") {
            console.log(error.message);
            return NextResponse.json(
                { message: "Données invalides", details: error.message },
                { status: 400 }
            );
        }

        console.error("Create alert error:", error);
        return NextResponse.json(
            { message: "Erreur lors de la création de l'alerte" },
            { status: 500 }
        );
    }
}

// DELETE /api/companies/[companyId]
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        const auth = await getAuthenticatedUser(request);
        if (auth instanceof NextResponse) {
            return auth;
        }

        const { companyId } = await params;

        // Vérifier que l'utilisateur est SUPER_ADMIN de cette entreprise
        const userAdmin = await prisma.companyAdmin.findFirst({
            where: {
                companyId,
                userId: auth.userId,
                role: "SUPER_ADMIN",
            },
        });

        if (!userAdmin) {
            return NextResponse.json(
                { message: "Seul le super administrateur peut supprimer l'entreprise" },
                { status: 403 }
            );
        }

        // Vérifier que l'entreprise existe
        const company = await prisma.company.findUnique({
            where: { id: companyId },
            include: {
                writer: true,
            },
        });

        if (!company) {
            return NextResponse.json(
                { message: "Entreprise non trouvée" },
                { status: 404 }
            );
        }

        // Supprimer dans l'ordre pour respecter les contraintes de clés étrangères
        // 1. Supprimer les WriterLinks associés au writer de l'entreprise
        if (company.writer) {
            await prisma.writerLink.deleteMany({
                where: { companyWriterId: company.writer.id },
            });

            // 2. Supprimer les votes sur les posts et commentaires de l'entreprise
            await prisma.vote.deleteMany({
                where: {
                    OR: [
                        { post: { writerId: company.writer.id } },
                        { comment: { writerId: company.writer.id } },
                    ],
                },
            });

            // 3. Supprimer les commentaires de l'entreprise
            await prisma.comment.deleteMany({
                where: { writerId: company.writer.id },
            });

            // 4. Supprimer les médias des posts de l'entreprise
            await prisma.media.deleteMany({
                where: { post: { writerId: company.writer.id } },
            });

            // 5. Supprimer les posts de l'entreprise
            await prisma.post.deleteMany({
                where: { writerId: company.writer.id },
            });

            // 6. Supprimer le writer de l'entreprise
            await prisma.writer.delete({
                where: { id: company.writer.id },
            });
        }

        // 7. Supprimer les admins de l'entreprise
        await prisma.companyAdmin.deleteMany({
            where: { companyId },
        });

        // 8. Supprimer les formations liées à l'entreprise
        await prisma.formation.deleteMany({
            where: { companyId },
        });

        // 9. Supprimer les expériences liées à l'entreprise
        await prisma.experience.deleteMany({
            where: { companyId },
        });

        // 10. Supprimer l'entreprise
        await prisma.company.delete({
            where: { id: companyId },
        });

        return NextResponse.json({ message: "Entreprise supprimée avec succès" });
    } catch (error) {
        console.error("Delete company error:", error);
        return NextResponse.json(
            { message: "Erreur lors de la suppression de l'entreprise" },
            { status: 500 }
        );
    }
}
