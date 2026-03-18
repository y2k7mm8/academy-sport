interface StatCardProps {
  value: string;
  label: string;
  accentColor?: "red" | "yellow";
}

/**
 * StatCard Component
 * Displays statistics in a consistent format
 */
export function StatCard({ 
  value, 
  label, 
  accentColor = "red" 
}: StatCardProps) {
  const borderColor = accentColor === "red" ? "border-[#E31837]" : "border-[#FFCD00]";
  const hoverTextColor = accentColor === "red" ? "group-hover:text-[#E31837]" : "group-hover:text-[#FFCD00]";

  return (
    <div className="relative group">
      <div className={`text-6xl md:text-[5.5rem] font-black tracking-tighter text-neutral-900 leading-none mb-4 ${hoverTextColor} transition-colors duration-500`}>
        {value}
      </div>
      <div className={`text-xs font-bold text-neutral-500 uppercase tracking-widest pl-2 border-l-2 ${borderColor}`}>
        {label}
      </div>
    </div>
  );
}
