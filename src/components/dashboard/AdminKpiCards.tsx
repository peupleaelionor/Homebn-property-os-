import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Users, Star, Home, BarChart2, TrendingUp } from "lucide-react";

interface KPI {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ReactNode;
}

interface Props {
  totalLeads: number;
  prioritaryLeads: number;
  activeProperties: number;
  estimationsThisMonth: number;
  revenueManaged: number;
}

export function AdminKpiCards({
  totalLeads,
  prioritaryLeads,
  activeProperties,
  estimationsThisMonth,
  revenueManaged,
}: Props) {
  const kpis: KPI[] = [
    {
      label: "Total leads",
      value: totalLeads,
      sub: "depuis le début",
      icon: <Users size={20} className="text-blue-600" />,
    },
    {
      label: "Leads prioritaires",
      value: prioritaryLeads,
      sub: "score ≥ 80",
      icon: <Star size={20} className="text-yellow-500" />,
    },
    {
      label: "Biens actifs",
      value: activeProperties,
      sub: "gérés par Homebn",
      icon: <Home size={20} className="text-green-600" />,
    },
    {
      label: "Estimations (mois)",
      value: estimationsThisMonth,
      sub: "ce mois-ci",
      icon: <BarChart2 size={20} className="text-purple-600" />,
    },
    {
      label: "Revenus gérés",
      value: formatCurrency(revenueManaged),
      sub: "ce mois-ci",
      icon: <TrendingUp size={20} className="text-emerald-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {kpis.map((kpi) => (
        <Card key={kpi.label}>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-gray-500">{kpi.label}</p>
              {kpi.icon}
            </div>
            <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
            {kpi.sub && (
              <p className="text-xs text-gray-400 mt-0.5">{kpi.sub}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
