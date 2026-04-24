export type PropertyType = "studio" | "apartment" | "house" | "villa";
export type PropertyCondition = "basic" | "good" | "premium";
export type PropertyStatus =
  | "lead"
  | "audit"
  | "prepared"
  | "active"
  | "paused"
  | "sold";

export interface PropertyAmenities {
  parking: boolean;
  garden: boolean;
  terrace: boolean;
  pool: boolean;
  nearTrainStation: boolean;
  nearCityCenter: boolean;
  furnished: boolean;
}

export interface Property {
  id: string;
  ownerId?: string;
  leadId?: string;
  title?: string;
  address?: string;
  city: string;
  postalCode: string;
  propertyType: PropertyType;
  surface: number;
  bedrooms: number;
  sleeps: number;
  status: PropertyStatus;
  saleStatus?: string;
  estimatedValue?: number;
  amenities: PropertyAmenities;
  condition: PropertyCondition;
  createdAt: string;
}
