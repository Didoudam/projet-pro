import { NextRequest, NextResponse } from "next/server";
import {
  meiliClient,
  USERS_INDEX,
  COMPANIES_INDEX,
  UserSearchDocument,
  CompanySearchDocument,
} from "@/lib/meilisearch";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");
    const type = searchParams.get("type"); // "users", "companies", "all"
    const activity = searchParams.get("activity"); // Filter by activity sector

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { error: "Le terme de recherche est requis" },
        { status: 400 }
      );
    }

    const searchTerm = query.trim();
    const results: {
      users?: UserSearchDocument[];
      companies?: CompanySearchDocument[];
    } = {};

    // Search users
    if (type === "users" || type === "all" || !type) {
      const usersIndex = meiliClient.index<UserSearchDocument>(USERS_INDEX);
      const userSearchResults = await usersIndex.search(searchTerm, {
        limit: 20,
      });
      results.users = userSearchResults.hits;
    }

    // Search companies
    if (type === "companies" || type === "all" || !type) {
      const companiesIndex =
        meiliClient.index<CompanySearchDocument>(COMPANIES_INDEX);

      const searchOptions: {
        limit: number;
        filter?: string;
      } = {
        limit: 20,
      };

      // Add activity filter if provided
      if (activity && activity.trim().length > 0) {
        searchOptions.filter = `activity = "${activity.trim()}"`;
      }

      const companySearchResults = await companiesIndex.search(
        searchTerm,
        searchOptions
      );
      results.companies = companySearchResults.hits;
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error("Erreur de recherche:", error);
    return NextResponse.json(
      { error: "Erreur lors de la recherche" },
      { status: 500 }
    );
  }
}
