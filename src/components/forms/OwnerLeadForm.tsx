"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  city: z.string().min(2, "Ville requise"),
  postalCode: z.string().optional(),
  propertyType: z.string().optional(),
  surface: z.string().optional(),
  situation: z.string().optional(),
  ownerOnSite: z.string().optional(),
  isForSale: z.boolean().optional(),
  wantsFullManagement: z.boolean().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function OwnerLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);
    try {
      await fetch("/api/owner-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      // Continue silently
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-green-600 text-2xl">&#10003;</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          Votre demande a bien été reçue.
        </h3>
        <p className="mt-2 text-gray-500">
          Un conseiller Homebn vous contactera dans les 24 heures.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">Prénom</Label>
          <Input id="firstName" {...register("firstName")} />
          {errors.firstName && (
            <p className="text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Nom</Label>
          <Input id="lastName" {...register("lastName")} />
          {errors.lastName && (
            <p className="text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" type="tel" {...register("phone")} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="city">Ville du bien</Label>
          <Input id="city" placeholder="Ex: Bordeaux" {...register("city")} />
          {errors.city && (
            <p className="text-xs text-red-500">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="postalCode">Code postal</Label>
          <Input id="postalCode" {...register("postalCode")} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="propertyType">Type de bien</Label>
          <Select id="propertyType" {...register("propertyType")}>
            <option value="">-- Sélectionner --</option>
            <option value="studio">Studio</option>
            <option value="apartment">Appartement</option>
            <option value="house">Maison</option>
            <option value="villa">Villa</option>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ownerOnSite">Vous êtes sur place&nbsp;?</Label>
          <Select id="ownerOnSite" {...register("ownerOnSite")}>
            <option value="">-- Sélectionner --</option>
            <option value="yes">Oui</option>
            <option value="sometimes">Parfois</option>
            <option value="no">Non, je suis absent</option>
            <option value="wants_full_management">
              Je veux déléguer entièrement
            </option>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="situation">Votre situation</Label>
        <Select id="situation" {...register("situation")}>
          <option value="">-- Sélectionner --</option>
          <option value="owner_absent">Propriétaire absent</option>
          <option value="empty_house">Maison vide</option>
          <option value="for_sale">Bien en vente</option>
          <option value="secondary_residence">Résidence secondaire</option>
          <option value="inheritance">Succession / héritage</option>
          <option value="wants_delegation">Je veux déléguer</option>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300"
            {...register("isForSale")}
          />
          Mon bien est actuellement en vente
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300"
            {...register("wantsFullManagement")}
          />
          Je souhaite une gestion complète Homebn Full Care
        </label>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea
          id="message"
          placeholder="Décrivez votre situation ou vos questions..."
          {...register("message")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>

      <p className="text-xs text-center text-gray-400">
        Homebn ne partagera jamais vos informations. Aucun engagement.
      </p>
    </form>
  );
}
