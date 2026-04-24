import type { PropertyIntelligenceReport } from "@/lib/intelligence/property-intelligence-report";
import { formatCurrency, formatPercent } from "@/lib/utils";

export interface ReportSection {
  title: string;
  content: string;
}

export function buildReportSections(
  report: PropertyIntelligenceReport
): ReportSection[] {
  return [
    {
      title: "Estimation des revenus",
      content: `Revenu réaliste estimé : ${formatCurrency(report.estimate.realisticMonthlyRevenue)}/mois.
Revenu prudent : ${formatCurrency(report.estimate.conservativeMonthlyRevenue)}/mois.
Revenu ambitieux : ${formatCurrency(report.estimate.ambitiousMonthlyRevenue)}/mois.
Revenu net propriétaire estimé : ${formatCurrency(report.estimate.ownerNetEstimate)}/mois.
Taux d'occupation : ${formatPercent(report.estimate.occupancyRate)}.`,
    },
    {
      title: "Stratégie recommandée",
      content: `${report.bestUse.title} — ${report.bestUse.explanation} (confiance : ${report.bestUse.confidence}%)`,
    },
    {
      title: "Score de préparation",
      content: `${report.readiness.score}/100 — ${report.readiness.label}.
${report.readiness.missingItems.length > 0 ? "Points à corriger : " + report.readiness.missingItems.join(", ") : "Le bien est prêt à être activé."}`,
    },
    {
      title: "Coût de vacance",
      content: `Ce bien vide coûte ${formatCurrency(report.vacancyLoss.monthlyCost)}/mois en charges fixes.
L'opportunité manquée représente ${formatCurrency(report.vacancyLoss.monthlyOpportunityGap)}/mois.`,
    },
    {
      title: "Plan 90 jours",
      content: report.ninetyDayPlan.map((s, i) => `${i + 1}. ${s}`).join("\n"),
    },
    {
      title: "Mention légale",
      content: report.legalNotice,
    },
  ];
}

export function buildReportTitle(city: string, propertyType: string): string {
  return `Rapport Homebn — ${propertyType} à ${city}`;
}
