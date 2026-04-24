import type { AgentSuggestion } from "@/types/agents";
import { AgentSuggestionCard } from "./AgentSuggestionCard";

interface Props {
  suggestions: AgentSuggestion[];
  title?: string;
}

export function AgentActionList({ suggestions, title }: Props) {
  return (
    <div>
      {title && (
        <p className="text-sm font-semibold text-gray-700 mb-3">{title}</p>
      )}
      {suggestions.length === 0 ? (
        <p className="text-sm text-gray-400">Aucune suggestion disponible.</p>
      ) : (
        <div className="space-y-3">
          {suggestions.map((s) => (
            <AgentSuggestionCard key={s.id} suggestion={s} />
          ))}
        </div>
      )}
    </div>
  );
}
