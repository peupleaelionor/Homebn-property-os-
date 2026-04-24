import type { PropertyIntelligenceReport } from "@/lib/intelligence/property-intelligence-report";
import { RecommendedStrategy } from "./RecommendedStrategy";
import { ReadinessScoreCard } from "./ReadinessScoreCard";
import { VacancyLossCard } from "./VacancyLossCard";
import { InvestorLensCard } from "./InvestorLensCard";
import { AgencyModeCard } from "./AgencyModeCard";
import { NinetyDayPlan } from "./NinetyDayPlan";
import { PriorityActions } from "./PriorityActions";

interface Props {
  report: PropertyIntelligenceReport;
}

export function DecisionRoom({ report }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <RecommendedStrategy bestUse={report.bestUse} />
        <ReadinessScoreCard readiness={report.readiness} />
      </div>
      <PriorityActions upgrades={report.upgrades} />
      <VacancyLossCard vacancyLoss={report.vacancyLoss} />
      <div className="grid md:grid-cols-2 gap-6">
        <InvestorLensCard investorLens={report.investorLens} />
        <AgencyModeCard agencyMode={report.agencyMode} />
      </div>
      <NinetyDayPlan plan={report.ninetyDayPlan} />
      <p className="text-xs text-gray-400 text-center">{report.legalNotice}</p>
    </div>
  );
}
