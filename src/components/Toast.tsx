"use client";

import { useEffect } from "react";
import { Toast as ToastType } from "@/stores/useToastStore";

interface ToastProps {
    toast: ToastType;
    onRemove: (id: string) => void;
}

const toastStyles = {
    success: "bg-accent/20 border-accent text-accent",
    error: "bg-secondary/20 border-secondary text-secondary",
    info: "bg-primary/20 border-primary text-primary",
    warning: "bg-primary/30 border-primary text-primary",
};

const toastIcons = {
    success: "✓",
    error: "✕",
    info: "i",
    warning: "⚠",
};

export function Toast({ toast, onRemove }: ToastProps) {
    useEffect(() => {
        if (toast.duration && toast.duration > 0) {
            const timer = setTimeout(() => {
                onRemove(toast.id);
            }, toast.duration);

            return () => clearTimeout(timer);
        }
    }, [toast.id, toast.duration, onRemove]);

    return (
        <div
            className={`
                ${toastStyles[toast.type]}
                px-6 py-4 border-2
                shadow-[4px_4px_0_0_var(--shadow-color)]
                flex items-center gap-3 min-w-[300px] max-w-md
                animate-slide-in
                font-mono
                backdrop-blur-md
            `}
            role="alert"
        >
            <span className="text-xl font-bold">{toastIcons[toast.type]}</span>
            <p className="flex-1 text-sm font-bold uppercase tracking-wider">{toast.message}</p>
            <button
                onClick={() => onRemove(toast.id)}
                className="hover:opacity-70 transition-opacity font-bold text-xl border-2 border-current w-6 h-6 flex items-center justify-center"
                aria-label="Fermer"
            >
                ×
            </button>
        </div>
    );
}
