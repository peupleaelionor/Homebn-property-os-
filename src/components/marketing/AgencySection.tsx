import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Clock } from "lucide-react";

export function AgencySection() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-3 px-3 py-1 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-600 tracking-wide uppercase">
              Pour les agences
            </div>
            <h2 className="text-3xl font-bold text-[var(--homebn-navy)]">
              Transformez vos mandats dormants en revenus.
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Vos mandats invendus depuis plus de 90 jours représentent un
              potentiel inexploité. Homebn peut activer ces biens en location
              courte ou moyenne durée, sans perturber votre processus de vente.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Building2, text: "Compatible avec votre mandat de vente" },
                { icon: Clock, text: "Visites toujours prioritaires" },
                { icon: TrendingUp, text: "Revenu supplémentaire pour le propriétaire" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-700">
                  <Icon size={16} className="text-[var(--homebn-navy)] shrink-0" strokeWidth={1.5} />
                  {text}
                </li>
              ))}
            </ul>
            <Button asChild size="md" className="mt-6">
              <Link href="/agences">Partenariat agence</Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="text-center">
              <p className="text-4xl font-bold text-[var(--homebn-navy)]">90+</p>
              <p className="text-sm text-gray-500 mt-1">jours en vente</p>
              <p className="mt-4 text-sm text-gray-700">
                Un mandat invendu depuis plus de 90 jours peut générer du revenu
                pendant la vente avec Homebn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
