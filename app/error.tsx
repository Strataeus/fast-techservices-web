'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Container from '../components/Container';
import Section from '../components/ui/Section';
import PageHero from '../components/PageHero';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service (Sentry, Rollbar, etc.)
    console.error('Application error:', error);
    if (process.env.NODE_ENV === 'production') {
      // In production, you would send this to an error tracking service
      // Example: Sentry.captureException(error);
    }
  }, [error]);

  return (
    <div className="relative min-h-screen bg-primary">
      <PageHero
        badgeLabel="Erreur 500"
        title="Oups ! Une erreur est survenue"
        description="Une erreur inattendue s'est produite lors du chargement de cette page. Nos équipes techniques en ont été notifiées."
        imageUrl="/hero/error-500.svg"
        accentColor="gold"
      />
      <Section>
        <Container className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-2">Dépannage</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Que faire maintenant ?
            </h2>
          </div>

          <p className="max-w-md text-lg text-gray-200">
            Consultez les liens ci-dessous ou retournez à l&apos;accueil pour continuer votre visite.
          </p>

          {process.env.NODE_ENV === 'development' && error.message && (
            <details className="mt-4 w-full max-w-md bg-red-900/20 border border-red-500/30 rounded p-4 text-left">
              <summary className="cursor-pointer text-red-400 font-semibold hover:text-red-300">
                Détails techniques (dev mode)
              </summary>
              <pre className="mt-2 text-xs text-red-200 overflow-auto max-h-48">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mt-6">
            <button
              onClick={reset}
              className="px-6 py-3 bg-accent text-primary font-semibold rounded transition hover:bg-accent-strong"
            >
              Réessayer
            </button>
            <Link
              href="/"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded transition hover:border-white/40"
            >
              Retour à l&apos;accueil
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Code d&apos;erreur: {error.digest ? `#${error.digest}` : 'Unknown'}
          </p>
        </Container>
      </Section>
    </div>
  );
}
