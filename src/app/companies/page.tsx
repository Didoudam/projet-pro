import { prisma } from "@/lib/prisma";
import { CompanyList } from "@/features/companies/components/CompanyList";

export default async function CompaniesPage() {
    const companies = await prisma.company.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            writer: {
                select: {
                    id: true,
                },
            },
        },
    });

    return <CompanyList companies={companies} />;
}
