"use client";

import Link from "next/link";
import Image from "next/image";
import { CompanyWithRelations } from "@/types/company";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

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
                            {company.image ? (
                                <Image
                                    src={company.image}
                                    alt={company.name}
                                    width={48}
                                    height={48}
                                    className="border-2 border-border object-cover"
                                />
                            ) : (
                                <div className="w-12 h-12 border-2 border-border bg-background flex items-center justify-center text-foreground font-mono font-bold text-lg">
                                    {company.name.charAt(0).toUpperCase()}
                                </div>
                            )}
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
