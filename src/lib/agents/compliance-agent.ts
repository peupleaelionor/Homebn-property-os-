import { routeAgent } from "./agent-router";
import type { AgentResponse } from "@/types/agents";

export async function runComplianceAgent(
  context: Record<string, unknown>
): Promise<AgentResponse> {
  return routeAgent({ type: "compliance", context });
}
