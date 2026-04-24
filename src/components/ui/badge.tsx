import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive";
}

const variantClasses: Record<string, string> = {
  default: "bg-[var(--homebn-navy)] text-white",
  secondary: "bg-gray-100 text-gray-800",
  outline: "border border-gray-300 text-gray-700 bg-transparent",
  destructive: "bg-red-100 text-red-800",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant] ?? variantClasses.default,
        className
      )}
      {...props}
    />
  );
}
