import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NINETY_DAY_PLAN } from "@/lib/constants";

export function NinetyDayOffer() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--homebn-gold)]/30 bg-[var(--homebn-gold)]/5 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-block mb-3 px-3 py-1 rounded-full border border-[var(--homebn-gold)]/40 bg-white">
              <span className="text-xs font-medium text-[var(--homebn-gold)] tracking-wide uppercase">
                Sans engagement long terme
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--homebn-navy)]">
              Test Homebn 90 jours
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Testez la location de votre bien pendant 90 jours. Parfait si votre
              bien est en vente ou si vous hésitez encore à vous lancer. Vous
              restez libre à tout moment.
            </p>
          </div>

          <ol className="space-y-3 mb-8 max-w-lg mx-auto">
            {NINETY_DAY_PLAN.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-[var(--homebn-navy)] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/estimer">Lancer le test 90 jours</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Parler à un conseiller</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
