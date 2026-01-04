/**
 * Stub SectionBand Component
 * Created to unblock build for legacy pages.
 * TODO: Proper implementation in PR3+
 */

interface SectionBandProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function SectionBand({ children, ...props }: SectionBandProps) {
  return (
    <section {...props} style={{ padding: "2rem 0", ...props.style }}>
      {children}
    </section>
  );
}
