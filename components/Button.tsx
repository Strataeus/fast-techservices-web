import Link from "next/link";

interface ButtonProps {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-action text-white shadow-[0_0_30px_rgba(34,197,94,0.35)] hover:bg-action-strong focus-visible:outline-action"
      : "border border-accent/50 text-accent hover:border-accent-soft hover:text-accent-soft focus-visible:outline-accent";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
