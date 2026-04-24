import { routeAgent } from "./agent-router";
import type { AgentResponse } from "@/types/agents";

export async function runListingCopyAgent(
  context: Record<string, unknown>
): Promise<AgentResponse> {
  return routeAgent({ type: "listing-copy", context });
}
