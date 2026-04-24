import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/marketing/Hero";
import { FullCareSection } from "@/components/marketing/FullCareSection";
import { NinetyDayOffer } from "@/components/marketing/NinetyDayOffer";
import { TrustSection } from "@/components/marketing/TrustSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { OwnerLeadForm } from "@/components/forms/OwnerLeadForm";

export const metadata = {
  title: "Propriétaires — Homebn",
  description: "Homebn aide les propriétaires à générer des revenus sans gérer eux-mêmes.",
};

export default function ProprietairesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Votre bien génère des revenus. Vous gérez votre vie."
          subtitle="Homebn s'occupe de tout : estimation, préparation, voyageurs, ménage, maintenance, reporting. Vous recevez un virement chaque mois."
          ctaPrimary="Estimer mon bien"
          ctaPrimaryHref="/estimer"
          ctaSecondary="Nous contacter"
          ctaSecondaryHref="/contact"
        />
        <FullCareSection />
        <NinetyDayOffer />
        <TrustSection />
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--homebn-navy)] mb-6 text-center">
              Parlez-nous de votre bien
            </h2>
            <OwnerLeadForm />
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
