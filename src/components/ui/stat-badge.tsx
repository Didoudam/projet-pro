import { ReactNode } from "react";

interface StatBadgeProps {
    label: string;
    value: string | number;
    subValue?: string;
    icon?: ReactNode;
    variant?: "primary" | "secondary" | "accent" | "muted";
    className?: string;
}

export function StatBadge({
    label,
    value,
    subValue,
    icon,
    variant = "primary",
    className = ""
}: StatBadgeProps) {
    const variants = {
        primary: "bg-primary/10 text-primary border-primary",
        secondary: "bg-secondary/10 text-secondary-foreground border-secondary",
        accent: "bg-accent/10 text-accent-foreground border-accent",
        muted: "bg-muted text-muted-foreground border-border"
    };

    return (
        <div
            className={`
                border-2 rounded-none p-4 text-center
                transition-all
                ${variants[variant]}
                ${className}
            `}
        >
            {icon && (
                <div className="text-2xl mb-1">{icon}</div>
            )}
            <div className="text-2xl font-bold font-mono">{value}</div>
            {subValue && (
                <div className="text-xs text-muted-foreground font-mono mb-1">
                    {subValue}
                </div>
            )}
            <div className="text-sm font-medium uppercase tracking-wide font-mono">
                {label}
            </div>
        </div>
    );
}
