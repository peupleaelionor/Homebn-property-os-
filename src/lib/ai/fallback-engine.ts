/**
 * Fallback engine — deterministic local responses when no AI API is available.
 * Guarantees MVP functionality without any external dependency.
 */

import type { AgentType, AgentSuggestion } from "@/types/agents";

let suggestionCounter = 0;

function createSuggestion(
  agentType: AgentType,
  title: string,
  content: string,
  priority: "low" | "medium" | "high" = "medium"
): AgentSuggestion {
  return {
    id: `local-${++suggestionCounter}-${Date.now()}`,
    agentType,
    title,
    content,
    priority,
    createdAt: new Date().toISOString(),
  };
}

export function getFallbackResponse(
  agentType: AgentType,
  context: Record<string, unknown>
): AgentSuggestion[] {
  switch (agentType) {
    case "property-analyst":
      return [
        createSuggestion(
          agentType,
          "Analyse du bien",
          "Ce bien présente un potentiel locatif à explorer. Une évaluation terrain permettra d'affiner l'estimation.",
          "high"
        ),
      ];

    case "owner-negotiator":
      return [
        createSuggestion(
          agentType,
          "Message pour le propriétaire",
          "Votre bien a un potentiel de revenu que Homebn peut activer rapidement. Le test 90 jours est une option sans engagement fort pour commencer.",
          "high"
        ),
      ];

    case "investor-analyst":
      return [
        createSuggestion(
          agentType,
          "Analyse investisseur",
          "Ce bien sous-exploité peut offrir un rendement intéressant. L'activation Homebn permet de tester sans travaux lourds.",
          "medium"
        ),
      ];

    case "agency-advisor":
      return [
        createSuggestion(
          agentType,
          "Opportunité agence",
          "Ce mandat dormant peut être valorisé avec Homebn. Proposez le test 90 jours au propriétaire pour générer du revenu pendant la vente.",
          "high"
        ),
      ];

    case "listing-copy":
      return [
        createSuggestion(
          agentType,
          "Suggestion d'annonce",
          `Maison ${context.propertyType ?? "confortable"} à ${context.city ?? "localisation idéale"} — idéale pour séjour professionnel ou familial. Entièrement gérée par Homebn.`,
          "medium"
        ),
      ];

    case "operations":
      return [
        createSuggestion(
          agentType,
          "Plan de préparation",
          "1. Shooting photo professionnel\n2. Installation serrure connectée\n3. Kit ménage et linge de maison\n4. Mise en ligne annonce\n5. Premier voyageur dans 2 semaines.",
          "high"
        ),
      ];

    case "compliance":
      return [
        createSuggestion(
          agentType,
          "Points de conformité",
          "Vérifier la déclaration en mairie si logement à Paris ou communes réglementées. Vérifier le règlement de copropriété. Déclarer les revenus BIC.",
          "medium"
        ),
      ];

    case "report":
      return [
        createSuggestion(
          agentType,
          "Résumé du rapport",
          "Votre bien a été analysé par Homebn. Les recommandations ci-dessus vous permettent d'optimiser votre revenu locatif de façon sécurisée.",
          "low"
        ),
      ];

    default:
      return [
        createSuggestion(
          agentType,
          "Recommandation générale",
          "Homebn peut vous aider à activer ce bien. Contactez notre équipe pour une étude personnalisée.",
          "low"
        ),
      ];
  }
}
