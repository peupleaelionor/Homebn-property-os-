import type { RentalEstimateResult } from "./rental-estimator";

export type InvestorLensInput = {
  estimatedPropertyValue?: number;
  activationCost?: number;
  estimate: RentalEstimateResult;
};

export type InvestorLensResult = {
  annualGrossRevenue: number;
  annualOwnerNet: number;
  grossYield: number | null;
  activationCost: number;
  paybackMonths: number;
  investorScore: number;
  summary: string;
};

export function analyzeInvestorLens(
  input: InvestorLensInput
): InvestorLensResult {
  const annualGrossRevenue = input.estimate.realisticMonthlyRevenue * 12;
  const annualOwnerNet = input.estimate.ownerNetEstimate * 12;
  const activationCost = input.activationCost ?? 4500;

  const grossYield = input.estimatedPropertyValue
    ? Number(
        ((annualGrossRevenue / input.estimatedPropertyValue) * 100).toFixed(2)
      )
    : null;

  const paybackMonths = Math.max(
    1,
    Math.ceil(activationCost / Math.max(input.estimate.ownerNetEstimate, 1))
  );

  let investorScore = 50;
  if (annualGrossRevenue >= 18000) investorScore += 15;
  if (annualOwnerNet >= 10000) investorScore += 15;
  if (paybackMonths <= 6) investorScore += 10;
  if (grossYield && grossYield >= 5) investorScore += 10;
  investorScore = Math.min(investorScore, 100);

  return {
    annualGrossRevenue,
    annualOwnerNet,
    grossYield,
    activationCost,
    paybackMonths,
    investorScore,
    summary:
      investorScore >= 75
        ? "Bien intéressant pour un investisseur cherchant un actif sous-exploité."
        : "Potentiel investisseur à valider avec données locales et coût réel d'activation.",
  };
}
