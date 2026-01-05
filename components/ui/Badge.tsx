/**
 * Stub Badge Component
 * Created to unblock build for legacy pages.
 * TODO: Proper implementation in PR3+
 */

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export default function Badge({ children, ...props }: BadgeProps) {
  return (
    <span {...props} style={{ display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontSize: "0.875rem", ...props.style }}>
      {children}
    </span>
  );
}
