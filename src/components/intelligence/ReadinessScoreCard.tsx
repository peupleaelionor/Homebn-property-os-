import type { ReadinessScore } from "@/lib/intelligence/readiness-score";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle } from "lucide-react";

interface Props {
  readiness: ReadinessScore;
}

const labelColors: Record<string, string> = {
  prêt: "text-green-600",
  "presque prêt": "text-yellow-600",
  "à préparer": "text-red-500",
};

export function ReadinessScoreCard({ readiness }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-gray-700">Préparation du bien</p>
        <span
          className={`text-sm font-bold ${
            labelColors[readiness.label] ?? "text-gray-700"
          }`}
        >
          {readiness.label}
        </span>
      </div>
      <Progress value={readiness.score} className="mb-3" />
      <p className="text-xs text-gray-500 mb-3">{readiness.score}/100</p>
      {readiness.missingItems.length === 0 ? (
        <div className="flex items-center gap-1.5 text-xs text-green-600">
          <CheckCircle size={14} />
          Le bien est prêt à être activé.
        </div>
      ) : (
        <ul className="space-y-1.5">
          {readiness.missingItems.map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-xs text-gray-500">
              <AlertCircle size={12} className="text-amber-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
