"use client";

import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
    src: string | null | undefined;
    alt: string;
    size?: number;
    fallback?: string;
    className?: string;
}

export function Avatar({ src, alt, size = 40, fallback, className = "" }: AvatarProps) {
    const [hasError, setHasError] = useState(false);

    const fallbackLetter = fallback || alt.charAt(0).toUpperCase();

    if (!src || hasError) {
        return (
            <div
                className={`border-2 border-border bg-background flex items-center justify-center text-foreground font-mono font-bold ${className}`}
                style={{ width: size, height: size, fontSize: size * 0.4 }}
            >
                {fallbackLetter}
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={`border-2 border-border object-cover ${className}`}
            onError={() => setHasError(true)}
        />
    );
}
