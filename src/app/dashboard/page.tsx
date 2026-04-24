import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { AdminKpiCards } from "@/components/dashboard/AdminKpiCards";
import { DEMO_KPI, DEMO_LEADS } from "@/data/demo-data";
import { LeadPipeline } from "@/components/dashboard/LeadPipeline";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Dashboard — Homebn",
};

export default function DashboardPage() {
  return (
    <DashboardShell activePath="/dashboard">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Mon espace</h1>
        <p className="text-sm text-gray-500">Bienvenue sur votre espace Homebn.</p>
      </div>
      <AdminKpiCards
        totalLeads={DEMO_KPI.totalLeads}
        prioritaryLeads={DEMO_KPI.prioritaryLeads}
        activeProperties={DEMO_KPI.activeProperties}
        estimationsThisMonth={DEMO_KPI.estimationsThisMonth}
        revenueManaged={DEMO_KPI.revenueManaged}
      />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Pipeline leads</CardTitle>
        </CardHeader>
        <CardContent>
          <LeadPipeline leads={DEMO_LEADS} />
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
