import type { AgentSuggestion } from "@/types/agents";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  suggestion: AgentSuggestion;
}

const priorityColors: Record<string, string> = {
  high: "border-l-4 border-l-[var(--homebn-navy)]",
  medium: "border-l-4 border-l-yellow-400",
  low: "border-l-4 border-l-gray-200",
};

export function AgentSuggestionCard({ suggestion }: Props) {
  return (
    <div
      className={cn(
        "rounded-lg bg-gray-50 p-4",
        priorityColors[suggestion.priority] ?? priorityColors.medium
      )}
    >
      <p className="text-sm font-semibold text-gray-900 mb-1">
        {suggestion.title}
      </p>
      <p className="text-sm text-gray-600 whitespace-pre-line">
        {suggestion.content}
      </p>
      {suggestion.actionLabel && suggestion.actionUrl && (
        <Button asChild size="sm" variant="outline" className="mt-3">
          <Link href={suggestion.actionUrl}>{suggestion.actionLabel}</Link>
        </Button>
      )}
      <p className="text-xs text-gray-400 mt-2">
        {new Date(suggestion.createdAt).toLocaleString("fr-FR")}
      </p>
    </div>
  );
}
