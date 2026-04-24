import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/marketing/Hero";
import { FullCareSection } from "@/components/marketing/FullCareSection";
import { NinetyDayOffer } from "@/components/marketing/NinetyDayOffer";
import { TrustSection } from "@/components/marketing/TrustSection";
import { OwnerLeadForm } from "@/components/forms/OwnerLeadForm";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Propriétaires absents — Homebn",
  description: "Homebn gère votre bien à distance. Résidences secondaires, maisons vides, successions.",
};

const SITUATIONS = [
  "Maison vide loin de chez vous",
  "Résidence secondaire sous-exploitée",
  "Maison héritée à valoriser",
  "Bien en vente depuis longtemps",
  "Propriétaire expatrié ou en mobilité",
  "Investisseur qui veut déléguer",
];

export default function ProprietairesAbsentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Vous n'êtes pas sur place ? Homebn gère votre bien pour vous."
          subtitle="Accès autonome, voyageurs, ménage, maintenance, reporting mensuel. Gestion complète à distance."
          ctaPrimary="Estimer mon bien"
          ctaPrimaryHref="/estimer"
          ctaSecondary="Découvrir Full Care"
          ctaSecondaryHref="#fullcare"
        />

        <section className="py-12 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--homebn-navy)] mb-6 text-center">
              Votre situation, notre solution
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SITUATIONS.map((s) => (
                <div key={s} className="flex items-center gap-2 rounded-lg border border-gray-100 p-4">
                  <CheckCircle size={16} className="text-green-500 shrink-0" />
                  <span className="text-sm text-gray-700">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FullCareSection />
        <NinetyDayOffer />
        <TrustSection />

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--homebn-navy)] mb-6 text-center">
              Je veux que Homebn gère mon bien
            </h2>
            <OwnerLeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
