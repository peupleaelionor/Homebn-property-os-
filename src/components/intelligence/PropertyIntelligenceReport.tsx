import type { PropertyIntelligenceReport } from "@/lib/intelligence/property-intelligence-report";
import { DecisionRoom } from "./DecisionRoom";
import { formatCurrency } from "@/lib/utils";

interface Props {
  report: PropertyIntelligenceReport;
}

export function PropertyIntelligenceReportView({ report }: Props) {
  return (
    <div className="space-y-8">
      {/* Summary header */}
      <div className="rounded-xl border border-[var(--homebn-navy)]/10 bg-[var(--homebn-navy)]/5 p-6">
        <p className="text-xs font-medium text-[var(--homebn-navy)] uppercase tracking-wide mb-1">
          Rapport intelligent Homebn
        </p>
        <h2 className="text-2xl font-bold text-[var(--homebn-navy)]">
          {report.summary.recommendedAction}
        </h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Revenu réaliste",
              value: `${formatCurrency(report.estimate.realisticMonthlyRevenue)}/mois`,
            },
            {
              label: "Net propriétaire",
              value: `${formatCurrency(report.estimate.ownerNetEstimate)}/mois`,
            },
            {
              label: "Score Homebn",
              value: `${report.leadScore.score}/100`,
            },
            {
              label: "Préparation",
              value: `${report.readiness.score}/100 — ${report.readiness.label}`,
            },
          ].map((kpi) => (
            <div key={kpi.label}>
              <p className="text-xs text-[var(--homebn-navy)]/70">{kpi.label}</p>
              <p className="text-lg font-bold text-[var(--homebn-navy)]">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Full decision room */}
      <DecisionRoom report={report} />
    </div>
  );
}
