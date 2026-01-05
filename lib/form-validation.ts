/**
 * Form Validation Utilities
 * Real-time validation patterns and helper functions
 */

export const ValidationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(?:\+33|0)[1-9](?:[0-9]{8})$/,
  postalCode: /^\d{5}$/,
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  phoneInternational: /^\+?[1-9]\d{1,14}$/,
};

export const FormValidation = {
  /**
   * Validate email format
   */
  email: (value: string): boolean => {
    return ValidationPatterns.email.test(value);
  },

  /**
   * Validate French phone number (0X format or +33)
   */
  phone: (value: string): boolean => {
    const cleaned = value.replace(/\s/g, "");
    return ValidationPatterns.phone.test(cleaned);
  },

  /**
   * Validate postal code (5 digits)
   */
  postalCode: (value: string): boolean => {
    return ValidationPatterns.postalCode.test(value);
  },

  /**
   * Validate minimum length
   */
  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  /**
   * Validate maximum length
   */
  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },

  /**
   * Validate required field
   */
  required: (value: string): boolean => {
    return value.trim().length > 0;
  },

  /**
   * Validate URL format
   */
  url: (value: string): boolean => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Validate company name (alphanumeric + common symbols)
   */
  companyName: (value: string): boolean => {
    return /^[a-zA-Z0-9\s\-&'.,()]+$/.test(value) && value.length >= 2;
  },

  /**
   * Validate French SIRET (14 digits)
   */
  siret: (value: string): boolean => {
    const cleaned = value.replace(/\s/g, "");
    return /^\d{14}$/.test(cleaned);
  },

  /**
   * Get validation error message in French
   */
  getErrorMessage: (field: string, type: string): string => {
    const messages: Record<string, Record<string, string>> = {
      email: {
        required: "L'adresse email est requise",
        invalid: "Adresse email invalide",
      },
      phone: {
        required: "Le numéro de téléphone est requis",
        invalid: "Numéro de téléphone invalide (format: 0X... ou +33X...)",
      },
      postalCode: {
        required: "Le code postal est requis",
        invalid: "Code postal invalide (5 chiffres)",
      },
      name: {
        required: "Le nom est requis",
        minLength: "Le nom doit contenir au moins 2 caractères",
      },
      company: {
        required: "Le nom de l'entreprise est requis",
        invalid: "Nom d'entreprise invalide",
      },
      message: {
        required: "Le message est requis",
        minLength: "Le message doit contenir au moins 10 caractères",
      },
      url: {
        invalid: "URL invalide",
      },
    };

    return messages[field]?.[type] || "Champ invalide";
  },
};

/**
 * Form state management hook
 */
import { useState, useCallback } from "react";

export function useFormValidation<T extends Record<string, unknown>>(
  initialValues: T,
  onSubmit: (values: T) => Promise<void>
) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const fieldValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    setValues((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitSuccess(false);

      try {
        await onSubmit(values);
        setSubmitSuccess(true);
        setValues(initialValues);
        setTouched({});
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, onSubmit, initialValues]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitSuccess(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue: (name: string, value: unknown) => {
      setValues((prev) => ({ ...prev, [name]: value }));
    },
    setFieldError: (name: string, error: string) => {
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    resetForm,
  };
}
