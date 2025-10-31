import { APIError } from "@/lib/fetch-utils";
// import { notify } from "@/libs/sonner";
import { useCallback, useState } from "react";

interface UseAsyncActionOptions {
    pendingDefault?: boolean; // false par défaut
    showErrorToast?: boolean; // false par défaut (erreurs)
    showSuccessToast?: boolean; // false par défaut (succès)
    successMessage?: string; // Message de succès par défaut
    fallbackMessage?: string; // Message d'erreur par défaut
}

interface ExecuteOptions {
    skipError?: boolean;
    skipErrorToast?: boolean; // Override pour supprimer le toast d'erreur
    skipSuccessToast?: boolean; // Override pour supprimer le toast de succès
    successMessage?: string; // Override du message de succès
    fallbackMessage?: string; // Override du message d'erreur
}

interface UseAsyncActionReturn {
    execute: <T>(promise: Promise<T>, options?: ExecuteOptions) => Promise<T>;
    isPending: boolean;
    error: string | null;
    reset: () => void;
}

export const getErrorMessage = (error: unknown, fallbackMessage: string): string => {
    if (error instanceof APIError) {
        return error.message;
    }
    return fallbackMessage;
};

/*
const {isPending, execute} = useAsyncAction();

useEffect(() => {
   execute(fetchUsers());
}, [execute, fetchUsers])

{isPending && <Loader />}
*/
const useAsyncAction = (hookOptions: UseAsyncActionOptions = {}): UseAsyncActionReturn => {
    const {
        pendingDefault = false,
        showErrorToast = true,
        showSuccessToast = false,
        successMessage: defaultSuccessMessage = "Opération réussie",
        fallbackMessage: defaultFallback = "Une erreur inattendue s'est produite",
    } = hookOptions;

    const [isPending, setIsPending] = useState(pendingDefault);
    const [error, setError] = useState<string | null>(null);

    const execute = useCallback(
        async <T>(promise: Promise<T>, executeOptions: ExecuteOptions = {}): Promise<T> => {
            const {
                skipError = false,
                skipErrorToast = false,
                skipSuccessToast = false,
                successMessage = defaultSuccessMessage,
                fallbackMessage = defaultFallback,
            } = executeOptions;

            setIsPending(true);

            if (!skipError) {
                setError(null);
            }

            try {
                const result = await promise;

                // 🎉 TOAST DE SUCCÈS
                const shouldShowSuccessToast = showSuccessToast && !skipSuccessToast;
                if (shouldShowSuccessToast) {
                    //notify.success(successMessage);
                    console.log(successMessage)
                }

                return result;
            } catch (err) {
                const error = err instanceof Error ? err : new Error(String(err));
                const errorMsg = getErrorMessage(error, fallbackMessage);

                // Set error in state
                if (!skipError) {
                    setError(errorMsg);
                }

                // 🔥 TOAST D'ERREUR
                const shouldShowErrorToast = showErrorToast && !skipErrorToast;
                if (shouldShowErrorToast) {
                    // notify.error(errorMsg);
                    console.error(errorMsg)
                }

                throw err;
            } finally {
                setIsPending(false);
            }
        },
        [showErrorToast, showSuccessToast, defaultSuccessMessage, defaultFallback]
    );

    const reset = useCallback(() => {
        setError(null);
        setIsPending(false);
    }, []);

    return {
        execute,
        isPending,
        error,
        reset,
    };
};

export default useAsyncAction;
