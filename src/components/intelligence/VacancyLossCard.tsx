import type { VacancyLossResult } from "@/lib/intelligence/vacancy-loss";
import { formatCurrency } from "@/lib/utils";
import { TrendingDown } from "lucide-react";

interface Props {
  vacancyLoss: VacancyLossResult;
}

export function VacancyLossCard({ vacancyLoss }: Props) {
  return (
    <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
      <div className="flex items-center gap-2 mb-3">
        <TrendingDown size={16} className="text-amber-600" strokeWidth={1.5} />
        <p className="text-sm font-semibold text-amber-800">Coût de vacance</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Charges/mois", value: formatCurrency(vacancyLoss.monthlyCost) },
          { label: "Charges/an", value: formatCurrency(vacancyLoss.annualCost) },
          {
            label: "Opportunité manquée/mois",
            value: formatCurrency(vacancyLoss.monthlyOpportunityGap),
          },
          {
            label: "Opportunité manquée/an",
            value: formatCurrency(vacancyLoss.annualOpportunityGap),
          },
        ].map((kpi) => (
          <div key={kpi.label}>
            <p className="text-xs text-amber-700">{kpi.label}</p>
            <p className="text-lg font-bold text-amber-900 mt-0.5">{kpi.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
