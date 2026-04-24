import type { Property } from "@/types/property";

interface Props {
  properties: Property[];
}

const STATUS_COLORS: Record<string, string> = {
  lead: "bg-blue-50 text-blue-700",
  audit: "bg-yellow-50 text-yellow-700",
  prepared: "bg-purple-50 text-purple-700",
  active: "bg-green-50 text-green-700",
  paused: "bg-gray-100 text-gray-600",
  sold: "bg-red-50 text-red-700",
};

export function PropertiesTable({ properties }: Props) {
  if (properties.length === 0) {
    return (
      <p className="text-center text-gray-400 py-8 text-sm">
        Aucun bien pour le moment.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wide">
            <th className="text-left py-3 pr-4">Bien</th>
            <th className="text-left py-3 pr-4">Type</th>
            <th className="text-left py-3 pr-4">Surface</th>
            <th className="text-left py-3 pr-4">Statut</th>
            <th className="text-left py-3 pr-4">Valeur est.</th>
            <th className="text-left py-3">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {properties.map((prop) => (
            <tr key={prop.id} className="hover:bg-gray-50">
              <td className="py-3 pr-4">
                <p className="font-medium text-gray-900">
                  {prop.title ?? `${prop.city} — ${prop.propertyType}`}
                </p>
                <p className="text-xs text-gray-400">
                  {prop.city} {prop.postalCode}
                </p>
              </td>
              <td className="py-3 pr-4 text-gray-600 capitalize">
                {prop.propertyType}
              </td>
              <td className="py-3 pr-4 text-gray-700">{prop.surface} m²</td>
              <td className="py-3 pr-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    STATUS_COLORS[prop.status] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {prop.status}
                </span>
              </td>
              <td className="py-3 pr-4 text-gray-700">
                {prop.estimatedValue
                  ? `${prop.estimatedValue.toLocaleString("fr-FR")} €`
                  : "—"}
              </td>
              <td className="py-3 text-gray-400 text-xs">
                {new Date(prop.createdAt).toLocaleDateString("fr-FR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
