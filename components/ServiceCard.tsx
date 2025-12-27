import type { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  points?: string[];
}

export default function ServiceCard({
  title,
  description,
  icon,
  points,
}: ServiceCardProps) {
  return (
    <div className="tech-panel group flex h-full flex-col rounded-xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,200,255,0.22)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-primary/70 text-accent shadow-[0_0_20px_rgba(0,200,255,0.2)]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
      {points && points.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm text-gray-400">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
