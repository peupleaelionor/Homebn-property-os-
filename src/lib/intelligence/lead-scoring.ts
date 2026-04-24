import type { RentalEstimateInput } from "./rental-estimator";

export type LeadScoreResult = {
  score: number;
  label: "faible" | "moyen" | "fort" | "prioritaire";
  reasons: string[];
};

export function scoreLead(input: RentalEstimateInput): LeadScoreResult {
  let score = 0;
  const reasons: string[] = [];

  if (input.propertyType === "house") {
    score += 20;
    reasons.push("Maison adaptée à une stratégie familiale ou hybride.");
  }
  if (input.propertyType === "villa") {
    score += 25;
    reasons.push("Villa avec potentiel premium.");
  }
  if (input.surface > 80) {
    score += 15;
    reasons.push("Surface confortable.");
  }
  if (input.bedrooms >= 3) {
    score += 15;
    reasons.push("Trois chambres ou plus.");
  }
  if (input.sleeps >= 6) {
    score += 10;
    reasons.push("Capacité voyageurs intéressante.");
  }
  if (input.nearTrainStation) {
    score += 10;
    reasons.push("Proximité gare utile pour voyageurs et professionnels.");
  }
  if (input.nearCityCenter) {
    score += 10;
    reasons.push("Proximité centre-ville.");
  }
  if (input.parking) {
    score += 8;
    reasons.push("Stationnement disponible.");
  }
  if (input.garden) {
    score += 8;
    reasons.push("Extérieur attractif.");
  }
  if (input.propertyCondition === "premium") {
    score += 15;
    reasons.push("État premium.");
  }
  if (
    input.ownerOnSite === "no" ||
    input.ownerOnSite === "wants_full_management"
  ) {
    score += 12;
    reasons.push("Besoin clair de gestion complète.");
  }
  if (input.isForSale) {
    score += 10;
    reasons.push("Bien en vente : stratégie 90 jours pertinente.");
  }

  score = Math.min(score, 100);
  const label =
    score >= 80
      ? "prioritaire"
      : score >= 60
        ? "fort"
        : score >= 40
          ? "moyen"
          : "faible";

  return { score, label, reasons };
}
