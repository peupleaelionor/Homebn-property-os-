import type { UpgradeRecommendation } from "@/lib/intelligence/upgrade-roi";
import { Wrench } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  upgrades: UpgradeRecommendation[];
}

const impactColors: Record<string, string> = {
  fort: "bg-green-100 text-green-700",
  moyen: "bg-yellow-100 text-yellow-700",
  faible: "bg-gray-100 text-gray-600",
};

export function PriorityActions({ upgrades }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      <div className="flex items-center gap-2 mb-4">
        <Wrench size={16} className="text-gray-500" strokeWidth={1.5} />
        <p className="text-sm font-semibold text-gray-700">Actions prioritaires</p>
      </div>
      <div className="space-y-3">
        {upgrades.map((u, i) => (
          <div
            key={i}
            className="flex items-start justify-between gap-4 py-2 border-b border-gray-50 last:border-0"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{u.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{u.reason}</p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  impactColors[u.impact] ?? impactColors.faible
                }`}
              >
                {u.impact}
              </span>
              <span className="text-xs text-gray-400">
                ~{formatCurrency(u.estimatedCost)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
