"use client";

import Link from "next/link";
import { CompanyWithRelations } from "@/types/company";
import { Card, CardContent } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";

interface CompanyCardProps {
    company: CompanyWithRelations;
}

export function CompanyCard({ company }: CompanyCardProps) {
    return (
        <Link href={`/companies/${company.id}`}>
            <Card className="hover:border-primary transition-all cursor-pointer h-full">
                <CardContent className="p-0">
                    {/* Header avec image ou initiale */}
                    <div className="p-4 bg-muted/20 pattern-grid border-b-2 border-border">
                        <div className="flex items-center gap-3">
                            <Avatar
                                src={company.image}
                                alt={company.name}
                                size={48}
                            />
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-sm font-mono uppercase tracking-wider text-foreground truncate">
                                    {company.name}
                                </h3>
                                {company.activity && (
                                    <p className="text-xs text-muted-foreground font-mono truncate">
                                        {company.activity}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    {company.description && (
                        <div className="p-4 border-b-2 border-border">
                            <p className="text-sm text-foreground line-clamp-3">
                                {company.description}
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </Link>
    );
}
