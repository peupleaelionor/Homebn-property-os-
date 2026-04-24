import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = { title: "Rapports — Homebn Admin" };

export default function AdminReportsPage() {
  return (
    <DashboardShell activePath="/admin/reports">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Rapports</h1>
        <p className="text-sm text-gray-500">Rapports générés par Homebn</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Rapports</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400 py-6 text-center">
            Les rapports seront disponibles après connexion Supabase.
          </p>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
