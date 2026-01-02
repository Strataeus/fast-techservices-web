/**
 * ✅ Composant réutilisable : Bouton CTA générique
 *
 * **Usage** :
 * - Boutons "Retour" (ex: page 404)
 * - Boutons CTA secondaires avec props personnalisable
 * 
 * **Alternatives**:
 * - Pour CTAs principales : utilisez `StickyCTA.tsx`
 * - Pour CTAs inline dans les sections : utilisez les className "btn btn-primary" / "btn btn-secondary"
 *
 * **Props** :
 * - `text` : Texte du bouton (obligatoire)
 * - `href` : Lien de destination (obligatoire)
 * - `primary` : Couleur (par défaut: false = secondaire, true = primaire)
 *
 * **Utilisé par** :
 * - app/not-found.tsx ("Retour à l'accueil")
 */

import Link from "next/link";

interface CTAProps {
  text: string;
  href: string;
  primary?: boolean;
}

export default function CTA({ text, href, primary = false }: CTAProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        primary
          ? "bg-action text-white hover:bg-action-strong"
          : "border border-accent/50 text-accent hover:border-accent-soft hover:text-accent-soft"
      }`}
    >
      {text}
    </Link>
  );
}
