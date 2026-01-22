"use client";

import { useState } from "react";
import { CompanyWithRelations } from "@/types/company";
import { CompanyCard } from "./CompanyCard";
import { CreateCompanyForm } from "./CreateCompanyForm";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface CompanyListProps {
    companies: CompanyWithRelations[];
}

export function CompanyList({ companies: initialCompanies }: CompanyListProps) {
    const [companies, setCompanies] = useState(initialCompanies);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleCompanyCreated = (newCompany: CompanyWithRelations) => {
        setCompanies([newCompany, ...companies]);
        setShowCreateForm(false);
    };

    return (
        <div className="min-h-screen bg-background pattern-dots p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <Card>
                    <CardHeader className="pattern-grid">
                        <div className="flex items-center justify-between">
                            <CardTitle mono>Entreprises</CardTitle>
                            <Button
                                onClick={() => setShowCreateForm(!showCreateForm)}
                                variant="primary"
                            >
                                {showCreateForm ? "Annuler" : "Créer une entreprise"}
                            </Button>
                        </div>
                    </CardHeader>
                    {showCreateForm && (
                        <CardContent>
                            <CreateCompanyForm onSuccess={handleCompanyCreated} />
                        </CardContent>
                    )}
                </Card>

                {/* Liste des entreprises */}
                {companies.length === 0 ? (
                    <Card>
                        <CardContent className="p-12 text-center">
                            <p className="text-muted-foreground font-mono uppercase tracking-wider">
                                Aucune entreprise pour le moment
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {companies.map((company) => (
                            <CompanyCard key={company.id} company={company} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
