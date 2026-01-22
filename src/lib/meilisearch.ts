import { MeiliSearch } from "meilisearch";

if (!process.env.MEILISEARCH_HOST) {
  throw new Error("MEILISEARCH_HOST is not defined");
}

if (!process.env.MEILISEARCH_MASTER_KEY) {
  throw new Error("MEILISEARCH_MASTER_KEY is not defined");
}

export const meiliClient = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST,
  apiKey: process.env.MEILISEARCH_MASTER_KEY,
});

// Index names
export const USERS_INDEX = "users";
export const COMPANIES_INDEX = "companies";

// Initialize indexes with settings
export async function initializeMeilisearch() {
  try {
    // Users index
    const usersIndex = meiliClient.index(USERS_INDEX);
    await usersIndex.updateSettings({
      searchableAttributes: ["name", "firstName", "lastName", "email", "currentPosition"],
      filterableAttributes: ["id"],
      sortableAttributes: ["name"],
      displayedAttributes: [
        "id",
        "name",
        "firstName",
        "lastName",
        "email",
        "image",
        "currentPosition",
        "currentCompany",
      ],
    });

    // Companies index
    const companiesIndex = meiliClient.index(COMPANIES_INDEX);
    await companiesIndex.updateSettings({
      searchableAttributes: ["name", "description", "activity"],
      filterableAttributes: ["id", "activity"],
      sortableAttributes: ["name"],
      displayedAttributes: ["id", "name", "activity", "image", "description"],
    });

    console.log("Meilisearch indexes initialized successfully");
  } catch (error) {
    console.error("Error initializing Meilisearch:", error);
    throw error;
  }
}

// Type for user search document
export type UserSearchDocument = {
  id: string;
  name: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  image: string | null;
  currentPosition: string | null;
  currentCompany: string | null;
};

// Type for company search document
export type CompanySearchDocument = {
  id: string;
  name: string;
  activity: string | null;
  image: string | null;
  description: string | null;
};
