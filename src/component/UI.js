export function Button({ children, className = "", size, variant, ...props }) {
  return (
    <button className={`inline-flex items-center justify-center rounded-lg cursor-pointer border-0 ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
