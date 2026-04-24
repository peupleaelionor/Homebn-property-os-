import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Home,
  BarChart2,
  FileText,
  Bot,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Vue d'ensemble", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/properties", label: "Biens", icon: Home },
  { href: "/admin/estimates", label: "Estimations", icon: BarChart2 },
  { href: "/admin/reports", label: "Rapports", icon: FileText },
  { href: "/admin/agents", label: "Agents IA", icon: Bot },
];

interface Props {
  children: React.ReactNode;
  activePath?: string;
}

export function DashboardShell({ children, activePath }: Props) {
  return (
    <div className="flex min-h-screen bg-[#f9fafb]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-white border-r border-gray-100 py-6 px-3">
        <Link
          href="/"
          className="px-3 mb-6 font-bold text-lg text-[var(--homebn-navy)]"
        >
          Homebn
        </Link>
        <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
          Admin
        </p>
        <nav className="space-y-1">
          {NAV.map((item) => {
            const isActive = activePath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-[var(--homebn-navy)] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <item.icon size={16} strokeWidth={1.5} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">{children}</div>
      </main>
    </div>
  );
}
