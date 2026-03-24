import { ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  href?: string; // internal route (react-router `to`)
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

/**
 * Button Component
 * Consistent button styles across the platform
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  icon,
  iconPosition = "right",
  type = "button",
  disabled,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "font-bold uppercase tracking-widest inline-flex items-center justify-center gap-4 transition-all duration-300";

  const variants = {
    primary: "bg-white text-neutral-950 hover:bg-[#E31837] hover:text-white",
    secondary: "bg-[#E31837] text-white hover:bg-neutral-950",
    outline:
      "border border-white/30 text-white hover:border-white hover:bg-white/10",
    ghost: "text-neutral-900 hover:text-[#E31837]",
  };

  const sizes = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-5 text-sm",
    lg: "px-12 py-6 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <Link to={href} className={cn(classes, "group")} {...(rest as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(classes, "group")}
      {...rest}
    >
      {content}
    </button>
  );
}
