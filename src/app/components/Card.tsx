import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "bordered" | "elevated";
  hover?: boolean;
  className?: string;
}

/**
 * Card Component
 * Reusable card container for content blocks
 */
export function Card({ 
  children, 
  variant = "default", 
  hover = true,
  className = "" 
}: CardProps) {
  const variants = {
    default: "bg-white",
    bordered: "bg-white border border-neutral-200",
    elevated: "bg-white shadow-lg"
  };

  const hoverStyles = hover ? "hover:border-neutral-900 transition-colors duration-300" : "";

  return (
    <div className={cn(
      variants[variant],
      hoverStyles,
      className
    )}>
      {children}
    </div>
  );
}
