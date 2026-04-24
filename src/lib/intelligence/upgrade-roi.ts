import type { RentalEstimateInput } from "./rental-estimator";

export type UpgradeRecommendation = {
  title: string;
  estimatedCost: number;
  impact: "faible" | "moyen" | "fort";
  reason: string;
  priority: number;
};

export function recommendUpgrades(
  input: RentalEstimateInput
): UpgradeRecommendation[] {
  const upgrades: UpgradeRecommendation[] = [];

  upgrades.push({
    title: "Shooting photo premium",
    estimatedCost: 250,
    impact: "fort",
    reason: "Améliore la conversion des annonces et la perception de valeur.",
    priority: 1,
  });

  if (!input.furnished) {
    upgrades.push({
      title: "Pack ameublement essentiel",
      estimatedCost: 2500,
      impact: "fort",
      reason: "Rend le bien exploitable en courte ou moyenne durée.",
      priority: 1,
    });
  }

  upgrades.push({
    title: "Serrure connectée ou boîte à clés sécurisée",
    estimatedCost: 180,
    impact: "fort",
    reason: "Permet une gestion à distance plus fluide.",
    priority: 2,
  });

  upgrades.push({
    title: "Coin bureau simple",
    estimatedCost: 250,
    impact: "moyen",
    reason: "Rend le bien plus attractif pour les professionnels en mission.",
    priority: 3,
  });

  if (input.propertyCondition === "basic") {
    upgrades.push({
      title: "Rafraîchissement léger",
      estimatedCost: 900,
      impact: "fort",
      reason: "Améliore la perception qualité et réduit les objections.",
      priority: 2,
    });
  }

  return upgrades.sort((a, b) => a.priority - b.priority);
}
