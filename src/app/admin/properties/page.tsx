import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { PropertiesTable } from "@/components/dashboard/PropertiesTable";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DEMO_PROPERTIES } from "@/data/demo-data";

export const metadata = { title: "Biens — Homebn Admin" };

export default function AdminPropertiesPage() {
  return (
    <DashboardShell activePath="/admin/properties">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Biens</h1>
        <p className="text-sm text-gray-500">{DEMO_PROPERTIES.length} biens gérés</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Tous les biens</CardTitle></CardHeader>
        <CardContent><PropertiesTable properties={DEMO_PROPERTIES} /></CardContent>
      </Card>
    </DashboardShell>
  );
}
