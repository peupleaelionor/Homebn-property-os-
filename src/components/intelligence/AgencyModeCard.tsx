import type { AgencyModeResult } from "@/lib/intelligence/agency-mode";
import { Building2 } from "lucide-react";

interface Props {
  agencyMode: AgencyModeResult;
}

export function AgencyModeCard({ agencyMode }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      <div className="flex items-center gap-2 mb-3">
        <Building2 size={16} className="text-[var(--homebn-navy)]" strokeWidth={1.5} />
        <p className="text-sm font-semibold text-gray-700">Mode agence</p>
        {agencyMode.isMandateDormant && (
          <span className="ml-auto text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
            Mandat dormant
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-gray-900 mb-1">
        {agencyMode.action}
      </p>
      <p className="text-xs text-gray-500">{agencyMode.ownerArgument}</p>
      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--homebn-navy)]"
            style={{ width: `${agencyMode.agencyOpportunityScore}%` }}
          />
        </div>
        <span className="text-xs text-gray-400">
          Score {agencyMode.agencyOpportunityScore}/100
        </span>
      </div>
    </div>
  );
}
