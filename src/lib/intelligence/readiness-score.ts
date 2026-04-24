import type { RentalEstimateInput } from "./rental-estimator";

export type ReadinessScore = {
  score: number;
  label: "à préparer" | "presque prêt" | "prêt";
  missingItems: string[];
};

export function calculateReadinessScore(
  input: RentalEstimateInput
): ReadinessScore {
  let score = 30;
  const missingItems: string[] = [];

  if (input.furnished) score += 20;
  else missingItems.push("Meubler le bien ou prévoir un pack ameublement.");

  if (input.parking) score += 8;
  if (input.nearTrainStation) score += 8;
  if (input.nearCityCenter) score += 8;

  if (input.propertyCondition === "good") score += 12;
  if (input.propertyCondition === "premium") score += 20;

  if (input.bedrooms >= 2) score += 8;
  if (input.sleeps >= 4) score += 6;
  if (input.garden || input.terrace) score += 6;

  if (
    input.ownerOnSite === "no" ||
    input.ownerOnSite === "wants_full_management"
  ) {
    missingItems.push(
      "Prévoir accès autonome, ménage local et reporting à distance."
    );
  }

  if (input.propertyCondition === "basic") {
    missingItems.push("Prévoir rafraîchissement léger avant photos.");
  }

  score = Math.min(score, 100);
  const label =
    score >= 75 ? "prêt" : score >= 55 ? "presque prêt" : "à préparer";

  return { score, label, missingItems };
}
