/**
 * Error Boundary Component
 * Catches errors and displays fallback UI
 */

"use client";

import React, { ReactNode } from "react";
import { colors, spacing, radius } from "@/lib/design/tokens";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            style={{
              padding: spacing[8],
              backgroundColor: colors.slate[900],
              color: colors.slate[200],
              borderRadius: radius.lg,
              border: `1px solid ${colors.error}`,
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: spacing[2], color: colors.error }}>Erreur détectée</h2>
            <p style={{ marginBottom: spacing[4] }}>
              Une erreur est survenue. Veuillez recharger la page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: `${spacing[2]} ${spacing[4]}`,
                backgroundColor: colors.error,
                color: "white",
                border: "none",
                borderRadius: radius.md,
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Recharger
            </button>
            {process.env.NODE_ENV === "development" && (
              <details style={{ marginTop: spacing[4], textAlign: "left" }}>
                <summary style={{ cursor: "pointer", marginBottom: spacing[2] }}>
                  Détails de l&apos;erreur (dev)
                </summary>
                <pre
                  style={{
                    backgroundColor: colors.slate[900],
                    padding: spacing[4],
                    borderRadius: radius.md,
                    overflow: "auto",
                    fontSize: "0.875rem",
                  }}
                >
                  {this.state.error?.message}
                  {"\n"}
                  {this.state.error?.stack}
                </pre>
              </details>
            )}
          </div>
        )
      );
    }

    return this.props.children;
  }
}

/**
 * Error Page Component for server errors
 */

export function ErrorPage({
  title = "Erreur",
  message = "Une erreur est survenue.",
  code = "500",
  onRetry,
}: {
  title?: string;
  message?: string;
  code?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.slate[900],
        color: colors.slate[200],
        padding: spacing[4],
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: colors.error,
            marginBottom: spacing[2],
          }}
        >
          {code}
        </h1>
        <h2 style={{ fontSize: "1.875rem", marginBottom: spacing[4] }}>{title}</h2>
        <p style={{ fontSize: "1.125rem", marginBottom: spacing[8], color: colors.slate[400] }}>
          {message}
        </p>
        <div style={{ display: "flex", gap: spacing[4], justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              padding: `${spacing[3]} ${spacing[6]}`,
              backgroundColor: colors.cyan[600],
              color: "white",
              border: "none",
              borderRadius: radius.lg,
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.cyan[500];
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.cyan[600];
            }}
          >
            Retour à l&apos;accueil
          </button>
          {onRetry && (
            <button
              onClick={onRetry}
              style={{
                padding: `${spacing[3]} ${spacing[6]}`,
                backgroundColor: "transparent",
                color: colors.cyan[400],
                border: `2px solid ${colors.cyan[600]}`,
                borderRadius: radius.lg,
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.slate[800];
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              }}
            >
              Réessayer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
