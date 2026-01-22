"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { UserSearchDocument, CompanySearchDocument } from "@/lib/meilisearch";

type SearchResults = {
  users?: UserSearchDocument[];
  companies?: CompanySearchDocument[];
};

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedType, setSelectedType] = useState<"all" | "users" | "companies">("all");
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const debounceTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults({});
      setShowResults(false);
      return;
    }

    setIsLoading(true);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(async () => {
      try {
        const params = new URLSearchParams({ q: query, type: selectedType });
        const response = await fetch(`/api/search?${params}`);

        if (response.ok) {
          const data = await response.json();
          setResults(data);
          setShowResults(true);
        }
      } catch (error) {
        console.error("Erreur de recherche:", error);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query, selectedType]);

  const handleUserClick = (userId: string) => {
    router.push(`/profile/${userId}`);
    setShowResults(false);
    setQuery("");
  };

  const handleCompanyClick = (companyId: string) => {
    router.push(`/companies/${companyId}`);
    setShowResults(false);
    setQuery("");
  };

  const totalResults = (results.users?.length || 0) + (results.companies?.length || 0);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="border-2 border-black">
        <div className="flex items-center gap-2 p-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par nom, profession, secteur..."
            className="flex-1 bg-transparent outline-none text-sm"
          />

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as "all" | "users" | "companies")}
            className="border-l-2 border-black pl-2 bg-transparent outline-none text-xs"
          >
            <option value="all">Tout</option>
            <option value="users">Personnes</option>
            <option value="companies">Entreprises</option>
          </select>
        </div>
      </div>

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-1 border-2 border-black bg-white max-h-96 overflow-y-auto z-50">
          {isLoading ? (
            <div className="p-4 text-center text-xs">Recherche...</div>
          ) : totalResults === 0 ? (
            <div className="p-4 text-center text-xs">Aucun résultat</div>
          ) : (
            <>
              {results.users && results.users.length > 0 && (
                <div>
                  <div className="p-2 border-b-2 border-black bg-black text-white text-xs font-bold">
                    PERSONNES ({results.users.length})
                  </div>
                  {results.users.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => handleUserClick(user.id)}
                      className="w-full text-left p-3 border-b border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {user.image ? (
                          <img
                            src={user.image}
                            alt={user.name}
                            className="w-8 h-8 border border-black"
                          />
                        ) : (
                          <div className="w-8 h-8 border border-black bg-white" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold truncate">
                            {user.name}
                          </div>
                          {user.currentPosition && (
                            <div className="text-xs truncate">
                              {user.currentPosition}
                              {user.currentCompany && ` @ ${user.currentCompany}`}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {results.companies && results.companies.length > 0 && (
                <div>
                  <div className="p-2 border-b-2 border-black bg-black text-white text-xs font-bold">
                    ENTREPRISES ({results.companies.length})
                  </div>
                  {results.companies.map((company) => (
                    <button
                      key={company.id}
                      onClick={() => handleCompanyClick(company.id)}
                      className="w-full text-left p-3 border-b border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {company.image ? (
                          <img
                            src={company.image}
                            alt={company.name}
                            className="w-8 h-8 border border-black"
                          />
                        ) : (
                          <div className="w-8 h-8 border border-black bg-white" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold truncate">
                            {company.name}
                          </div>
                          {company.activity && (
                            <div className="text-xs truncate">{company.activity}</div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
