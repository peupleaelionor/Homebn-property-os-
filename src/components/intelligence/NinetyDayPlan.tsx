import { CalendarDays } from "lucide-react";

interface Props {
  plan: string[];
}

export function NinetyDayPlan({ plan }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays size={16} className="text-[var(--homebn-navy)]" strokeWidth={1.5} />
        <p className="text-sm font-semibold text-gray-700">Plan 90 jours</p>
      </div>
      <ol className="space-y-3">
        {plan.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[var(--homebn-navy)]/10 text-[var(--homebn-navy)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="text-sm text-gray-600">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
