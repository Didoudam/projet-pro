import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    mono?: boolean;
    className?: string;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    mono = true,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = `
        inline-flex items-center justify-center gap-2
        border-2 rounded-none
        font-bold uppercase tracking-wider
        transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:translate-x-1 hover:translate-y-1
        active:translate-x-1 active:translate-y-1
    `;

    const variants = {
        primary: `
            bg-primary text-primary-foreground border-border
            hover:bg-primary/90
            shadow-[4px_4px_0_0_var(--shadow-color)]
            hover:shadow-[0px_0px_0_0_var(--shadow-color)]
            active:shadow-none

        `,
        secondary: `
            bg-secondary text-secondary-foreground border-border
            hover:bg-secondary/90
            shadow-[4px_4px_0_0_var(--shadow-color)]
            hover:shadow-[0px_0px_0_0_var(--shadow-color)]
            active:shadow-none
        `,
        accent: `
            bg-accent text-accent-foreground border-border
            hover:bg-accent/90
            shadow-[4px_4px_0_0_var(--shadow-color)]
            hover:shadow-[0px_0px_0_0_var(--shadow-color)]
            active:shadow-none
        `,
        outline: `
            bg-transparent text-foreground border-border
            hover:bg-muted
            shadow-[4px_4px_0_0_var(--shadow-color)]
            hover:shadow-[0px_0px_0_0_var(--shadow-color)]
            active:shadow-none
        `,
        ghost: `
            bg-transparent text-foreground border-transparent
            hover:bg-muted hover:border-border
        `
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base"
    };

    const fontClass = mono ? "font-mono" : "font-sans";

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fontClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
