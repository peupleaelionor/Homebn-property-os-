import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { AdminKpiCards } from "@/components/dashboard/AdminKpiCards";
import { LeadPipeline } from "@/components/dashboard/LeadPipeline";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DEMO_KPI, DEMO_LEADS } from "@/data/demo-data";

export const metadata = { title: "Admin — Homebn" };

export default function AdminPage() {
  return (
    <DashboardShell activePath="/admin">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Vue d'ensemble</h1>
        <p className="text-sm text-gray-500">Tableau de bord Homebn</p>
      </div>
      <AdminKpiCards
        totalLeads={DEMO_KPI.totalLeads}
        prioritaryLeads={DEMO_KPI.prioritaryLeads}
        activeProperties={DEMO_KPI.activeProperties}
        estimationsThisMonth={DEMO_KPI.estimationsThisMonth}
        revenueManaged={DEMO_KPI.revenueManaged}
      />
      <Card className="mt-6">
        <CardHeader><CardTitle>Pipeline</CardTitle></CardHeader>
        <CardContent><LeadPipeline leads={DEMO_LEADS} /></CardContent>
      </Card>
    </DashboardShell>
  );
}
