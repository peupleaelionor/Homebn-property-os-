export interface Estimate {
  id: string;
  propertyId?: string;
  leadId?: string;
  conservativeRevenue: number;
  realisticRevenue: number;
  ambitiousRevenue: number;
  nightlyRate: number;
  occupancyRate: number;
  ownerNetEstimate: number;
  managementCommission: number;
  potentialScore?: number;
  recommendation: string;
  rawReport?: Record<string, unknown>;
  createdAt: string;
}

export interface EstimateInput {
  city: string;
  postalCode?: string;
  propertyType: "studio" | "apartment" | "house" | "villa";
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
  propertyCondition: "basic" | "good" | "premium";
  strategy: "short_term" | "mid_term" | "hybrid";
  ownerOnSite: "yes" | "no" | "sometimes" | "wants_full_management";
  isForSale: boolean;
}
