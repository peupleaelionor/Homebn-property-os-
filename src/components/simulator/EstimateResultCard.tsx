import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { PropertyIntelligenceReport } from "@/lib/intelligence/property-intelligence-report";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { TrendingUp, RotateCcw, AlertCircle } from "lucide-react";

interface Props {
  report: PropertyIntelligenceReport;
  onReset: () => void;
}

const labelColors: Record<string, string> = {
  faible: "secondary",
  moyen: "secondary",
  fort: "default",
  prioritaire: "default",
};

export function EstimateResultCard({ report, onReset }: Props) {
  const { estimate, bestUse, readiness, leadScore, vacancyLoss } = report;

  return (
    <div className="space-y-6">
      {/* Revenue cards */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: "Prudent",
            value: estimate.conservativeMonthlyRevenue,
            sub: `${estimate.conservativeNightlyRate}€/nuit`,
          },
          {
            label: "Réaliste",
            value: estimate.realisticMonthlyRevenue,
            sub: `${estimate.realisticNightlyRate}€/nuit`,
            highlight: true,
          },
          {
            label: "Ambitieux",
            value: estimate.ambitiousMonthlyRevenue,
            sub: `${estimate.ambitiousNightlyRate}€/nuit`,
          },
        ].map((scenario) => (
          <div
            key={scenario.label}
            className={`rounded-xl p-4 text-center border ${
              scenario.highlight
                ? "border-[var(--homebn-navy)] bg-[var(--homebn-navy)] text-white"
                : "border-gray-100 bg-white"
            }`}
          >
            <p
              className={`text-xs font-medium mb-1 ${
                scenario.highlight ? "text-white/70" : "text-gray-500"
              }`}
            >
              {scenario.label}
            </p>
            <p
              className={`text-xl font-bold ${
                scenario.highlight ? "text-white" : "text-gray-900"
              }`}
            >
              {formatCurrency(scenario.value)}
            </p>
            <p
              className={`text-xs mt-0.5 ${
                scenario.highlight ? "text-white/60" : "text-gray-400"
              }`}
            >
              {scenario.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Net owner estimate */}
      <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Revenu net propriétaire estimé</p>
          <p className="text-2xl font-bold text-[var(--homebn-navy)] mt-0.5">
            {formatCurrency(estimate.ownerNetEstimate)}/mois
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Après frais plateforme, charges et commission Homebn
          </p>
        </div>
        <TrendingUp size={32} className="text-green-500" strokeWidth={1.5} />
      </div>

      {/* Score & Strategy */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-gray-700">Score Homebn</p>
            <Badge
              variant={
                (labelColors[leadScore.label] as "default" | "secondary") ??
                "secondary"
              }
            >
              {leadScore.label}
            </Badge>
          </div>
          <Progress value={leadScore.score} className="mb-1" />
          <p className="text-xs text-gray-500">{leadScore.score}/100</p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <p className="text-sm font-medium text-gray-700 mb-1">
            Stratégie recommandée
          </p>
          <p className="font-semibold text-[var(--homebn-navy)]">
            {bestUse.title}
          </p>
          <p className="text-xs text-gray-500 mt-1">{bestUse.explanation}</p>
        </div>
      </div>

      {/* Vacancy loss */}
      <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
        <div className="flex items-start gap-2">
          <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-800">
              Coût de vacance actuel
            </p>
            <p className="text-xs text-amber-700 mt-0.5">
              Ce bien vide vous coûte{" "}
              <strong>{formatCurrency(vacancyLoss.monthlyCost)}/mois</strong> en
              charges. L'opportunité manquée représente{" "}
              <strong>
                {formatCurrency(vacancyLoss.monthlyOpportunityGap)}/mois
              </strong>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Readiness */}
      <div className="rounded-xl border border-gray-100 bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-700">Préparation du bien</p>
          <span className="text-xs text-gray-500">
            {readiness.score}/100 — {readiness.label}
          </span>
        </div>
        <Progress value={readiness.score} />
        {readiness.missingItems.length > 0 && (
          <ul className="mt-2 space-y-1">
            {readiness.missingItems.map((item) => (
              <li key={item} className="text-xs text-gray-500 flex items-start gap-1">
                <span className="text-amber-500 mt-0.5">•</span> {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Legal notice */}
      <p className="text-xs text-gray-400 text-center">
        {report.legalNotice}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" className="flex-1">
          <Link href="/contact">Recevoir l'étude complète</Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={onReset}
          className="flex items-center gap-2"
        >
          <RotateCcw size={14} />
          Nouvelle estimation
        </Button>
      </div>
    </div>
  );
}
