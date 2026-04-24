import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { AgentPanel } from "@/components/agents/AgentPanel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DEMO_PROPERTIES } from "@/data/demo-data";

export const metadata = { title: "Agents IA — Homebn Admin" };

export default function AdminAgentsPage() {
  const demoContext = {
    propertyType: "house",
    city: "Bordeaux",
    surface: 110,
    bedrooms: 4,
    isForSale: false,
    ownerOnSite: "no",
  };

  return (
    <DashboardShell activePath="/admin/agents">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Agents IA</h1>
        <p className="text-sm text-gray-500">
          Agents intelligents Homebn — fonctionnent en mode local ou avec une clé API.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AgentPanel
          agentType="property-analyst"
          context={demoContext}
          title="Analyste de bien"
        />
        <AgentPanel
          agentType="owner-negotiator"
          context={demoContext}
          title="Négociateur propriétaire"
        />
        <AgentPanel
          agentType="listing-copy"
          context={demoContext}
          title="Rédaction annonce"
        />
        <AgentPanel
          agentType="operations"
          context={demoContext}
          title="Plan opérationnel"
        />
        <AgentPanel
          agentType="compliance"
          context={demoContext}
          title="Conformité réglementaire"
        />
        <AgentPanel
          agentType="report"
          context={demoContext}
          title="Synthèse rapport"
        />
      </div>
    </DashboardShell>
  );
}
