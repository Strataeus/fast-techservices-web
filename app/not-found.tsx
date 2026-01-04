import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: "600px", textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1rem" }}>404</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Page non trouvée</h2>
        <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#ccc" }}>
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#0ea5e9",
            color: "white",
            textDecoration: "none",
            borderRadius: "0.375rem",
            fontWeight: "500",
          }}
        >
          Retourner à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
