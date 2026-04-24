interface Step {
  number: number;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "Estimez votre bien",
    description:
      "Remplissez notre simulateur en 60 secondes. Obtenez une estimation de revenus, un score Homebn et une stratégie recommandée.",
  },
  {
    number: 2,
    title: "Audit et préparation",
    description:
      "Un conseiller Homebn analyse votre bien, prépare les photos, l'accès et l'annonce. Vous n'avez rien à faire.",
  },
  {
    number: 3,
    title: "Activation et voyageurs",
    description:
      "Homebn publie votre annonce, accueille les voyageurs, gère le ménage et la maintenance légère.",
  },
  {
    number: 4,
    title: "Reporting mensuel",
    description:
      "Chaque mois, vous recevez un rapport clair : revenus, nuits louées, incidents, actions réalisées.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--homebn-navy)]">
            Comment Homebn fonctionne
          </h2>
          <p className="mt-3 text-gray-500">
            De l'estimation à la gestion complète, en 4 étapes.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-[var(--homebn-navy)] text-white flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
