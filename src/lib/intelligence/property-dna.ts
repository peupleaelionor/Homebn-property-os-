import type { RentalEstimateInput } from "./rental-estimator";

export type PropertyDNA = {
  shortTermPotential: number;
  midTermPotential: number;
  saleFlexibility: number;
  investorPotential: number;
  operationalComplexity: number;
  recommendedGuestProfiles: string[];
  summary: string;
};

export function analyzePropertyDNA(input: RentalEstimateInput): PropertyDNA {
  let shortTermPotential = 40;
  let midTermPotential = 45;
  let saleFlexibility = input.isForSale ? 75 : 55;
  let investorPotential = 40;
  let operationalComplexity = 35;

  if (input.nearTrainStation) {
    shortTermPotential += 10;
    midTermPotential += 15;
  }
  if (input.nearCityCenter) {
    shortTermPotential += 12;
    midTermPotential += 10;
  }
  if (input.bedrooms >= 3) {
    shortTermPotential += 10;
    investorPotential += 15;
  }
  if (input.surface > 100) {
    investorPotential += 15;
  }
  if (!input.furnished) {
    operationalComplexity += 20;
  }
  if (input.pool || input.garden || input.terrace) {
    shortTermPotential += 10;
  }
  if (
    input.ownerOnSite === "no" ||
    input.ownerOnSite === "wants_full_management"
  ) {
    operationalComplexity += 10;
  }

  const recommendedGuestProfiles = [
    input.nearTrainStation ? "professionnels en déplacement" : null,
    input.bedrooms >= 3 ? "familles en transition" : null,
    input.isForSale ? "séjours flexibles de courte/moyenne durée" : null,
    input.nearCityCenter ? "courts séjours urbains" : null,
  ].filter(Boolean) as string[];

  return {
    shortTermPotential: Math.min(shortTermPotential, 100),
    midTermPotential: Math.min(midTermPotential, 100),
    saleFlexibility: Math.min(saleFlexibility, 100),
    investorPotential: Math.min(investorPotential, 100),
    operationalComplexity: Math.min(operationalComplexity, 100),
    recommendedGuestProfiles,
    summary: input.isForSale
      ? "Bien adapté à une stratégie flexible permettant de générer du revenu pendant la vente."
      : "Bien adapté à une analyse de rendement courte, moyenne ou hybride.",
  };
}
