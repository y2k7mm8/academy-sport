/**
 * National Color Bar Component
 * Displays the Kyrgyz Republic's national colors (red and yellow)
 * as a decorative accent bar
 */
export function NationalColorBar({ 
  className = "", 
  height = "h-1.5" 
}: { 
  className?: string;
  height?: string;
}) {
  return (
    <div className={`flex w-full ${height} ${className}`}>
      <div className="w-1/2 bg-[#E31837]"></div>
      <div className="w-1/2 bg-[#FFCD00]"></div>
    </div>
  );
}
