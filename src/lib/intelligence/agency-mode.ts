import type { RentalEstimateResult } from "./rental-estimator";

export type AgencyModeInput = {
  daysOnMarket?: number;
  isForSale: boolean;
  estimate: RentalEstimateResult;
};

export type AgencyModeResult = {
  isMandateDormant: boolean;
  action: string;
  ownerArgument: string;
  agencyOpportunityScore: number;
};

export function analyzeAgencyOpportunity(
  input: AgencyModeInput
): AgencyModeResult {
  const days = input.daysOnMarket ?? 0;
  const isMandateDormant = input.isForSale && days >= 90;

  let agencyOpportunityScore = 40;
  if (isMandateDormant) agencyOpportunityScore += 25;
  if (input.estimate.realisticMonthlyRevenue >= 1200)
    agencyOpportunityScore += 20;
  if (input.estimate.ownerNetEstimate >= 700) agencyOpportunityScore += 10;
  agencyOpportunityScore = Math.min(agencyOpportunityScore, 100);

  return {
    isMandateDormant,
    action: isMandateDormant
      ? "Proposer un test Homebn 90 jours au propriétaire."
      : "Présenter Homebn comme option complémentaire.",
    ownerArgument:
      "Votre bien peut générer du revenu pendant la période de vente, sans remplacer votre stratégie de vente.",
    agencyOpportunityScore,
  };
}
