import {
  estimateRentalRevenue,
  type RentalEstimateInput,
} from "./rental-estimator";
import { scoreLead } from "./lead-scoring";
import { analyzePropertyDNA } from "./property-dna";
import { determineBestUse } from "./best-use-engine";
import { calculateReadinessScore } from "./readiness-score";
import { calculateVacancyLoss } from "./vacancy-loss";
import { recommendUpgrades } from "./upgrade-roi";
import { analyzeInvestorLens } from "./investor-lens";
import { analyzeAgencyOpportunity } from "./agency-mode";

export function generatePropertyIntelligenceReport(
  input: RentalEstimateInput
) {
  const estimate = estimateRentalRevenue(input);
  const leadScore = scoreLead(input);
  const dna = analyzePropertyDNA(input);
  const bestUse = determineBestUse(input, estimate, dna);
  const readiness = calculateReadinessScore(input);
  const vacancyLoss = calculateVacancyLoss({
    realisticMonthlyRevenue: estimate.realisticMonthlyRevenue,
  });
  const upgrades = recommendUpgrades(input);
  const investorLens = analyzeInvestorLens({
    estimate,
    estimatedPropertyValue: undefined,
  });
  const agencyMode = analyzeAgencyOpportunity({
    isForSale: input.isForSale,
    daysOnMarket: input.isForSale ? 120 : 0,
    estimate,
  });

  return {
    summary: {
      title: "Rapport intelligent Homebn",
      recommendedAction:
        input.ownerOnSite === "no" ||
        input.ownerOnSite === "wants_full_management"
          ? "Homebn Full Care recommandé"
          : bestUse.title,
    },
    estimate,
    leadScore,
    dna,
    bestUse,
    readiness,
    vacancyLoss,
    upgrades,
    investorLens,
    agencyMode,
    ninetyDayPlan: [
      "Audit du bien et vérification des conditions d'exploitation.",
      "Préparation photos, accès, ménage et annonce.",
      "Mise en ligne contrôlée avec calendrier compatible.",
      "Suivi des premiers voyageurs et optimisation.",
      "Bilan après 90 jours avec décision : continuer, ajuster ou arrêter.",
    ],
    legalNotice:
      "Estimation indicative. Les revenus dépendent de l'adresse exacte, de la saison, de l'état du bien, de la réglementation locale et de la demande.",
  };
}

export type PropertyIntelligenceReport = ReturnType<
  typeof generatePropertyIntelligenceReport
>;
