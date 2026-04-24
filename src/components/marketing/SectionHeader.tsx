import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--homebn-navy)] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-gray-500 text-lg leading-relaxed",
            centered && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
