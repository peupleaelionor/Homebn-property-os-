import type { InvestorLensResult } from "@/lib/intelligence/investor-lens";
import { formatCurrency } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

interface Props {
  investorLens: InvestorLensResult;
}

export function InvestorLensCard({ investorLens }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={16} className="text-[var(--homebn-navy)]" strokeWidth={1.5} />
        <p className="text-sm font-semibold text-gray-700">Vue investisseur</p>
        <span className="ml-auto text-xs text-gray-400">
          Score {investorLens.investorScore}/100
        </span>
      </div>
      <div className="space-y-2">
        {[
          {
            label: "Revenu brut annuel",
            value: formatCurrency(investorLens.annualGrossRevenue),
          },
          {
            label: "Revenu net annuel",
            value: formatCurrency(investorLens.annualOwnerNet),
          },
          {
            label: "Rendement brut",
            value: investorLens.grossYield
              ? `${investorLens.grossYield} %`
              : "Valeur bien non renseignée",
          },
          {
            label: "Retour sur activation",
            value: `${investorLens.paybackMonths} mois`,
          },
          {
            label: "Coût d'activation",
            value: formatCurrency(investorLens.activationCost),
          },
        ].map((row) => (
          <div
            key={row.label}
            className="flex justify-between text-sm border-b border-gray-50 pb-1.5 last:border-0"
          >
            <span className="text-gray-500">{row.label}</span>
            <span className="font-medium text-gray-900">{row.value}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-400 italic">
        {investorLens.summary}
      </p>
    </div>
  );
}
