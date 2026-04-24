import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SERVICES = [
  "Photos professionnelles",
  "Rédaction de l'annonce",
  "Accueil autonome des voyageurs",
  "Ménage et linge de maison",
  "Maintenance légère",
  "Reporting mensuel",
  "Coordination avec votre agence si en vente",
];

export function FullCareSection() {
  return (
    <section className="py-16 bg-[var(--homebn-navy)] text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-3 px-3 py-1 rounded-full border border-white/20 bg-white/10">
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
                Homebn Full Care
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Vous n'êtes pas sur place&nbsp;?
              <br />
              Homebn gère tout.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              De la préparation du bien à la gestion quotidienne des voyageurs,
              en passant par le ménage et la maintenance&nbsp;: Homebn Full Care
              prend en charge l'intégralité de l'exploitation de votre bien.
            </p>
            <Button asChild variant="gold" size="lg" className="mt-6">
              <Link href="/proprietaires-absents">
                Découvrir Full Care
              </Link>
            </Button>
          </div>

          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-[var(--homebn-gold)] mt-0.5 shrink-0"
                />
                <span className="text-white/90 text-sm">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
