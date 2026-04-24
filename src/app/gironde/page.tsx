import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocalLanding } from "@/components/marketing/LocalLanding";
import { RentalRevenueSimulator } from "@/components/simulator/RentalRevenueSimulator";
import { FullCareSection } from "@/components/marketing/FullCareSection";
import { NinetyDayOffer } from "@/components/marketing/NinetyDayOffer";
import { TrustSection } from "@/components/marketing/TrustSection";
import { ADS } from "@/content/copy";

export const metadata = {
  title: "Maison vide en Gironde — Homebn",
  description: "Homebn aide les propriétaires de Gironde à transformer leur bien vide en revenu intelligent.",
};

export default function GirondePage() {
  return (
    <>
      <Navbar />
      <main>
        <LocalLanding
          city="Bordeaux"
          region="Gironde"
          cities={ADS.gironde.cities}
          title={ADS.gironde.title}
          subtitle={ADS.gironde.subtitle}
        />
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--homebn-navy)] mb-6 text-center">
              Estimez votre bien en Gironde
            </h2>
            <RentalRevenueSimulator />
          </div>
        </section>
        <FullCareSection />
        <NinetyDayOffer />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
