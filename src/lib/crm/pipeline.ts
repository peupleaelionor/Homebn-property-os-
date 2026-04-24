import type { Lead } from "@/types/lead";

export interface PipelineMetrics {
  total: number;
  newCount: number;
  qualifiedCount: number;
  wonCount: number;
  conversionRate: number;
  avgScore: number;
  prioritaryCount: number;
}

export function computePipelineMetrics(leads: Lead[]): PipelineMetrics {
  const total = leads.length;
  const newCount = leads.filter((l) => l.status === "new").length;
  const qualifiedCount = leads.filter((l) => l.status === "qualified").length;
  const wonCount = leads.filter((l) => l.status === "won").length;
  const withScore = leads.filter((l) => l.score !== undefined);
  const avgScore =
    withScore.length > 0
      ? Math.round(
          withScore.reduce((acc, l) => acc + (l.score ?? 0), 0) /
            withScore.length
        )
      : 0;
  const prioritaryCount = leads.filter((l) => l.label === "prioritaire").length;
  const conversionRate =
    total > 0 ? Math.round((wonCount / total) * 100) : 0;

  return {
    total,
    newCount,
    qualifiedCount,
    wonCount,
    conversionRate,
    avgScore,
    prioritaryCount,
  };
}

export function sortLeadsByScore(leads: Lead[]): Lead[] {
  return [...leads].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
}

export function filterLeadsByStatus(
  leads: Lead[],
  status: string
): Lead[] {
  if (status === "all") return leads;
  return leads.filter((l) => l.status === status);
}
