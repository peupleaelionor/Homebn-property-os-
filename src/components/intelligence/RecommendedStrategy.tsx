import type { BestUseResult } from "@/lib/intelligence/best-use-engine";
import { Lightbulb } from "lucide-react";

interface Props {
  bestUse: BestUseResult;
}

export function RecommendedStrategy({ bestUse }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb size={18} className="text-[var(--homebn-gold)]" strokeWidth={1.5} />
        <p className="text-sm font-semibold text-gray-700">Stratégie recommandée</p>
      </div>
      <p className="text-xl font-bold text-[var(--homebn-navy)] mb-1">
        {bestUse.title}
      </p>
      <p className="text-sm text-gray-500">{bestUse.explanation}</p>
      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--homebn-navy)]"
            style={{ width: `${bestUse.confidence}%` }}
          />
        </div>
        <span className="text-xs text-gray-400">{bestUse.confidence}%</span>
      </div>
    </div>
  );
}
