import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/marketing/Hero";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { FullCareSection } from "@/components/marketing/FullCareSection";
import { NinetyDayOffer } from "@/components/marketing/NinetyDayOffer";
import { TrustSection } from "@/components/marketing/TrustSection";
import { AgencySection } from "@/components/marketing/AgencySection";
import { InvestorSection } from "@/components/marketing/InvestorSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { RentalRevenueSimulator } from "@/components/simulator/RentalRevenueSimulator";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { LEGAL_NOTICE } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Vacancy cost teaser */}
        <section className="py-10 bg-white border-y border-gray-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Un bien vide coûte chaque mois.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Charges, impôts, assurance, entretien : un bien vide
                    n'est pas gratuit. Estimez ce que le vôtre peut rapporter.
                  </p>
                </div>
              </div>
              <Button asChild size="md" className="shrink-0">
                <Link href="/estimer">Calculer maintenant</Link>
              </Button>
            </div>
          </div>
        </section>

        <ProcessSteps />

        {/* Simulator section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Estimez votre revenu en 60 secondes"
              subtitle="Renseignez quelques informations sur votre bien et obtenez une estimation instantanée."
            />
            <RentalRevenueSimulator />
          </div>
        </section>

        <FullCareSection />
        <NinetyDayOffer />
        <TrustSection />
        <AgencySection />
        <InvestorSection />
        <FAQSection />

        {/* Final CTA */}
        <section className="py-16 bg-[var(--homebn-navy)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">
              Prêt à activer votre bien ?
            </h2>
            <p className="mt-3 text-white/70">
              Estimation gratuite, sans engagement. Un conseiller Homebn vous
              contacte dans les 24h.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="gold" size="lg">
                <Link href="/estimer">Estimer mon bien</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/contact">Parler à un conseiller</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/40">{LEGAL_NOTICE}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
