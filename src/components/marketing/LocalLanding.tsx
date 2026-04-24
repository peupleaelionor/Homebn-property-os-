import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface LocalLandingProps {
  city: string;
  region: string;
  cities: string[];
  title?: string;
  subtitle?: string;
}

export function LocalLanding({
  city,
  region,
  cities,
  title,
  subtitle,
}: LocalLandingProps) {
  const defaultTitle = `Maison vide en ${region}\u00a0? Homebn peut la gérer pour vous.`;
  const defaultSubtitle = `Nous aidons les propriétaires absents, vendeurs ou héritiers à transformer un bien vide en revenu intelligent, sans gestion quotidienne.`;

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-medium text-gray-600">
          <MapPin size={12} className="inline mr-1" />
          {city}, {region}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--homebn-navy)] leading-tight">
          {title ?? defaultTitle}
        </h1>
        <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl">
          {subtitle ?? defaultSubtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {cities.map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg">
            <Link href="/estimer">Estimer mon bien</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Parler à un conseiller</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
