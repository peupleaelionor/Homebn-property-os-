# Homebn — Property OS

> Homebn transforme les biens vides, invendus ou sous-exploités en revenus intelligents.

## Vision

Homebn n'est pas un clone Airbnb. Airbnb est un canal. Homebn est l'OS intelligent qui :
- analyse un bien,
- estime son potentiel,
- choisit la meilleure stratégie,
- rassure le propriétaire,
- coordonne la gestion complète à distance,
- génère les rapports,
- aide les agences et investisseurs.

**Phrase centrale :** "Maison vide mais vous n'êtes pas sur place ? Homebn s'occupe de tout."

## Stack technique

- **Next.js 15** App Router
- **TypeScript** strict
- **Tailwind CSS** v4
- **shadcn/ui** (composants custom)
- **Supabase** (base de données + auth)
- **Zod** (validation)
- **React Hook Form**
- **Recharts**
- **lucide-react**

## Architecture

```
src/
  app/           → 14+ routes (pages + API)
  components/    → layout / marketing / simulator / forms / dashboard / intelligence / agents / ui
  lib/
    intelligence/  → moteurs IA (estimateur, scoring, DNA, best-use, etc.)
    agents/        → 8 agents IA (local fallback + prêt OpenAI/Anthropic)
    ai/            → provider, prompts, fallback-engine
    crm/           → pipeline, statuts, actions
    reports/       → builder, copy
    supabase/      → client, server, admin
  types/         → property, lead, estimate, intelligence, report, agents
  content/       → faq, copy, ads
  data/          → demo-data
supabase/
  migrations/    → 001_initial_schema.sql
  seed.sql
```

## Démarrage

```bash
npm install
cp .env.example .env.local
# Renseigner NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

## Variables d'environnement

Voir `.env.example`. Les variables IA (OpenAI, Anthropic, LMNOX) sont **optionnelles** pour le MVP.
Le build ne casse jamais si aucune clé IA n'est fournie.

## Pages principales

| Route | Description |
|-------|-------------|
| `/` | Landing page principale |
| `/estimer` | Simulateur de revenus |
| `/proprietaires` | Page propriétaires |
| `/proprietaires-absents` | Full Care — propriétaires absents |
| `/agences` | Partenariat agences |
| `/investisseurs` | Analyse investisseurs |
| `/biens-invendus` | Test 90 jours |
| `/gironde` | Landing locale Gironde |
| `/contact` | Contact |
| `/dashboard` | Espace utilisateur |
| `/admin` | Dashboard admin |
| `/admin/leads` | CRM leads |
| `/admin/properties` | Gestion biens |
| `/admin/agents` | Agents IA |

## Supabase

```bash
# Appliquer les migrations
supabase db push
# Seed de développement
psql -f supabase/seed.sql
```

## Mention légale

Estimation indicative. Les revenus dépendent de l'adresse exacte, de la saison, de l'état réel du bien, de la réglementation locale et de la demande.
