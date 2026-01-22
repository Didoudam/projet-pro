import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { CompanyIcon } from "@/lib/icons";

export default async function MyCompaniesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/auth?tab=signin");
  }

  // Récupérer les entreprises administrées par l'utilisateur
  const companies = await prisma.company.findMany({
    where: {
      companyAdmin: {
        some: {
          userId: session.user.id,
        },
      },
    },
    include: {
      companyAdmin: {
        where: {
          userId: session.user.id,
        },
        select: {
          role: true,
        },
      },
      _count: {
        select: {
          Experience: true,
          formation: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 border-b-4 border-black inline-block">
          MES ENTREPRISES
        </h1>
        <p className="text-sm mt-4 text-muted-foreground">
          Gérez les entreprises dont vous êtes administrateur
        </p>
      </div>

      {companies.length === 0 ? (
        <div className="border-4 border-black p-12 text-center">
          <CompanyIcon className="text-6xl mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl font-bold mb-2">Aucune entreprise</h2>
          <p className="text-muted-foreground mb-6">
            Vous n&apos;administrez aucune entreprise pour le moment.
          </p>
          <Link
            href="/companies"
            className="inline-block px-6 py-3 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition-colors"
          >
            CRÉER UNE ENTREPRISE
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link
              key={company.id}
              href={`/companies/${company.id}`}
              className="group border-4 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
            >
              {/* Image */}
              <div className="mb-4">
                {company.image ? (
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-32 object-cover border-2 border-black"
                  />
                ) : (
                  <div className="w-full h-32 border-2 border-black bg-gray-100 flex items-center justify-center">
                    <CompanyIcon className="text-4xl text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Nom */}
              <h2 className="text-xl font-bold mb-2 truncate group-hover:underline">
                {company.name}
              </h2>

              {/* Activité */}
              {company.activity && (
                <p className="text-sm text-muted-foreground mb-4 truncate">
                  {company.activity}
                </p>
              )}

              {/* Description */}
              {company.description && (
                <p className="text-sm mb-4 line-clamp-2">{company.description}</p>
              )}

              {/* Rôle et stats */}
              <div className="border-t-2 border-black pt-4 mt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold bg-green-500 text-white px-2 py-1 border-2 border-black">
                    {company.companyAdmin[0]?.role.toUpperCase() || "ADMIN"}
                  </span>
                </div>

                <div className="flex gap-4 text-xs">
                  <div>
                    <span className="font-bold">{company._count.Experience}</span>{" "}
                    <span className="text-muted-foreground">Expériences</span>
                  </div>
                  <div>
                    <span className="font-bold">{company._count.formation}</span>{" "}
                    <span className="text-muted-foreground">Formations</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Bouton créer une entreprise si on en a déjà */}
      {companies.length > 0 && (
        <div className="mt-8 text-center">
          <Link
            href="/companies"
            className="inline-block px-6 py-3 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition-colors"
          >
            + CRÉER UNE NOUVELLE ENTREPRISE
          </Link>
        </div>
      )}
    </div>
  );
}
