import type { Lead } from "@/types/lead";

export interface NextAction {
  label: string;
  description: string;
  urgency: "low" | "medium" | "high";
  cta: string;
}

export function getNextActions(lead: Lead): NextAction[] {
  const actions: NextAction[] = [];

  if (lead.status === "new") {
    actions.push({
      label: "Prendre contact",
      description: "Ce lead vient d'arriver. Contacter dans les 24h.",
      urgency: "high",
      cta: "Appeler maintenant",
    });
  }

  if (lead.status === "contacted") {
    actions.push({
      label: "Envoyer proposition",
      description: "Préparer une proposition adaptée au bien.",
      urgency: "medium",
      cta: "Préparer proposition",
    });
  }

  if (lead.status === "qualified") {
    actions.push({
      label: "Planifier audit",
      description: "Organiser une visite ou un audit à distance.",
      urgency: "medium",
      cta: "Planifier audit",
    });
  }

  if (lead.label === "prioritaire" && lead.status === "new") {
    actions.unshift({
      label: "Lead prioritaire",
      description: "Score élevé — traiter en priorité absolue.",
      urgency: "high",
      cta: "Traiter maintenant",
    });
  }

  if (lead.isForSale) {
    actions.push({
      label: "Proposer test 90 jours",
      description: "Ce bien est en vente — la stratégie 90 jours est pertinente.",
      urgency: "medium",
      cta: "Préparer l'offre 90j",
    });
  }

  if (
    lead.ownerOnSite === "no" ||
    lead.ownerOnSite === "wants_full_management"
  ) {
    actions.push({
      label: "Présenter Homebn Full Care",
      description: "Le propriétaire est absent — Full Care est la solution.",
      urgency: "high",
      cta: "Envoyer brochure Full Care",
    });
  }

  return actions;
}
