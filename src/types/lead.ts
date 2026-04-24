export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "proposal"
  | "won"
  | "lost";

export type LeadLabel = "faible" | "moyen" | "fort" | "prioritaire";

export type OwnerSituation =
  | "owner_absent"
  | "empty_house"
  | "for_sale"
  | "secondary_residence"
  | "inheritance"
  | "wants_delegation";

export interface Lead {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  city?: string;
  postalCode?: string;
  address?: string;
  propertyType?: string;
  surface?: number;
  bedrooms?: number;
  situation?: OwnerSituation;
  goal?: string;
  ownerOnSite?: "yes" | "no" | "sometimes" | "wants_full_management";
  wantsFullManagement?: boolean;
  isForSale?: boolean;
  message?: string;
  score?: number;
  label?: LeadLabel;
  status: LeadStatus;
  source?: string;
  estimate?: Record<string, unknown>;
  createdAt: string;
}
