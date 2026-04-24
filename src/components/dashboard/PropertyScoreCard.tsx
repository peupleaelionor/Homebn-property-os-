import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { LeadScoreResult } from "@/lib/intelligence/lead-scoring";

interface Props {
  leadScore: LeadScoreResult;
  title?: string;
}

export function PropertyScoreCard({ leadScore, title }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      {title && (
        <p className="text-sm font-medium text-gray-700 mb-3">{title}</p>
      )}
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl font-bold text-[var(--homebn-navy)]">
          {leadScore.score}
          <span className="text-sm font-normal text-gray-400">/100</span>
        </span>
        <Badge variant={leadScore.label === "prioritaire" || leadScore.label === "fort" ? "default" : "secondary"}>
          {leadScore.label}
        </Badge>
      </div>
      <Progress value={leadScore.score} className="mb-4" />
      <ul className="space-y-1.5">
        {leadScore.reasons.map((reason) => (
          <li key={reason} className="text-xs text-gray-500 flex items-start gap-1.5">
            <span className="text-[var(--homebn-navy)] mt-0.5">+</span>
            {reason}
          </li>
        ))}
      </ul>
    </div>
  );
}
