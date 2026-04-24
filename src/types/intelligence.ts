export interface PropertyDNA {
  shortTermPotential: number;
  midTermPotential: number;
  saleFlexibility: number;
  investorPotential: number;
  operationalComplexity: number;
  recommendedGuestProfiles: string[];
  summary: string;
}

export type BestUseStrategy =
  | "sell_now"
  | "classic_rental"
  | "short_term"
  | "mid_term"
  | "hybrid"
  | "light_upgrade_then_rent"
  | "ninety_day_test";

export interface BestUseResult {
  strategy: BestUseStrategy;
  title: string;
  explanation: string;
  confidence: number;
}

export interface ReadinessScore {
  score: number;
  label: "à préparer" | "presque prêt" | "prêt";
  missingItems: string[];
}

export interface VacancyLossResult {
  monthlyCost: number;
  annualCost: number;
  monthlyOpportunityGap: number;
  annualOpportunityGap: number;
}

export interface UpgradeRecommendation {
  title: string;
  estimatedCost: number;
  impact: "faible" | "moyen" | "fort";
  reason: string;
  priority: number;
}

export interface InvestorLensResult {
  annualGrossRevenue: number;
  annualOwnerNet: number;
  grossYield: number | null;
  activationCost: number;
  paybackMonths: number;
  investorScore: number;
  summary: string;
}

export interface AgencyModeResult {
  isMandateDormant: boolean;
  action: string;
  ownerArgument: string;
  agencyOpportunityScore: number;
}

export interface LeadScoreResult {
  score: number;
  label: "faible" | "moyen" | "fort" | "prioritaire";
  reasons: string[];
}
