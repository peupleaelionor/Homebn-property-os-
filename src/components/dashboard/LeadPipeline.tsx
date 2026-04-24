import type { Lead } from "@/types/lead";
import { Badge } from "@/components/ui/badge";
import { getStageColor, getStageLabel, groupLeadsByStatus } from "@/lib/crm/lead-status";
import { PIPELINE_STAGES } from "@/lib/crm/lead-status";

interface Props {
  leads: Lead[];
}

export function LeadPipeline({ leads }: Props) {
  const grouped = groupLeadsByStatus(leads);

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 min-w-max pb-2">
        {PIPELINE_STAGES.filter((s) => s.status !== "lost").map((stage) => (
          <div key={stage.status} className="w-56">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                {stage.label}
              </span>
              <span className="text-xs text-gray-400">
                {grouped[stage.status]?.length ?? 0}
              </span>
            </div>
            <div className="space-y-2">
              {(grouped[stage.status] ?? []).map((lead) => (
                <div
                  key={lead.id}
                  className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
                >
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {lead.firstName} {lead.lastName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{lead.city}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${getStageColor(
                        lead.status
                      )}`}
                    >
                      {getStageLabel(lead.status)}
                    </span>
                    {lead.score !== undefined && (
                      <span className="text-xs text-gray-400">
                        {lead.score}pts
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
