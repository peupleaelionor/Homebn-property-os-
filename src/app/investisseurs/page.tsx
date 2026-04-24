import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InvestorSection } from "@/components/marketing/InvestorSection";
import { RentalRevenueSimulator } from "@/components/simulator/RentalRevenueSimulator";
import { ContactForm } from "@/components/forms/ContactForm";
import { Hero } from "@/components/marketing/Hero";

export const metadata = {
  title: "Investisseurs — Homebn",
  description: "Identifiez les biens sous-exploités et analysez leur potentiel locatif.",
};

export default function InvestisseursPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Identifiez les biens sous-exploités."
          subtitle="Homebn analyse le potentiel locatif avant acquisition. Rendement brut, retour sur activation, score investisseur."
          ctaPrimary="Analyser un bien"
          ctaPrimaryHref="#simulator"
          ctaSecondary="Nous contacter"
          ctaSecondaryHref="#contact"
        />
        <InvestorSection />
        <section id="simulator" className="py-16 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--homebn-navy)] mb-6 text-center">
              Estimez le potentiel d'un bien
            </h2>
            <RentalRevenueSimulator />
          </div>
        </section>
        <section id="contact" className="py-16 bg-[#f9fafb]">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--homebn-navy)] mb-6 text-center">
              Parlez-nous de votre projet
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
