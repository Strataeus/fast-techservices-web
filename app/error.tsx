'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ maxWidth: "600px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Erreur 500</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Une erreur est survenue</h2>
        <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#ccc" }}>
          {error?.message || "Une erreur inattendue s'est produite. Nos équipes en ont été notifiées."}
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0ea5e9",
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Réessayer
          </button>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "transparent",
              color: "#0ea5e9",
              textDecoration: "none",
              border: "1px solid #0ea5e9",
              borderRadius: "0.375rem",
              fontWeight: "500",
            }}
          >
            Accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
