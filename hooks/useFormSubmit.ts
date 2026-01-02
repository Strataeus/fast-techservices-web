import { useState } from 'react';

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export function useFormSubmit() {
  const [state, setState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  });

  const submitForm = async (formData: Record<string, unknown>, formType: string) => {
    setState({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType }),
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      setState({ loading: false, success: true, error: null });
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setState({ loading: false, success: false, error: errorMessage });
      return false;
    }
  };

  const reset = () => {
    setState({ loading: false, success: false, error: null });
  };

  return { ...state, submitForm, reset };
}
