/**
 * Form Input Components with Real-time Validation
 * Premium form inputs with validation indicators
 */

"use client";

import React, { useState } from "react";
import { colors, spacing, radius, transitions } from "@/lib/design/tokens";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  pattern?: string;
  helperText?: string;
  validate?: (value: string) => boolean;
}

export function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  pattern,
  helperText,
  validate,
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const isValid = validate ? validate(value) : true;
  const showError = isTouched && (error || !isValid);

  const handleBlur = () => {
    setIsFocused(false);
    setIsTouched(true);
    if (validate && !validate(value)) {
      setValidationMessage("Valeur invalide");
    }
  };

  return (
    <div style={{ marginBottom: spacing[6] }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          marginBottom: spacing[2],
          fontWeight: 600,
          color: colors.slate[200],
          fontSize: "0.95rem",
        }}
      >
        {label} {required && <span style={{ color: colors.error }}>*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        pattern={pattern}
        required={required}
        style={{
          width: "100%",
          padding: `${spacing[3]} ${spacing[4]}`,
          backgroundColor: isFocused ? colors.slate[800] : colors.slate[700],
          color: colors.slate[100],
          border: `2px solid ${
            showError ? colors.error : isFocused ? colors.cyan[600] : colors.slate[600]
          }`,
          borderRadius: radius.md,
          fontSize: "1rem",
          transition: transitions.smooth,
          outline: "none",
          boxShadow: isFocused ? `0 0 0 3px ${colors.cyan[600]}33` : "none",
        }}
      />

      {showError && (
        <div
          style={{
            marginTop: spacing[2],
            color: colors.error,
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          ⚠️ {error || validationMessage}
        </div>
      )}

      {helperText && !showError && (
        <div
          style={{
            marginTop: spacing[2],
            color: colors.slate[400],
            fontSize: "0.875rem",
          }}
        >
          {helperText}
        </div>
      )}

      {isTouched && isValid && value && (
        <div
          style={{
            marginTop: spacing[2],
            color: colors.success,
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          ✓ Validé
        </div>
      )}
    </div>
  );
}

/**
 * Form Textarea with real-time validation
 */

interface FormTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export function FormTextarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  minLength,
  maxLength,
}: FormTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const charCount = value.length;
  const isValid = minLength ? charCount >= minLength : true;
  const showError = isTouched && (error || !isValid);

  return (
    <div style={{ marginBottom: spacing[6] }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <label
          htmlFor={name}
          style={{
            fontWeight: 600,
            color: colors.slate[200],
            fontSize: "0.95rem",
            marginBottom: spacing[2],
          }}
        >
          {label} {required && <span style={{ color: colors.error }}>*</span>}
        </label>
        {maxLength && (
          <span
            style={{
              fontSize: "0.75rem",
              color: charCount > maxLength * 0.8 ? colors.warning : colors.slate[400],
            }}
          >
            {charCount} / {maxLength}
          </span>
        )}
      </div>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsTouched(true);
        }}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        rows={4}
        style={{
          width: "100%",
          padding: `${spacing[3]} ${spacing[4]}`,
          backgroundColor: isFocused ? colors.slate[800] : colors.slate[700],
          color: colors.slate[100],
          border: `2px solid ${
            showError ? colors.error : isFocused ? colors.cyan[600] : colors.slate[600]
          }`,
          borderRadius: radius.md,
          fontSize: "1rem",
          fontFamily: "inherit",
          transition: transitions.smooth,
          outline: "none",
          resize: "vertical",
          boxShadow: isFocused ? `0 0 0 3px ${colors.cyan[600]}33` : "none",
        }}
      />

      {showError && (
        <div
          style={{
            marginTop: spacing[2],
            color: colors.error,
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          ⚠️ {error || `Minimum ${minLength} caractères requis`}
        </div>
      )}

      {isTouched && isValid && value && (
        <div
          style={{
            marginTop: spacing[2],
            color: colors.success,
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          ✓ Validé
        </div>
      )}
    </div>
  );
}

/**
 * Form Select with proper styling
 */

interface FormSelectProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export function FormSelect({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
  placeholder = "Sélectionner...",
}: FormSelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const showError = isTouched && error;

  return (
    <div style={{ marginBottom: spacing[6] }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          marginBottom: spacing[2],
          fontWeight: 600,
          color: colors.slate[200],
          fontSize: "0.95rem",
        }}
      >
        {label} {required && <span style={{ color: colors.error }}>*</span>}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsTouched(true);
        }}
        required={required}
        style={{
          width: "100%",
          padding: `${spacing[3]} ${spacing[4]}`,
          backgroundColor: isFocused ? colors.slate[800] : colors.slate[700],
          color: colors.slate[100],
          border: `2px solid ${
            showError ? colors.error : isFocused ? colors.cyan[600] : colors.slate[600]
          }`,
          borderRadius: radius.md,
          fontSize: "1rem",
          cursor: "pointer",
          transition: transitions.smooth,
          outline: "none",
          boxShadow: isFocused ? `0 0 0 3px ${colors.cyan[600]}33` : "none",
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {showError && (
        <div
          style={{
            marginTop: spacing[2],
            color: colors.error,
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          ⚠️ {error}
        </div>
      )}
    </div>
  );
}

/**
 * Form Checkbox with label
 */

interface FormCheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  helperText?: string;
}

export function FormCheckbox({
  label,
  name,
  checked,
  onChange,
  error,
  required = false,
  helperText,
}: FormCheckboxProps) {
  return (
    <div style={{ marginBottom: spacing[6] }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: spacing[3] }}>
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required={required}
          style={{
            width: "1.25rem",
            height: "1.25rem",
            marginTop: spacing[1],
            cursor: "pointer",
            accentColor: colors.cyan[600],
          }}
        />
        <div>
          <label
            htmlFor={name}
            style={{
              fontWeight: 500,
              color: colors.slate[200],
              cursor: "pointer",
              display: "block",
              marginBottom: helperText ? spacing[1] : "0",
            }}
          >
            {label} {required && <span style={{ color: colors.error }}>*</span>}
          </label>
          {helperText && (
            <p style={{ color: colors.slate[400], fontSize: "0.875rem", margin: 0 }}>
              {helperText}
            </p>
          )}
        </div>
      </div>
      {error && (
        <div
          style={{
            marginTop: spacing[2],
            marginLeft: spacing[8],
            color: colors.error,
            fontSize: "0.875rem",
          }}
        >
          ⚠️ {error}
        </div>
      )}
    </div>
  );
}

/**
 * Form Group wrapper for organization
 */

export function FormGroup({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div
      style={{
        padding: `${spacing[6]} 0`,
        borderBottom: `1px solid ${colors.slate[700]}`,
      }}
    >
      {title && (
        <h3
          style={{
            marginBottom: spacing[4],
            fontSize: "1.125rem",
            fontWeight: 600,
            color: colors.cyan[400],
          }}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
