export type AgentType =
  | "property-analyst"
  | "owner-negotiator"
  | "investor-analyst"
  | "agency-advisor"
  | "listing-copy"
  | "operations"
  | "compliance"
  | "report";

export type AgentMode = "deterministic" | "ai";

export interface AgentInput {
  type: AgentType;
  context: Record<string, unknown>;
}

export interface AgentSuggestion {
  id: string;
  agentType: AgentType;
  title: string;
  content: string;
  priority: "low" | "medium" | "high";
  actionLabel?: string;
  actionUrl?: string;
  createdAt: string;
}

export interface AgentResponse {
  agentType: AgentType;
  mode: AgentMode;
  suggestions: AgentSuggestion[];
  summary: string;
  confidence: number;
}

export interface AgentTimelineEvent {
  id: string;
  agentType: AgentType;
  event: string;
  description: string;
  timestamp: string;
  status: "pending" | "done" | "skipped";
}
