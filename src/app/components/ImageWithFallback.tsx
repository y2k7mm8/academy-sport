import { ImgHTMLAttributes, useState } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc,
  ...props
}: Props) {
  const [errored, setErrored] = useState(false);

  const defaultFallback =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect fill='%23e5e7eb' width='100%25' height='100%25'/></svg>";

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={errored ? (fallbackSrc ?? defaultFallback) : (src as string)}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
