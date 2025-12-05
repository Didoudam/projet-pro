"use client";

import { useEffect } from "react";
import { Toast as ToastType } from "@/stores/useToastStore";

interface ToastProps {
    toast: ToastType;
    onRemove: (id: string) => void;
}

const toastStyles = {
    success: "bg-green-500 border-green-600",
    error: "bg-red-500 border-red-600",
    info: "bg-blue-500 border-blue-600",
    warning: "bg-yellow-500 border-yellow-600",
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
            className={`${toastStyles[toast.type]} text-white px-6 py-4 rounded-lg shadow-lg border-l-4 flex items-center gap-3 min-w-[300px] max-w-md animate-slide-in`}
            role="alert"
        >
            <span className="text-xl font-bold">{toastIcons[toast.type]}</span>
            <p className="flex-1 text-sm font-medium">{toast.message}</p>
            <button
                onClick={() => onRemove(toast.id)}
                className="text-white hover:text-gray-200 transition-colors font-bold text-lg"
                aria-label="Fermer"
            >
                ×
            </button>
        </div>
    );
}
