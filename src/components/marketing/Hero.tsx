import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaPrimaryHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}

export function Hero({
  title = "Maison vide\u00a0? Homebn s'occupe de tout.",
  subtitle = "Homebn aide les propriétaires absents, vendeurs ou héritiers à transformer un bien vide en revenu intelligent\u00a0: estimation, préparation, location, voyageurs, ménage, maintenance et reporting.",
  ctaPrimary = "Estimer mon bien",
  ctaPrimaryHref = "/estimer",
  ctaSecondary = "Découvrir la gestion complète",
  ctaSecondaryHref = "/proprietaires",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[var(--homebn-gold)]/40 bg-[var(--homebn-gold)]/5">
          <span className="text-xs font-medium text-[var(--homebn-gold)] tracking-wide uppercase">
            Gestion intelligente à distance
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--homebn-navy)] leading-tight tracking-tight">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href={ctaPrimaryHref} className="flex items-center gap-2">
              {ctaPrimary}
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={ctaSecondaryHref}>{ctaSecondary}</Link>
          </Button>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-xs text-gray-400">
          Aucun engagement. Estimation gratuite en 60 secondes.
        </p>
      </div>
    </section>
  );
}
