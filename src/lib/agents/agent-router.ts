import type { AgentType, AgentInput, AgentResponse } from "@/types/agents";
import { getFallbackResponse } from "@/lib/ai/fallback-engine";
import { callAI, isAIAvailable, getAIConfig } from "@/lib/ai/ai-provider";
import {
  SYSTEM_PROMPT_BASE,
  buildPropertyAnalystPrompt,
  buildOwnerNegotiatorPrompt,
  buildInvestorAnalystPrompt,
  buildAgencyAdvisorPrompt,
  buildListingCopyPrompt,
  buildOperationsPrompt,
  buildCompliancePrompt,
  buildReportPrompt,
} from "@/lib/ai/prompts";

function getPromptBuilder(
  agentType: AgentType
): (ctx: Record<string, unknown>) => string {
  const map: Record<AgentType, (ctx: Record<string, unknown>) => string> = {
    "property-analyst": buildPropertyAnalystPrompt,
    "owner-negotiator": buildOwnerNegotiatorPrompt,
    "investor-analyst": buildInvestorAnalystPrompt,
    "agency-advisor": buildAgencyAdvisorPrompt,
    "listing-copy": buildListingCopyPrompt,
    operations: buildOperationsPrompt,
    compliance: buildCompliancePrompt,
    report: buildReportPrompt,
  };
  return map[agentType] ?? buildPropertyAnalystPrompt;
}

export async function routeAgent(input: AgentInput): Promise<AgentResponse> {
  const fallback = getFallbackResponse(input.type, input.context);

  if (!isAIAvailable()) {
    return {
      agentType: input.type,
      mode: "deterministic",
      suggestions: fallback,
      summary: fallback[0]?.content ?? "",
      confidence: 70,
    };
  }

  try {
    const promptBuilder = getPromptBuilder(input.type);
    const prompt = promptBuilder(input.context);
    const aiConfig = getAIConfig();
    const raw = await callAI(prompt, SYSTEM_PROMPT_BASE);

    if (!raw) throw new Error("Empty AI response");

    return {
      agentType: input.type,
      mode: "ai",
      suggestions: [
        {
          id: `ai-${input.type}-${Date.now()}`,
          agentType: input.type,
          title: `Analyse ${input.type} (${aiConfig.provider})`,
          content: raw,
          priority: "high",
          createdAt: new Date().toISOString(),
        },
      ],
      summary: raw.slice(0, 200),
      confidence: 85,
    };
  } catch {
    return {
      agentType: input.type,
      mode: "deterministic",
      suggestions: fallback,
      summary: fallback[0]?.content ?? "",
      confidence: 70,
    };
  }
}
