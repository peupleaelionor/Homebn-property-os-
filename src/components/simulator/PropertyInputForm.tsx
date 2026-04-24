"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import type { RentalEstimateInput } from "@/lib/intelligence/rental-estimator";

const schema = z.object({
  city: z.string().min(2, "Ville requise"),
  postalCode: z.string().optional(),
  propertyType: z.enum(["studio", "apartment", "house", "villa"]),
  surface: z.number().min(10, "Surface minimale 10m²"),
  bedrooms: z.number().min(0),
  sleeps: z.number().min(1),
  parking: z.boolean(),
  garden: z.boolean(),
  terrace: z.boolean(),
  pool: z.boolean(),
  nearTrainStation: z.boolean(),
  nearCityCenter: z.boolean(),
  furnished: z.boolean(),
  propertyCondition: z.enum(["basic", "good", "premium"]),
  strategy: z.enum(["short_term", "mid_term", "hybrid"]),
  ownerOnSite: z.enum(["yes", "no", "sometimes", "wants_full_management"]),
  isForSale: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  onSubmit: (input: RentalEstimateInput) => void;
  loading?: boolean;
}

export function PropertyInputForm({ onSubmit, loading }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      propertyType: "house",
      surface: 90,
      bedrooms: 3,
      sleeps: 6,
      parking: false,
      garden: false,
      terrace: false,
      pool: false,
      nearTrainStation: false,
      nearCityCenter: false,
      furnished: true,
      propertyCondition: "good",
      strategy: "hybrid",
      ownerOnSite: "no",
      isForSale: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Location */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="city">Ville</Label>
          <Input id="city" placeholder="Ex: Bordeaux" {...register("city")} />
          {errors.city && (
            <p className="text-xs text-red-500">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="postalCode">Code postal</Label>
          <Input
            id="postalCode"
            placeholder="Ex: 33000"
            {...register("postalCode")}
          />
        </div>
      </div>

      {/* Property basics */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="propertyType">Type de bien</Label>
          <Select id="propertyType" {...register("propertyType")}>
            <option value="studio">Studio</option>
            <option value="apartment">Appartement</option>
            <option value="house">Maison</option>
            <option value="villa">Villa</option>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="propertyCondition">État du bien</Label>
          <Select id="propertyCondition" {...register("propertyCondition")}>
            <option value="basic">À rafraîchir</option>
            <option value="good">Bon état</option>
            <option value="premium">Premium / Rénové</option>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="surface">Surface (m²)</Label>
          <Input
            id="surface"
            type="number"
            min={10}
            {...register("surface")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bedrooms">Chambres</Label>
          <Input
            id="bedrooms"
            type="number"
            min={0}
            {...register("bedrooms")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="sleeps">Capacité voyageurs</Label>
          <Input
            id="sleeps"
            type="number"
            min={1}
            {...register("sleeps")}
          />
        </div>
      </div>

      {/* Amenities */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">Équipements</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { name: "parking" as const, label: "Parking" },
            { name: "garden" as const, label: "Jardin" },
            { name: "terrace" as const, label: "Terrasse" },
            { name: "pool" as const, label: "Piscine" },
            { name: "nearTrainStation" as const, label: "Proche gare" },
            { name: "nearCityCenter" as const, label: "Proche centre" },
            { name: "furnished" as const, label: "Meublé" },
          ].map(({ name, label }) => (
            <label
              key={name}
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-[var(--homebn-navy)] focus:ring-[var(--homebn-navy)]"
                {...register(name)}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Strategy & situation */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="strategy">Stratégie souhaitée</Label>
          <Select id="strategy" {...register("strategy")}>
            <option value="short_term">Courte durée</option>
            <option value="mid_term">Moyenne durée</option>
            <option value="hybrid">Hybride</option>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ownerOnSite">Propriétaire sur place&nbsp;?</Label>
          <Select id="ownerOnSite" {...register("ownerOnSite")}>
            <option value="yes">Oui, je suis sur place</option>
            <option value="sometimes">Parfois</option>
            <option value="no">Non, je suis absent</option>
            <option value="wants_full_management">
              Je veux déléguer entièrement
            </option>
          </Select>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-[var(--homebn-navy)]"
            {...register("isForSale")}
          />
          Mon bien est actuellement en vente
        </label>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Analyse en cours..." : "Estimer le potentiel"}
      </Button>

      <p className="text-xs text-center text-gray-400">
        Estimation indicative. Les revenus dépendent de l'adresse exacte, de la
        saison, de l'état réel du bien, de la réglementation locale et de la
        demande.
      </p>
    </form>
  );
}
