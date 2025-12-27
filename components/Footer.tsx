export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80">
          FAST Tech Services
        </p>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} FAST Tech Services. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
