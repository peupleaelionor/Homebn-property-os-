import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

export function Progress({
  className,
  value = 0,
  max = 100,
  ...props
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-gray-100",
        className
      )}
      {...props}
    >
      <div
        className="h-full rounded-full bg-[var(--homebn-navy)] transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
