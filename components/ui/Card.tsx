/**
 * Stub Card Component
 * Created to unblock build for legacy pages.
 * TODO: Proper implementation in PR3+
 */

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  return (
    <div {...props} style={{ padding: "1.5rem", borderRadius: "0.5rem", border: "1px solid #e5e7eb", ...props.style }}>
      {children}
    </div>
  );
}
