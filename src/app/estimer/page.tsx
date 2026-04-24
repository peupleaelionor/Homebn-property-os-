import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RentalRevenueSimulator } from "@/components/simulator/RentalRevenueSimulator";

export const metadata = {
  title: "Estimer mon bien — Homebn",
  description: "Estimez le potentiel locatif de votre bien en 60 secondes.",
};

export default function EstimerPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--homebn-navy)]">
              Estimez le potentiel de votre bien en 60 secondes.
            </h1>
            <p className="mt-4 text-gray-500">
              Renseignez quelques informations et obtenez une estimation de
              revenus, un score Homebn et une stratégie recommandée.
            </p>
          </div>
          <RentalRevenueSimulator />
        </div>
      </main>
      <Footer />
    </>
  );
}
