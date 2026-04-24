import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "gold";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const variantClasses: Record<string, string> = {
  default:
    "bg-[var(--homebn-navy)] text-white hover:bg-[#243561] shadow-sm",
  outline:
    "border border-[var(--homebn-navy)] text-[var(--homebn-navy)] bg-transparent hover:bg-[var(--homebn-navy)] hover:text-white",
  ghost:
    "text-gray-700 hover:bg-gray-100 bg-transparent",
  link:
    "text-[var(--homebn-navy)] underline-offset-4 hover:underline bg-transparent p-0 h-auto",
  gold:
    "bg-[var(--homebn-gold)] text-[#1a1a1a] hover:bg-[#b8944a] shadow-sm",
};

const sizeClasses: Record<string, string> = {
  sm: "h-8 px-3 text-sm rounded-md",
  md: "h-10 px-5 text-sm rounded-lg",
  lg: "h-12 px-7 text-base rounded-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "md", disabled, ...props },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--homebn-navy)] disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant] ?? variantClasses.default,
        sizeClasses[size] ?? sizeClasses.md,
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
