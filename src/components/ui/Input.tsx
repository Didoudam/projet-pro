import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", error, ...props }, ref) => {
        return (
            <div className="w-full">
                <input
                    ref={ref}
                    className={`
                        w-full px-4 py-2
                        bg-input text-foreground
                        border-2 border-border rounded-none
                        font-mono text-sm
                        focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all
                        ${error ? 'border-error focus:ring-error' : ''}
                        ${className}
                    `}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-xs font-mono text-error uppercase tracking-wider">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = "", error, ...props }, ref) => {
        return (
            <div className="w-full">
                <textarea
                    ref={ref}
                    className={`
                        w-full px-4 py-3
                        bg-input text-foreground
                        border-2 border-border rounded-none
                        font-mono text-sm
                        focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring
                        disabled:opacity-50 disabled:cursor-not-allowed
                        resize-none
                        transition-all
                        ${error ? 'border-error focus:ring-error' : ''}
                        ${className}
                    `}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-xs font-mono text-error uppercase tracking-wider">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";
