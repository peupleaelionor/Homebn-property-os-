import type { Estimate } from "@/types/estimate";
import { formatCurrency } from "@/lib/utils";

interface Props {
  estimates: Estimate[];
}

export function EstimatesTable({ estimates }: Props) {
  if (estimates.length === 0) {
    return (
      <p className="text-center text-gray-400 py-8 text-sm">
        Aucune estimation pour le moment.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wide">
            <th className="text-left py-3 pr-4">ID</th>
            <th className="text-left py-3 pr-4">Prudent</th>
            <th className="text-left py-3 pr-4">Réaliste</th>
            <th className="text-left py-3 pr-4">Ambitieux</th>
            <th className="text-left py-3 pr-4">Net proprio</th>
            <th className="text-left py-3 pr-4">Score</th>
            <th className="text-left py-3">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {estimates.map((est) => (
            <tr key={est.id} className="hover:bg-gray-50">
              <td className="py-3 pr-4 text-gray-400 text-xs font-mono">
                {est.id.slice(0, 8)}
              </td>
              <td className="py-3 pr-4 text-gray-700">
                {formatCurrency(est.conservativeRevenue)}
              </td>
              <td className="py-3 pr-4 font-medium text-gray-900">
                {formatCurrency(est.realisticRevenue)}
              </td>
              <td className="py-3 pr-4 text-gray-700">
                {formatCurrency(est.ambitiousRevenue)}
              </td>
              <td className="py-3 pr-4 text-green-700 font-medium">
                {formatCurrency(est.ownerNetEstimate)}
              </td>
              <td className="py-3 pr-4">
                {est.potentialScore !== undefined ? (
                  <span className="text-gray-700">{est.potentialScore}/100</span>
                ) : (
                  "—"
                )}
              </td>
              <td className="py-3 text-gray-400 text-xs">
                {new Date(est.createdAt).toLocaleDateString("fr-FR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
