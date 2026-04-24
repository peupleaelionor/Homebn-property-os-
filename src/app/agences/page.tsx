import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgencySection } from "@/components/marketing/AgencySection";
import { NinetyDayOffer } from "@/components/marketing/NinetyDayOffer";
import { TrustSection } from "@/components/marketing/TrustSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Hero } from "@/components/marketing/Hero";

export const metadata = {
  title: "Agences immobilières — Homebn",
  description: "Homebn valorise vos mandats dormants pendant la vente.",
};

export default function AgencesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Vos mandats dormants peuvent générer du revenu."
          subtitle="Homebn s'intègre à votre processus de vente. Les visites restent prioritaires. Le propriétaire perçoit un revenu pendant la mise en vente."
          ctaPrimary="Devenir partenaire"
          ctaPrimaryHref="#contact"
          ctaSecondary="En savoir plus"
          ctaSecondaryHref="#agency"
        />
        <AgencySection />
        <NinetyDayOffer />
        <TrustSection />
        <section id="contact" className="py-16 bg-white">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--homebn-navy)] mb-6 text-center">
              Partenariat agence
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
