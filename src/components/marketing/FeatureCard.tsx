import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white p-6 hover:border-[var(--homebn-navy)]/20 hover:shadow-md transition-all duration-200">
      <div className="mb-4 w-10 h-10 rounded-lg bg-[var(--homebn-navy)]/5 flex items-center justify-center">
        <Icon
          size={20}
          className="text-[var(--homebn-navy)]"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
