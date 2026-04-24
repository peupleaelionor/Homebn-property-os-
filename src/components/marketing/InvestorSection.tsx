import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Search, BarChart2 } from "lucide-react";

export function InvestorSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl border border-gray-100 bg-[#f9fafb] p-8">
            <div className="space-y-4">
              {[
                { label: "Rendement brut estimé", value: "5,8 %" },
                { label: "Retour sur activation", value: "6 mois" },
                { label: "Score investisseur", value: "82 / 100" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                >
                  <span className="text-sm text-gray-600">{kpi.label}</span>
                  <span className="font-bold text-[var(--homebn-navy)]">
                    {kpi.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-block mb-3 px-3 py-1 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-600 tracking-wide uppercase">
              Pour les investisseurs
            </div>
            <h2 className="text-3xl font-bold text-[var(--homebn-navy)]">
              Identifiez les biens sous-exploités.
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Homebn analyse le potentiel locatif d'un bien avant acquisition.
              Rendement brut, coût d'activation, retour sur investissement&nbsp;:
              toutes les données pour décider.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Search, text: "Analyse du potentiel avant achat" },
                { icon: BarChart2, text: "Estimation rendement et ROI" },
                { icon: TrendingUp, text: "Activation rapide post-acquisition" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-700">
                  <Icon size={16} className="text-[var(--homebn-navy)] shrink-0" strokeWidth={1.5} />
                  {text}
                </li>
              ))}
            </ul>
            <Button asChild size="md" className="mt-6">
              <Link href="/investisseurs">Analyse investisseur</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
