import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact — Homebn",
  description: "Contactez l'équipe Homebn pour toute question sur la gestion de votre bien.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[var(--homebn-navy)]">
              Parlons de votre bien.
            </h1>
            <p className="mt-3 text-gray-500">
              Un conseiller Homebn vous répond sous 24 heures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Nous contacter
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Informations
              </h2>
              {[
                {
                  icon: MapPin,
                  title: "Zone d'activité",
                  desc: "Gironde & Bordeaux Métropole — déploiement France en cours.",
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  desc: "Disponible sur demande après premier contact.",
                },
                {
                  icon: Mail,
                  title: "Email",
                  desc: "contact@homebn.fr",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--homebn-navy)]/5 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[var(--homebn-navy)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
