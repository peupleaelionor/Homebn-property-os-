import type { RentalEstimateInput } from "./rental-estimator";

export type TrustSignal = {
  category: "legal" | "transparency" | "human" | "security";
  label: string;
  description: string;
};

export function getTrustSignals(
  input: Partial<RentalEstimateInput>
): TrustSignal[] {
  const signals: TrustSignal[] = [
    {
      category: "legal",
      label: "Conformité réglementaire",
      description:
        "Homebn vérifie la conformité de votre bien selon les règles locales avant toute mise en location.",
    },
    {
      category: "transparency",
      label: "Estimation honnête",
      description:
        "Nos estimations sont indicatives et transparentes. Nous ne promettons pas de revenus garantis.",
    },
    {
      category: "human",
      label: "Un interlocuteur dédié",
      description:
        "Vous avez un gestionnaire Homebn référent pour votre bien.",
    },
    {
      category: "security",
      label: "Accès sécurisé à distance",
      description:
        "Serrure connectée, caution voyageurs et assurance partenaire incluses.",
    },
  ];

  if (input.isForSale) {
    signals.push({
      category: "human",
      label: "Compatible avec votre agence",
      description:
        "Homebn coordonne avec votre agence de vente pour que les visites restent prioritaires.",
    });
  }

  return signals;
}
