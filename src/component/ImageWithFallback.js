import { useState } from "react";

export default function ImageWithFallback({ src, alt, className }) {
  const [error, setError] = useState(false);

  if (error) {
    return <div className={`bg-gray-200 ${className}`} aria-label={alt} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
