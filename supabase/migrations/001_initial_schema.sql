-- Homebn initial schema
-- Run: supabase db push or apply via Supabase dashboard

create extension if not exists "pgcrypto";

-- Profiles (owners, admins)
create table if not exists public.profiles (
  id uuid primary key,
  email text,
  role text default 'owner',
  created_at timestamptz default now()
);

-- Owner leads (CRM entry)
create table if not exists public.owner_leads (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  last_name text,
  email text not null,
  phone text,
  city text,
  postal_code text,
  address text,
  property_type text,
  surface int,
  bedrooms int,
  situation text,
  goal text,
  owner_on_site text,
  wants_full_management boolean default false,
  is_for_sale boolean default false,
  message text,
  score int,
  label text,
  status text default 'new',
  source text default 'website',
  estimate jsonb,
  created_at timestamptz default now()
);

-- Properties
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete set null,
  lead_id uuid references public.owner_leads(id) on delete set null,
  title text,
  address text,
  city text,
  postal_code text,
  property_type text,
  surface int,
  bedrooms int,
  sleeps int,
  status text default 'lead',
  sale_status text,
  estimated_value numeric,
  amenities jsonb default '{}'::jsonb,
  condition text default 'good',
  created_at timestamptz default now()
);

-- Property estimates
create table if not exists public.property_estimates (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete cascade,
  lead_id uuid references public.owner_leads(id) on delete cascade,
  conservative_revenue numeric,
  realistic_revenue numeric,
  ambitious_revenue numeric,
  nightly_rate numeric,
  occupancy_rate numeric,
  owner_net_estimate numeric,
  management_commission numeric,
  potential_score int,
  recommendation text,
  raw_report jsonb,
  created_at timestamptz default now()
);

-- Monthly reports
create table if not exists public.monthly_reports (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete cascade,
  month text not null,
  revenue numeric default 0,
  nights int default 0,
  occupancy_rate numeric default 0,
  expenses numeric default 0,
  owner_net numeric default 0,
  incidents jsonb default '[]'::jsonb,
  maintenance_tasks jsonb default '[]'::jsonb,
  notes text,
  created_at timestamptz default now()
);

-- Agent logs
create table if not exists public.agent_logs (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete cascade,
  lead_id uuid references public.owner_leads(id) on delete cascade,
  agent_type text not null,
  mode text default 'deterministic',
  suggestions jsonb default '[]'::jsonb,
  summary text,
  confidence int,
  created_at timestamptz default now()
);

-- RLS policies (basic)
alter table public.owner_leads enable row level security;
alter table public.properties enable row level security;
alter table public.property_estimates enable row level security;
alter table public.monthly_reports enable row level security;

-- Service role has full access (for API routes)
create policy "service_role_all" on public.owner_leads
  for all using (true);

create policy "service_role_all" on public.properties
  for all using (true);

create policy "service_role_all" on public.property_estimates
  for all using (true);

create policy "service_role_all" on public.monthly_reports
  for all using (true);
