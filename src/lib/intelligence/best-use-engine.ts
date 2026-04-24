import type {
  RentalEstimateInput,
  RentalEstimateResult,
} from "./rental-estimator";
import type { PropertyDNA } from "./property-dna";

export type BestUseStrategy =
  | "sell_now"
  | "classic_rental"
  | "short_term"
  | "mid_term"
  | "hybrid"
  | "light_upgrade_then_rent"
  | "ninety_day_test";

export type BestUseResult = {
  strategy: BestUseStrategy;
  title: string;
  explanation: string;
  confidence: number;
};

export function determineBestUse(
  input: RentalEstimateInput,
  estimate: RentalEstimateResult,
  dna: PropertyDNA
): BestUseResult {
  if (input.isForSale && estimate.realisticMonthlyRevenue >= 1200) {
    return {
      strategy: "ninety_day_test",
      title: "Test Homebn 90 jours",
      explanation:
        "Le bien peut générer du revenu pendant la vente sans bloquer totalement le projet immobilier.",
      confidence: 86,
    };
  }

  if (!input.furnished) {
    return {
      strategy: "light_upgrade_then_rent",
      title: "Amélioration légère puis activation",
      explanation:
        "Le bien nécessite quelques actions simples avant d'être exploité correctement.",
      confidence: 78,
    };
  }

  if (dna.midTermPotential > dna.shortTermPotential) {
    return {
      strategy: "mid_term",
      title: "Moyenne durée",
      explanation:
        "La moyenne durée offre un bon équilibre entre revenu, stabilité et gestion simplifiée.",
      confidence: 80,
    };
  }

  if (dna.shortTermPotential >= 70) {
    return {
      strategy: "hybrid",
      title: "Stratégie hybride",
      explanation:
        "Le bien peut combiner moyenne durée et courts séjours pour garder flexibilité et rendement.",
      confidence: 84,
    };
  }

  return {
    strategy: "classic_rental",
    title: "Location classique ou test limité",
    explanation:
      "Le potentiel existe mais doit être validé avec prudence avant une exploitation complète.",
    confidence: 65,
  };
}
