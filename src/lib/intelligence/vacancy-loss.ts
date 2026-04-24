export type VacancyLossInput = {
  propertyTaxMonthly?: number;
  insuranceMonthly?: number;
  maintenanceMonthly?: number;
  utilitiesMonthly?: number;
  gardenMonthly?: number;
  realisticMonthlyRevenue: number;
};

export type VacancyLossResult = {
  monthlyCost: number;
  annualCost: number;
  monthlyOpportunityGap: number;
  annualOpportunityGap: number;
};

export function calculateVacancyLoss(
  input: VacancyLossInput
): VacancyLossResult {
  const monthlyCost =
    (input.propertyTaxMonthly ?? 90) +
    (input.insuranceMonthly ?? 35) +
    (input.maintenanceMonthly ?? 60) +
    (input.utilitiesMonthly ?? 25) +
    (input.gardenMonthly ?? 40);

  const monthlyOpportunityGap = monthlyCost + input.realisticMonthlyRevenue;

  return {
    monthlyCost,
    annualCost: monthlyCost * 12,
    monthlyOpportunityGap,
    annualOpportunityGap: monthlyOpportunityGap * 12,
  };
}
