import { prisma } from "./prisma";
import {
  meiliClient,
  USERS_INDEX,
  COMPANIES_INDEX,
  UserSearchDocument,
  CompanySearchDocument,
} from "./meilisearch";

// Sync all users to Meilisearch
export async function syncUsersToMeilisearch() {
  if (!meiliClient) {
    console.warn("Meilisearch not configured, skipping sync");
    return 0;
  }

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        firstName: true,
        lastName: true,
        email: true,
        image: true,
        Experience: {
          select: {
            name: true,
            companyName: true,
            company: {
              select: {
                name: true,
              },
            },
          },
          orderBy: { startDate: "desc" },
          take: 1,
        },
      },
    });

    const documents: UserSearchDocument[] = users.map((user) => {
      const latestExperience = user.Experience[0];
      return {
        id: user.id,
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
        currentPosition: latestExperience?.name || null,
        currentCompany:
          latestExperience?.companyName ||
          latestExperience?.company?.name ||
          null,
      };
    });

    const index = meiliClient.index(USERS_INDEX);
    await index.addDocuments(documents, { primaryKey: "id" });

    console.log(`Synced ${documents.length} users to Meilisearch`);
    return documents.length;
  } catch (error) {
    console.error("Error syncing users to Meilisearch:", error);
    throw error;
  }
}

// Sync all companies to Meilisearch
export async function syncCompaniesToMeilisearch() {
  if (!meiliClient) {
    console.warn("Meilisearch not configured, skipping sync");
    return 0;
  }

  try {
    const companies = await prisma.company.findMany({
      select: {
        id: true,
        name: true,
        activity: true,
        image: true,
        description: true,
      },
    });

    const documents: CompanySearchDocument[] = companies.map((company) => ({
      id: company.id,
      name: company.name,
      activity: company.activity,
      image: company.image,
      description: company.description,
    }));

    const index = meiliClient.index(COMPANIES_INDEX);
    await index.addDocuments(documents, { primaryKey: "id" });

    console.log(`Synced ${documents.length} companies to Meilisearch`);
    return documents.length;
  } catch (error) {
    console.error("Error syncing companies to Meilisearch:", error);
    throw error;
  }
}

// Sync a single user to Meilisearch
export async function syncUserToMeilisearch(userId: string) {
  if (!meiliClient) {
    console.warn("Meilisearch not configured, skipping sync");
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        firstName: true,
        lastName: true,
        email: true,
        image: true,
        Experience: {
          select: {
            name: true,
            companyName: true,
            company: {
              select: {
                name: true,
              },
            },
          },
          orderBy: { startDate: "desc" },
          take: 1,
        },
      },
    });

    if (!user) {
      throw new Error(`User ${userId} not found`);
    }

    const latestExperience = user.Experience[0];
    const document: UserSearchDocument = {
      id: user.id,
      name: user.name,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      image: user.image,
      currentPosition: latestExperience?.name || null,
      currentCompany:
        latestExperience?.companyName || latestExperience?.company?.name || null,
    };

    const index = meiliClient.index(USERS_INDEX);
    await index.addDocuments([document], { primaryKey: "id" });

    console.log(`Synced user ${userId} to Meilisearch`);
  } catch (error) {
    console.error(`Error syncing user ${userId} to Meilisearch:`, error);
    throw error;
  }
}

// Sync a single company to Meilisearch
export async function syncCompanyToMeilisearch(companyId: string) {
  if (!meiliClient) {
    console.warn("Meilisearch not configured, skipping sync");
    return;
  }

  try {
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
      throw new Error(`Company ${companyId} not found`);
    }

    const document: CompanySearchDocument = {
      id: company.id,
      name: company.name,
      activity: company.activity,
      image: company.image,
      description: company.description,
    };

    const index = meiliClient.index(COMPANIES_INDEX);
    await index.addDocuments([document], { primaryKey: "id" });

    console.log(`Synced company ${companyId} to Meilisearch`);
  } catch (error) {
    console.error(`Error syncing company ${companyId} to Meilisearch:`, error);
    throw error;
  }
}

// Delete a user from Meilisearch
export async function deleteUserFromMeilisearch(userId: string) {
  if (!meiliClient) {
    console.warn("Meilisearch not configured, skipping delete");
    return;
  }

  try {
    const index = meiliClient.index(USERS_INDEX);
    await index.deleteDocument(userId);
    console.log(`Deleted user ${userId} from Meilisearch`);
  } catch (error) {
    console.error(`Error deleting user ${userId} from Meilisearch:`, error);
    throw error;
  }
}

// Delete a company from Meilisearch
export async function deleteCompanyFromMeilisearch(companyId: string) {
  if (!meiliClient) {
    console.warn("Meilisearch not configured, skipping delete");
    return;
  }

  try {
    const index = meiliClient.index(COMPANIES_INDEX);
    await index.deleteDocument(companyId);
    console.log(`Deleted company ${companyId} from Meilisearch`);
  } catch (error) {
    console.error(
      `Error deleting company ${companyId} from Meilisearch:`,
      error
    );
    throw error;
  }
}
