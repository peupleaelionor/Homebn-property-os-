import { routeAgent } from "./agent-router";
import type { AgentResponse } from "@/types/agents";

export async function runAgencyAdvisorAgent(
  context: Record<string, unknown>
): Promise<AgentResponse> {
  return routeAgent({ type: "agency-advisor", context });
}
