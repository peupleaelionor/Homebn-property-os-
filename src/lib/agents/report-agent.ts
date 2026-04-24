import { routeAgent } from "./agent-router";
import type { AgentResponse } from "@/types/agents";

export async function runReportAgent(
  context: Record<string, unknown>
): Promise<AgentResponse> {
  return routeAgent({ type: "report", context });
}
