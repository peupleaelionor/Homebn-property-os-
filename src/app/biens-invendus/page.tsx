import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/marketing/Hero";
import { NinetyDayOffer } from "@/components/marketing/NinetyDayOffer";
import { AgencySection } from "@/components/marketing/AgencySection";
import { TrustSection } from "@/components/marketing/TrustSection";
import { OwnerLeadForm } from "@/components/forms/OwnerLeadForm";

export const metadata = {
  title: "Biens invendus — Homebn",
  description: "Votre bien est en vente depuis longtemps ? Générez du revenu pendant la vente.",
};

export default function BiensInvendusPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Bien en vente depuis longtemps ? Générez du revenu en attendant."
          subtitle="Homebn propose un test 90 jours pour les biens invendus. Vous gardez votre mandat de vente, les visites restent prioritaires, et votre bien génère du revenu."
          ctaPrimary="Tester 90 jours"
          ctaPrimaryHref="#formulaire"
          ctaSecondary="En savoir plus"
          ctaSecondaryHref="#agence"
        />
        <NinetyDayOffer />
        <AgencySection />
        <TrustSection />
        <section id="formulaire" className="py-16 bg-white">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--homebn-navy)] mb-6 text-center">
              Mon bien est en vente — je veux tester Homebn
            </h2>
            <OwnerLeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
