import type { ComponentProps, ElementType, ReactNode } from "react";

interface CardProps extends ComponentProps<"div"> {
  children: ReactNode;
  as?: ElementType;
}

export default function Card({ as: Tag = "div", className = "", children, ...rest }: CardProps) {
  return (
    // Decorative wrapper for panels/blocks
    <Tag className={`card ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
