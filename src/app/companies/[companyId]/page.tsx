import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { CompanyProfile } from "@/features/companies/components/CompanyProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type PageProps = {
    params: Promise<{ companyId: string }>;
};

const writerSelect = {
    user: {
        select: {
            id: true,
            name: true,
            image: true,
            firstName: true,
            lastName: true,
        },
    },
    company: {
        select: {
            id: true,
            name: true,
            image: true,
        },
    },
};

export default async function CompanyProfilePage({ params }: PageProps) {
    const { companyId } = await params;

    // Vérifier l'utilisateur connecté
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // Vérifier si l'utilisateur est admin de cette entreprise
    const isAdmin = session?.user
        ? await prisma.companyAdmin.findFirst({
              where: {
                  companyId,
                  userId: session.user.id,
              },
          })
        : null;

    const company = await prisma.company.findUnique({
        where: { id: companyId },
        include: {
            // Ne charger les admins que si l'utilisateur est admin
            ...(isAdmin
                ? {
                      companyAdmin: {
                          include: {
                              user: {
                                  select: {
                                      id: true,
                                      name: true,
                                      image: true,
                                      firstName: true,
                                      lastName: true,
                                  },
                              },
                          },
                      },
                  }
                : {}),
            writer: {
                select: {
                    id: true,
                },
            },
        },
    });

    // Récupérer les employés actuels (expériences sans endDate)
    const currentEmployees = await prisma.experience.findMany({
        where: {
            companyId,
            endDate: null, // Employés actuels
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                    firstName: true,
                    lastName: true,
                },
            },
        },
        orderBy: {
            startDate: "desc",
        },
    });

    if (!company) {
        notFound();
    }

    // Récupérer les posts de l'entreprise
    const posts = company.writer
        ? await prisma.post.findMany({
              where: { writerId: company.writer.id },
              orderBy: { createdAt: "desc" },
              take: 10,
              include: {
                  writer: {
                      include: writerSelect,
                  },
                  media: {
                      select: {
                          id: true,
                          url: true,
                          altText: true,
                          type: true,
                      },
                  },
                  Comment: {
                      where: {
                          commentId: null,
                      },
                      include: {
                          writer: {
                              include: writerSelect,
                          },
                          Vote: true,
                          replies: {
                              include: {
                                  writer: {
                                      include: writerSelect,
                                  },
                                  Vote: true,
                              },
                              orderBy: { createdAt: "asc" },
                          },
                      },
                      orderBy: { createdAt: "asc" },
                  },
                  Vote: true,
              },
          })
        : [];

    return (
        <CompanyProfile
            company={company}
            posts={posts}
            isAdmin={!!isAdmin}
            currentEmployees={currentEmployees}
        />
    );
}
