import { routeAgent } from "./agent-router";
import type { AgentResponse } from "@/types/agents";

export async function runInvestorAnalystAgent(
  context: Record<string, unknown>
): Promise<AgentResponse> {
  return routeAgent({ type: "investor-analyst", context });
}
