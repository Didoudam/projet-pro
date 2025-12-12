import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    variant?: "default" | "technical" | "lcd";
    className?: string;
}

export function Card({ children, variant = "default", className = "" }: CardProps) {
    const baseStyles = "bg-card text-card-foreground rounded-none transition-all";

    const variants = {
        default: "border-2 border-border shadow-sm",
        technical: "border-technical shadow-lcd",
        lcd: "border-2 border-primary shadow-lcd bg-secondary/5"
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: ReactNode;
    pattern?: "grid" | "dots" | "barcode" | "none";
    className?: string;
}

export function CardHeader({ children, pattern = "none", className = "" }: CardHeaderProps) {
    const patternClass = pattern !== "none" ? `pattern-${pattern}` : "";

    return (
        <div className={`px-6 py-4 border-b-2 border-border ${patternClass} ${className}`}>
            {children}
        </div>
    );
}

interface CardTitleProps {
    children: ReactNode;
    mono?: boolean;
    className?: string;
}

export function CardTitle({ children, mono = false, className = "" }: CardTitleProps) {
    const fontClass = mono ? "font-mono" : "font-sans";

    return (
        <h3 className={`text-lg font-bold uppercase tracking-wide ${fontClass} ${className}`}>
            {children}
        </h3>
    );
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
    return (
        <div className={`px-6 py-4 ${className}`}>
            {children}
        </div>
    );
}

interface CardFooterProps {
    children: ReactNode;
    className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
    return (
        <div className={`px-6 py-4 border-t-2 border-border ${className}`}>
            {children}
        </div>
    );
}
