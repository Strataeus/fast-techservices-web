import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAST Remote | Diagnostic à distance | FAST Tech Services',
  description:
    'FAST Remote : diagnostic guidé à distance avec preuves terrain. Verdict rapide en 1-2h pour ponts élévateurs, compresseurs, cabines. France entière.',
  openGraph: {
    title: 'FAST Remote | Diagnostic à distance',
    description: 'Diagnostic guidé à distance avec preuves terrain. Verdict rapide en 1-2h.',
    type: 'website',
  },
};

export default function FastRemoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
