"use client";

interface ImagePlaceholderProps {
  label: string;
  width?: string;
  height?: string;
  className?: string;
}

/**
 * ImagePlaceholder - Zone réservée pour insérer des images premium
 * 
 * UTILISATION:
 * 1. Remplacer src="/placeholder/..." par votre image réelle
 * 2. Garder la structure de base (ratio, shadow, rounded)
 * 3. Exemples d'images à ajouter:
 *    - /hero/* : images de header (bandeau)
 *    - /process/* : étapes du processus (photos, diagrams)
 *    - /success/* : cas réussis (avant/après)
 *    - /testimonials/* : photos garage/techniciens
 */
export default function ImagePlaceholder({
  label,
  width = "w-full",
  height = "h-64",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${width} ${height} ${className} relative bg-gradient-to-br from-primary-dark to-primary-darker rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center shadow-xl`}
    >
      {/* Gradient overlay pour premium look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Placeholder content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-center px-6">
        <div className="text-4xl opacity-40">🖼️</div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white/70 uppercase tracking-wide">{label}</p>
          <p className="text-xs text-white/50">Insérer image ici</p>
        </div>
      </div>

      {/* Border glow effect (premium) */}
      <div className="absolute inset-0 rounded-2xl border border-accent/20 pointer-events-none" />
    </div>
  );
}
