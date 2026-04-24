import { routeAgent } from "./agent-router";
import type { AgentResponse } from "@/types/agents";
import type { RentalEstimateInput } from "@/lib/intelligence/rental-estimator";
import type { PropertyIntelligenceReport } from "@/lib/intelligence/property-intelligence-report";

export async function runPropertyAnalystAgent(
  input: RentalEstimateInput,
  report?: PropertyIntelligenceReport
): Promise<AgentResponse> {
  return routeAgent({
    type: "property-analyst",
    context: {
      ...input,
      estimate: report?.estimate,
      leadScore: report?.leadScore,
      bestUse: report?.bestUse,
      readiness: report?.readiness,
    },
  });
}
