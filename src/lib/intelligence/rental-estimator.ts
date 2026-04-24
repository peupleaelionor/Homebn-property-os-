export type PropertyType = "studio" | "apartment" | "house" | "villa";
export type PropertyCondition = "basic" | "good" | "premium";
export type RentalStrategy = "short_term" | "mid_term" | "hybrid";

export type RentalEstimateInput = {
  city: string;
  postalCode?: string;
  propertyType: PropertyType;
  surface: number;
  bedrooms: number;
  sleeps: number;
  parking: boolean;
  garden: boolean;
  terrace: boolean;
  pool: boolean;
  nearTrainStation: boolean;
  nearCityCenter: boolean;
  furnished: boolean;
  propertyCondition: PropertyCondition;
  strategy: RentalStrategy;
  ownerOnSite: "yes" | "no" | "sometimes" | "wants_full_management";
  isForSale: boolean;
};

export type RentalEstimateResult = {
  conservativeNightlyRate: number;
  realisticNightlyRate: number;
  ambitiousNightlyRate: number;
  conservativeMonthlyRevenue: number;
  realisticMonthlyRevenue: number;
  ambitiousMonthlyRevenue: number;
  platformFees: number;
  operatingCosts: number;
  managementCommission: number;
  ownerNetEstimate: number;
  occupancyRate: number;
  recommendation: string;
};

export function estimateRentalRevenue(
  input: RentalEstimateInput
): RentalEstimateResult {
  let baseRate = 75;
  if (input.propertyType === "house") baseRate += 25;
  if (input.propertyType === "villa") baseRate += 50;
  if (input.surface > 80) baseRate += 20;
  if (input.surface > 120) baseRate += 40;
  if (input.bedrooms >= 3) baseRate += 25;
  if (input.sleeps >= 6) baseRate += 30;
  if (input.parking) baseRate += 10;
  if (input.garden) baseRate += 15;
  if (input.terrace) baseRate += 10;
  if (input.pool) baseRate += 50;
  if (input.nearTrainStation) baseRate += 15;
  if (input.nearCityCenter) baseRate += 10;
  if (!input.furnished) baseRate *= 0.8;
  if (input.propertyCondition === "premium") baseRate *= 1.25;
  if (input.propertyCondition === "basic") baseRate *= 0.85;

  const conservativeNightlyRate = Math.round(baseRate * 0.85);
  const realisticNightlyRate = Math.round(baseRate);
  const ambitiousNightlyRate = Math.round(baseRate * 1.2);

  const occupancyRate =
    input.strategy === "short_term"
      ? 0.48
      : input.strategy === "mid_term"
        ? 0.65
        : 0.56;

  const conservativeMonthlyRevenue = Math.round(
    conservativeNightlyRate * 30 * Math.max(occupancyRate - 0.12, 0.2)
  );
  const realisticMonthlyRevenue = Math.round(
    realisticNightlyRate * 30 * occupancyRate
  );
  const ambitiousMonthlyRevenue = Math.round(
    ambitiousNightlyRate * 30 * Math.min(occupancyRate + 0.08, 0.85)
  );

  const platformFees = Math.round(realisticMonthlyRevenue * 0.08);
  const operatingCosts = Math.round(realisticMonthlyRevenue * 0.12);
  const managementCommissionRate =
    input.ownerOnSite === "wants_full_management" || input.ownerOnSite === "no"
      ? 0.3
      : 0.25;
  const managementCommission = Math.round(
    realisticMonthlyRevenue * managementCommissionRate
  );
  const ownerNetEstimate = Math.round(
    realisticMonthlyRevenue -
      platformFees -
      operatingCosts -
      managementCommission
  );

  const recommendation =
    input.ownerOnSite === "no" ||
    input.ownerOnSite === "wants_full_management"
      ? "Homebn Full Care recommandé : gestion complète à distance."
      : input.isForSale
        ? "Test 90 jours recommandé : générer du revenu sans bloquer la vente."
        : "Stratégie hybride recommandée : équilibre entre revenu et flexibilité.";

  return {
    conservativeNightlyRate,
    realisticNightlyRate,
    ambitiousNightlyRate,
    conservativeMonthlyRevenue,
    realisticMonthlyRevenue,
    ambitiousMonthlyRevenue,
    platformFees,
    operatingCosts,
    managementCommission,
    ownerNetEstimate,
    occupancyRate: Math.round(occupancyRate * 100),
    recommendation,
  };
}
