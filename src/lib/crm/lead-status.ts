import type { Lead, LeadStatus, LeadLabel } from "@/types/lead";

export const PIPELINE_STAGES: { status: LeadStatus; label: string; color: string }[] = [
  { status: "new", label: "Nouveau", color: "bg-blue-100 text-blue-800" },
  { status: "contacted", label: "Contacté", color: "bg-yellow-100 text-yellow-800" },
  { status: "qualified", label: "Qualifié", color: "bg-purple-100 text-purple-800" },
  { status: "proposal", label: "Proposition", color: "bg-orange-100 text-orange-800" },
  { status: "won", label: "Gagné", color: "bg-green-100 text-green-800" },
  { status: "lost", label: "Perdu", color: "bg-gray-100 text-gray-500" },
];

export function getStageColor(status: LeadStatus): string {
  return (
    PIPELINE_STAGES.find((s) => s.status === status)?.color ??
    "bg-gray-100 text-gray-600"
  );
}

export function getStageLabel(status: LeadStatus): string {
  return (
    PIPELINE_STAGES.find((s) => s.status === status)?.label ?? status
  );
}

export function getLabelColor(label: LeadLabel): string {
  const map: Record<LeadLabel, string> = {
    faible: "bg-gray-100 text-gray-600",
    moyen: "bg-yellow-100 text-yellow-800",
    fort: "bg-blue-100 text-blue-800",
    prioritaire: "bg-green-100 text-green-800",
  };
  return map[label] ?? "bg-gray-100 text-gray-600";
}

export function groupLeadsByStatus(leads: Lead[]): Record<LeadStatus, Lead[]> {
  const result: Record<LeadStatus, Lead[]> = {
    new: [],
    contacted: [],
    qualified: [],
    proposal: [],
    won: [],
    lost: [],
  };
  for (const lead of leads) {
    if (result[lead.status]) {
      result[lead.status].push(lead);
    }
  }
  return result;
}
