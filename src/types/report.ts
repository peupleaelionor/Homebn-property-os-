export interface Report {
  id: string;
  propertyId?: string;
  leadId?: string;
  type: "estimate" | "intelligence" | "monthly" | "ninety_day";
  title: string;
  content: Record<string, unknown>;
  generatedAt: string;
  sentAt?: string;
  status: "draft" | "sent" | "viewed";
}

export interface MonthlyReport {
  id: string;
  propertyId: string;
  month: string;
  revenue: number;
  nights: number;
  occupancyRate: number;
  expenses: number;
  ownerNet: number;
  incidents: string[];
  maintenanceTasks: string[];
  notes?: string;
  createdAt: string;
}
