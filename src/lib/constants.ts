export const HOMEBN_COMMISSION_RATE = 0.3;
export const HOMEBN_COMMISSION_OWNER_RATE = 0.25;
export const PLATFORM_FEES_RATE = 0.08;
export const OPERATING_COSTS_RATE = 0.12;

export const PROPERTY_TYPES = [
  { value: "studio", label: "Studio" },
  { value: "apartment", label: "Appartement" },
  { value: "house", label: "Maison" },
  { value: "villa", label: "Villa" },
] as const;

export const PROPERTY_CONDITIONS = [
  { value: "basic", label: "À rafraîchir" },
  { value: "good", label: "Bon état" },
  { value: "premium", label: "Premium / Rénové" },
] as const;

export const RENTAL_STRATEGIES = [
  { value: "short_term", label: "Courte durée (Airbnb, etc.)" },
  { value: "mid_term", label: "Moyenne durée (1-6 mois)" },
  { value: "hybrid", label: "Hybride (mixte)" },
] as const;

export const OWNER_ON_SITE_OPTIONS = [
  { value: "yes", label: "Oui, je suis sur place" },
  { value: "sometimes", label: "Parfois" },
  { value: "no", label: "Non, je suis absent" },
  {
    value: "wants_full_management",
    label: "Je veux déléguer entièrement",
  },
] as const;

export const LEAD_STATUSES = [
  { value: "new", label: "Nouveau", color: "blue" },
  { value: "contacted", label: "Contacté", color: "yellow" },
  { value: "qualified", label: "Qualifié", color: "purple" },
  { value: "proposal", label: "Proposition", color: "orange" },
  { value: "won", label: "Gagné", color: "green" },
  { value: "lost", label: "Perdu", color: "red" },
] as const;

export const SCORE_LABELS = {
  faible: { label: "Faible", color: "text-gray-500" },
  moyen: { label: "Moyen", color: "text-yellow-600" },
  fort: { label: "Fort", color: "text-blue-600" },
  prioritaire: { label: "Prioritaire", color: "text-green-600" },
} as const;

export const GIRONDE_CITIES = [
  "Bordeaux",
  "Mérignac",
  "Pessac",
  "Talence",
  "Ambarès-et-Lagrave",
  "Bassens",
  "Carbon-Blanc",
  "Sainte-Eulalie",
  "Saint-Loubès",
  "Lormont",
  "Cenon",
  "Floirac",
  "Bègles",
  "Le Bouscat",
  "Bruges",
  "Eysines",
  "Saint-Médard-en-Jalles",
  "Mérignac",
  "Gradignan",
  "Villenave-d'Ornon",
];

export const NINETY_DAY_PLAN = [
  "Audit du bien et vérification des conditions d'exploitation.",
  "Préparation photos, accès, ménage et annonce.",
  "Mise en ligne contrôlée avec calendrier compatible.",
  "Suivi des premiers voyageurs et optimisation.",
  "Bilan après 90 jours avec décision : continuer, ajuster ou arrêter.",
];

export const LEGAL_NOTICE =
  "Estimation indicative. Les revenus dépendent de l'adresse exacte, de la saison, de l'état réel du bien, de la réglementation locale et de la demande.";
