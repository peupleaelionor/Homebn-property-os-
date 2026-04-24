import type { Lead } from "@/types/lead";
import { Badge } from "@/components/ui/badge";
import { getStageColor, getLabelColor } from "@/lib/crm/lead-status";
import { formatCurrency } from "@/lib/utils";

interface Props {
  leads: Lead[];
}

export function LeadsTable({ leads }: Props) {
  if (leads.length === 0) {
    return (
      <p className="text-center text-gray-400 py-8 text-sm">
        Aucun lead pour le moment.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wide">
            <th className="text-left py-3 pr-4">Lead</th>
            <th className="text-left py-3 pr-4">Ville</th>
            <th className="text-left py-3 pr-4">Type</th>
            <th className="text-left py-3 pr-4">Statut</th>
            <th className="text-left py-3 pr-4">Score</th>
            <th className="text-left py-3 pr-4">Source</th>
            <th className="text-left py-3">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-gray-50">
              <td className="py-3 pr-4">
                <p className="font-medium text-gray-900">
                  {lead.firstName} {lead.lastName}
                </p>
                <p className="text-xs text-gray-400">{lead.email}</p>
              </td>
              <td className="py-3 pr-4 text-gray-700">{lead.city}</td>
              <td className="py-3 pr-4 text-gray-600 capitalize">
                {lead.propertyType ?? "—"}
              </td>
              <td className="py-3 pr-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStageColor(
                    lead.status
                  )}`}
                >
                  {lead.status}
                </span>
              </td>
              <td className="py-3 pr-4">
                {lead.label ? (
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLabelColor(
                      lead.label
                    )}`}
                  >
                    {lead.label} {lead.score !== undefined ? `(${lead.score})` : ""}
                  </span>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>
              <td className="py-3 pr-4 text-gray-500">{lead.source ?? "—"}</td>
              <td className="py-3 text-gray-400 text-xs">
                {new Date(lead.createdAt).toLocaleDateString("fr-FR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
