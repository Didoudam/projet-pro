import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CompanyEditForm } from "@/features/companies/components/CompanyEditForm";
import { DeleteCompanyButton } from "@/features/companies/components/DeleteCompanyButton";
import Link from "next/link";

export default async function CompanyEditPage({
    params,
}: {
    params: Promise<{ companyId: string }>;
}) {
    const { companyId } = await params;

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/auth?tab=signin");
    }

    // Vérifier que l'utilisateur est admin de cette entreprise
    const userAdmin = await prisma.companyAdmin.findFirst({
        where: {
            companyId,
            userId: session.user.id,
        },
    });

    if (!userAdmin) {
        redirect(`/companies/${companyId}`);
    }

    // Récupérer l'entreprise
    const company = await prisma.company.findUnique({
        where: { id: companyId },
        select: {
            id: true,
            name: true,
            activity: true,
            image: true,
            description: true,
        },
    });

    if (!company) {
        redirect("/companies");
    }

    const isSuperAdmin = userAdmin.role === "SUPER_ADMIN";

    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <Link
                    href={`/companies/${companyId}`}
                    className="text-sm text-muted-foreground hover:text-foreground font-mono uppercase tracking-wider mb-4 inline-block"
                >
                    &larr; Retour au profil
                </Link>
                <h1 className="text-3xl font-bold font-mono uppercase tracking-wider border-b-4 border-black inline-block">
                    Modifier l&apos;entreprise
                </h1>
            </div>

            <div className="space-y-8">
                {/* Formulaire de modification */}
                <CompanyEditForm company={company} />

                {/* Zone de suppression - uniquement pour SUPER_ADMIN */}
                {isSuperAdmin && (
                    <DeleteCompanyButton companyId={companyId} companyName={company.name} />
                )}
            </div>
        </div>
    );
}
