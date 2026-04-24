"use client";

import { useState } from "react";
import type { AgentType, AgentResponse } from "@/types/agents";
import { AgentSuggestionCard } from "./AgentSuggestionCard";
import { Button } from "@/components/ui/button";
import { Bot, RefreshCw } from "lucide-react";

interface Props {
  agentType: AgentType;
  context: Record<string, unknown>;
  title?: string;
}

export function AgentPanel({ agentType, context, title }: Props) {
  const [response, setResponse] = useState<AgentResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function runAgent() {
    setLoading(true);
    try {
      const res = await fetch("/api/agents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: agentType, context }),
      });
      const data = await res.json();
      setResponse(data);
    } catch {
      // Silent fallback
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bot size={16} className="text-[var(--homebn-navy)]" strokeWidth={1.5} />
          <p className="text-sm font-semibold text-gray-700">
            {title ?? `Agent ${agentType}`}
          </p>
          {response && (
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              {response.mode}
            </span>
          )}
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={runAgent}
          disabled={loading}
          className="flex items-center gap-1.5"
        >
          {loading ? (
            <RefreshCw size={12} className="animate-spin" />
          ) : (
            <RefreshCw size={12} />
          )}
          {loading ? "Analyse..." : "Analyser"}
        </Button>
      </div>

      {!response && (
        <p className="text-sm text-gray-400 text-center py-4">
          Cliquez sur Analyser pour lancer l'agent.
        </p>
      )}

      {response && (
        <div className="space-y-3">
          {response.suggestions.map((s) => (
            <AgentSuggestionCard key={s.id} suggestion={s} />
          ))}
        </div>
      )}
    </div>
  );
}
