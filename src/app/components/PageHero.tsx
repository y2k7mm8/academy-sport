import { ReactNode } from "react";

interface PageHeroProps {
  category?: string;
  categoryColor?: "red" | "yellow";
  title: ReactNode;
  subtitle?: string;
  borderColor?: "red" | "yellow";
  backgroundImage?: string;
  minHeight?: string;
}

/**
 * PageHero Component
 * Reusable hero section for internal pages
 */
export function PageHero({
  category,
  categoryColor = "red",
  title,
  subtitle,
  borderColor = "yellow",
  backgroundImage,
  minHeight = "h-[60vh] min-h-[500px]"
}: PageHeroProps) {
  const categoryColorClass = categoryColor === "red" ? "#E31837" : "#FFCD00";
  const borderColorClass = borderColor === "red" ? "border-[#E31837]" : "border-[#FFCD00]";

  return (
    <section className={`relative ${minHeight} bg-neutral-950 flex flex-col justify-end pb-20 border-b-8 ${borderColorClass}`}>
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
          </div>
        </>
      )}
      
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {category && (
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-[var(--category-color)]" style={{ '--category-color': categoryColorClass } as React.CSSProperties}></span>
            <span 
              className="font-bold tracking-[0.2em] text-sm uppercase"
              style={{ color: categoryColorClass }}
            >
              {category}
            </span>
          </div>
        )}
        
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
          {title}
        </h1>
        
        {subtitle && (
          <p className={`text-xl text-neutral-400 max-w-2xl font-medium border-l-4 ${borderColorClass} pl-6`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
