export type MarketPulse = {
  city: string;
  avgNightlyRate: number;
  avgOccupancyRate: number;
  demandLevel: "low" | "medium" | "high" | "very_high";
  trend: "rising" | "stable" | "declining";
  seasonality: "high" | "moderate" | "low";
  notes: string;
};

const MARKET_DATA: Record<string, MarketPulse> = {
  bordeaux: {
    city: "Bordeaux",
    avgNightlyRate: 95,
    avgOccupancyRate: 62,
    demandLevel: "high",
    trend: "rising",
    seasonality: "moderate",
    notes: "Forte demande professionnelle et touristique toute l'année.",
  },
  gironde: {
    city: "Gironde",
    avgNightlyRate: 85,
    avgOccupancyRate: 58,
    demandLevel: "high",
    trend: "rising",
    seasonality: "high",
    notes: "Pic estival fort, demande viticole et professionnelle hors saison.",
  },
  default: {
    city: "France",
    avgNightlyRate: 75,
    avgOccupancyRate: 52,
    demandLevel: "medium",
    trend: "stable",
    seasonality: "moderate",
    notes: "Marché locatif standard.",
  },
};

export function getMarketPulse(city: string): MarketPulse {
  const key = city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (key.includes("bordeaux")) return MARKET_DATA.bordeaux;
  if (
    key.includes("gironde") ||
    key.includes("merignac") ||
    key.includes("pessac") ||
    key.includes("ambares") ||
    key.includes("bassens")
  )
    return MARKET_DATA.gironde;
  return { ...MARKET_DATA.default, city };
}
