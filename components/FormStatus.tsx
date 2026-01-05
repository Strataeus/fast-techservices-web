/**
 * Form Submission Status Components
 * Success, error, and loading states for forms
 */

"use client";

import { colors, spacing, radius } from "@/lib/design/tokens";

interface SubmissionStatusProps {
  type: "success" | "error" | "loading";
  message: string;
  onDismiss?: () => void;
}

export function SubmissionStatus({ type, message, onDismiss }: SubmissionStatusProps) {
  const statusConfig = {
    success: {
      bg: colors.success + "15",
      border: colors.success,
      textColor: colors.success,
      icon: "✓",
    },
    error: {
      bg: colors.error + "15",
      border: colors.error,
      textColor: colors.error,
      icon: "✕",
    },
    loading: {
      bg: colors.cyan[600] + "15",
      border: colors.cyan[600],
      textColor: colors.cyan[400],
      icon: "⟳",
    },
  };

  const config = statusConfig[type];

  return (
    <div
      style={{
        padding: spacing[4],
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
        borderRadius: radius.md,
        color: config.textColor,
        display: "flex",
        alignItems: "center",
        gap: spacing[3],
        marginBottom: spacing[4],
        animation: type === "loading" ? "spin 1s linear infinite" : undefined,
      }}
    >
      <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{config.icon}</span>
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 600 }}>{message}</p>
      </div>
      {onDismiss && type !== "loading" && (
        <button
          onClick={onDismiss}
          style={{
            background: "none",
            border: "none",
            color: config.textColor,
            cursor: "pointer",
            fontSize: "1.5rem",
            padding: 0,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      )}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/**
 * Form Success Message with CTA
 */

interface SuccessMessageProps {
  title?: string;
  message: string;
  ctaText?: string;
  onCTA?: () => void;
}

export function SuccessMessage({
  title = "Succès!",
  message,
  ctaText = "Fermer",
  onCTA,
}: SuccessMessageProps) {
  return (
    <div
      style={{
        padding: `${spacing[6]} ${spacing[4]}`,
        backgroundColor: colors.success + "10",
        border: `2px solid ${colors.success}`,
        borderRadius: radius.lg,
        color: colors.slate[100],
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: spacing[2], fontSize: "2rem" }}>✓</div>
      <h3 style={{ margin: `0 0 ${spacing[2]} 0`, color: colors.success, fontSize: "1.25rem" }}>
        {title}
      </h3>
      <p style={{ margin: `0 0 ${spacing[4]} 0`, color: colors.slate[300] }}>{message}</p>
      {onCTA && (
        <button
          onClick={onCTA}
          style={{
            padding: `${spacing[2]} ${spacing[6]}`,
            backgroundColor: colors.success,
            color: "white",
            border: "none",
            borderRadius: radius.md,
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
}

/**
 * Form Error Message with details
 */

interface ErrorMessageProps {
  title?: string;
  message: string;
  details?: string[];
  ctaText?: string;
  onCTA?: () => void;
}

export function ErrorMessage({
  title = "Erreur",
  message,
  details,
  ctaText = "Réessayer",
  onCTA,
}: ErrorMessageProps) {
  return (
    <div
      style={{
        padding: `${spacing[6]} ${spacing[4]}`,
        backgroundColor: colors.error + "10",
        border: `2px solid ${colors.error}`,
        borderRadius: radius.lg,
        color: colors.slate[100],
      }}
    >
      <div style={{ marginBottom: spacing[2], fontSize: "2rem", textAlign: "center" }}>✕</div>
      <h3 style={{ margin: `0 0 ${spacing[2]} 0`, color: colors.error, fontSize: "1.25rem" }}>
        {title}
      </h3>
      <p style={{ margin: `0 0 ${spacing[4]} 0`, color: colors.slate[300] }}>{message}</p>

      {details && details.length > 0 && (
        <ul
          style={{
            margin: `0 0 ${spacing[4]} 0`,
            paddingLeft: spacing[6],
            color: colors.slate[300],
          }}
        >
          {details.map((detail, idx) => (
            <li key={idx} style={{ marginBottom: spacing[2] }}>
              {detail}
            </li>
          ))}
        </ul>
      )}

      {onCTA && (
        <button
          onClick={onCTA}
          style={{
            padding: `${spacing[2]} ${spacing[6]}`,
            backgroundColor: colors.error,
            color: "white",
            border: "none",
            borderRadius: radius.md,
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
}

/**
 * Form Loading Indicator
 */

export function FormLoading({ message = "Envoi en cours..." }: { message?: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: spacing[4],
        padding: spacing[8],
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "3rem",
          height: "3rem",
          border: `3px solid ${colors.slate[700]}`,
          borderTop: `3px solid ${colors.cyan[600]}`,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <p style={{ color: colors.slate[300], margin: 0, fontSize: "1rem" }}>{message}</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/**
 * Field validation indicator
 */

export function FieldValidation({ isValid, isTouched }: { isValid: boolean; isTouched: boolean }) {
  if (!isTouched) return null;

  return (
    <span
      style={{
        marginLeft: spacing[2],
        fontSize: "1.25rem",
        color: isValid ? colors.success : colors.error,
      }}
    >
      {isValid ? "✓" : "✕"}
    </span>
  );
}
