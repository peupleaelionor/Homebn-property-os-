import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { EstimatesTable } from "@/components/dashboard/EstimatesTable";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = { title: "Estimations — Homebn Admin" };

export default function AdminEstimatesPage() {
  return (
    <DashboardShell activePath="/admin/estimates">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Estimations</h1>
      </div>
      <Card>
        <CardHeader><CardTitle>Estimations enregistrées</CardTitle></CardHeader>
        <CardContent><EstimatesTable estimates={[]} /></CardContent>
      </Card>
    </DashboardShell>
  );
}
