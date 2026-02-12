import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CompanyAdminManager } from "@/features/companies/components/CompanyAdminManager";
import { ExperienceValidator } from "@/features/companies/components/ExperienceValidator";
import { DeleteCompanyButton } from "@/features/companies/components/DeleteCompanyButton";

export default async function CompanyManagePage({
  params,
}: {
  params: Promise<{ companyId: string }>;
}) {
  const { companyId: id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/auth?tab=signin");
  }

  // Vérifier que l'utilisateur est admin de cette entreprise
  const userAdmin = await prisma.companyAdmin.findFirst({
    where: {
      companyId: id,
      userId: session.user.id,
    },
  });

  if (!userAdmin) {
    redirect(`/companies/${id}`);
  }

  // Récupérer l'entreprise complète
  const company = await prisma.company.findUnique({
    where: { id },
    include: {
      companyAdmin: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!company) {
    redirect("/companies");
  }

  // Récupérer les expériences non validées
  const pendingExperiences = await prisma.experience.findMany({
    where: {
      companyId: id,
      validated: false,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
    orderBy: { startDate: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 border-b-4 border-black inline-block">
          GESTION - {company.name}
        </h1>
        <p className="text-sm mt-4 text-muted-foreground">
          Gérez les administrateurs et validez les expériences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gestion des administrateurs */}
        <CompanyAdminManager
          companyId={id}
          admins={company.companyAdmin}
          currentUserRole={userAdmin.role}
        />

        {/* Validation des expériences */}
        <ExperienceValidator
          companyId={id}
          experiences={pendingExperiences}
          userRole={userAdmin.role}
        />
      </div>

      {/* Zone de suppression - uniquement pour SUPER_ADMIN */}
      {userAdmin.role === "SUPER_ADMIN" && (
        <div className="mt-8">
          <DeleteCompanyButton companyId={id} companyName={company.name} />
        </div>
      )}
    </div>
  );
}
