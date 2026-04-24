import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { LeadsTable } from "@/components/dashboard/LeadsTable";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DEMO_LEADS } from "@/data/demo-data";

export const metadata = { title: "Leads — Homebn Admin" };

export default function AdminLeadsPage() {
  return (
    <DashboardShell activePath="/admin/leads">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Leads</h1>
        <p className="text-sm text-gray-500">{DEMO_LEADS.length} leads au total</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Tous les leads</CardTitle></CardHeader>
        <CardContent><LeadsTable leads={DEMO_LEADS} /></CardContent>
      </Card>
    </DashboardShell>
  );
}
