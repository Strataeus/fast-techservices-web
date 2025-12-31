import Link from "next/link";

interface ButtonProps {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base = "btn";
  const styles = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
