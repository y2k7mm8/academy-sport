import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  labelColor?: "red" | "yellow" | "white";
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * SectionHeader Component
 * Consistent section headers across the site
 */
export function SectionHeader({
  label,
  labelColor = "red",
  title,
  subtitle,
  align = "left",
  className = ""
}: SectionHeaderProps) {
  const labelColorClasses = {
    red: "text-[#E31837] bg-[#E31837]",
    yellow: "text-[#FFCD00] bg-[#FFCD00]",
    white: "text-white bg-white"
  };

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center"
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} ${className}`}>
      {label && (
        <div className={`text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-4 ${labelColorClasses[labelColor]}`}>
          <span className={`w-4 h-4 ${labelColorClasses[labelColor].split(' ')[1]}`}></span>
          {label}
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-neutral-900 mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-neutral-500 font-medium max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
