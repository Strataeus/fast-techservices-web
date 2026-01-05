/**
 * Stub HeroBase Component
 * Created to unblock build for legacy pages.
 * TODO: Proper implementation in PR3+
 */

interface HeroBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function HeroBase({ children, ...props }: HeroBaseProps) {
  return (
    <div {...props} style={{ padding: "3rem 0", ...props.style }}>
      {children}
    </div>
  );
}
