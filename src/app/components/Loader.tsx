/**
 * Loader Component
 * Loading spinner with national colors
 */
export function Loader({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className={`${sizes[size]} relative`}>
        <div className="absolute inset-0 border-4 border-[#E31837] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-[#FFCD00] border-b-transparent rounded-full animate-spin-reverse" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
}
