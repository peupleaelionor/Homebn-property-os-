import { Shield, Star, Users, BarChart3 } from "lucide-react";

const SIGNALS = [
  {
    icon: Shield,
    title: "Estimation honnête",
    description: "Aucun revenu garanti. Nos estimations sont transparentes et basées sur les données du marché.",
  },
  {
    icon: Star,
    title: "Votre interlocuteur dédié",
    description: "Un gestionnaire Homebn référent pour votre bien, joignable et réactif.",
  },
  {
    icon: Users,
    title: "Compatible avec votre agence",
    description: "Si votre bien est en vente, Homebn coordonne avec votre agence pour prioriser les visites.",
  },
  {
    icon: BarChart3,
    title: "Reporting mensuel clair",
    description: "Revenus, nuits, incidents, actions : vous savez exactement ce qui se passe.",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[var(--homebn-navy)]">
            Pourquoi faire confiance à Homebn&nbsp;?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNALS.map((signal) => (
            <div
              key={signal.title}
              className="rounded-xl border border-gray-100 p-5 text-center"
            >
              <signal.icon
                size={24}
                className="mx-auto mb-3 text-[var(--homebn-navy)]"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {signal.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
