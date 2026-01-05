/**
 * Stub Section Component
 * Created to unblock build for legacy pages.
 * TODO: Proper implementation in PR3+
 */

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Section({ children, ...props }: SectionProps) {
  return (
    <section {...props} style={{ padding: "3rem 0", ...props.style }}>
      {children}
    </section>
  );
}
