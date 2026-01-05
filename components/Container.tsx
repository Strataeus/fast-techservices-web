/**
 * Stub Container Component
 * Created to unblock build for legacy pages.
 * TODO: Proper implementation in PR3+
 */

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, ...props }: ContainerProps) {
  return (
    <div {...props} style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
      {children}
    </div>
  );
}
