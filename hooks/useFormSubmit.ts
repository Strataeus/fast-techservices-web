import { useState, useCallback } from 'react';

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

interface SubmitOptions {
  timeout?: number; // ms
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function useFormSubmit() {
  const [state, setState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  });

  const submitForm = useCallback(
    async (
      formData: Record<string, unknown>,
      formType: string,
      options: SubmitOptions = {}
    ) => {
      const { timeout = 10000, onSuccess, onError } = options;

      setState({ loading: true, success: false, error: null });

      try {
        // Race between fetch and timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: formType,
            data: formData,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage =
            errorData?.error || `Erreur ${response.status}: ${response.statusText}`;
          throw new Error(errorMessage);
        }

        setState({ loading: false, success: true, error: null });
        onSuccess?.();
        return true;
      } catch (err) {
        let errorMessage = 'Erreur inconnue';

        if (err instanceof TypeError && err.message === 'Failed to fetch') {
          errorMessage = 'Problème de connexion. Vérifie ta connexion internet.';
        } else if (err instanceof Error) {
          if (err.name === 'AbortError') {
            errorMessage = 'Requête dépassée. Réessaye plus tard.';
          } else {
            errorMessage = err.message;
          }
        }

        setState({ loading: false, success: false, error: errorMessage });
        onError?.(errorMessage);
        return false;
      }
    },
    []
  );

  const reset = useCallback(() => {
    setState({ loading: false, success: false, error: null });
  }, []);

  return { ...state, submitForm, reset };
}

