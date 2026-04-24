import { routeAgent } from "./agent-router";
import type { AgentResponse } from "@/types/agents";

export async function runOwnerNegotiatorAgent(
  context: Record<string, unknown>
): Promise<AgentResponse> {
  return routeAgent({ type: "owner-negotiator", context });
}
