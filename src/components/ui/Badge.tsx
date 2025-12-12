import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "muted";
    size?: "sm" | "md" | "lg";
    mono?: boolean;
    className?: string;
}

export function Badge({
    children,
    variant = "muted",
    size = "md",
    mono = true,
    className = ""
}: BadgeProps) {
    const variants = {
        primary: "bg-primary text-primary-foreground border-primary",
        secondary: "bg-secondary text-secondary-foreground border-secondary",
        accent: "bg-accent text-accent-foreground border-accent",
        success: "bg-success text-foreground border-success",
        warning: "bg-warning text-foreground border-warning",
        error: "bg-error text-foreground border-error",
        muted: "bg-muted text-muted-foreground border-border"
    };

    const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base"
    };

    const fontClass = mono ? "font-mono" : "font-sans";

    return (
        <span className={`
            inline-flex items-center gap-1
            border-2 rounded-none
            font-bold uppercase tracking-wider
            ${variants[variant]}
            ${sizes[size]}
            ${fontClass}
            ${className}
        `}>
            {children}
        </span>
    );
}

interface StatBadgeProps {
    value: number | string;
    label?: string;
    variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "muted";
    className?: string;
}

export function StatBadge({ value, label, variant = "muted", className = "" }: StatBadgeProps) {
    return (
        <Badge variant={variant} size="md" className={className}>
            <span className="text-lg tabular-nums">{value}</span>
            {label && <span className="text-xs opacity-80">{label}</span>}
        </Badge>
    );
}
