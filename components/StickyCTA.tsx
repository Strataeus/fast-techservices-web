import Link from "next/link";

export default function StickyCTA() {
  return (
    <>
      <div className="fixed bottom-5 right-6 z-[70] hidden md:block">
        <Link
          href="/#contact"
          className="btn-primary px-5 py-3 text-xs uppercase tracking-[0.28em] shadow-[0_0_24px_rgba(34,197,94,0.35)]"
          aria-label="Demander un devis"
        >
          Demander un devis
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[70] md:hidden">
        <Link
          href="/#contact"
          className="block w-full bg-action px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_-6px_18px_rgba(0,0,0,0.35)]"
          aria-label="Demander un devis"
        >
          Demander un devis
        </Link>
      </div>
    </>
  );
}
