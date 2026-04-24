-- Homebn seed data for development
-- Apply after running migrations

insert into public.owner_leads (
  first_name, last_name, email, phone, city, postal_code,
  property_type, surface, bedrooms, situation, owner_on_site,
  wants_full_management, is_for_sale, score, label, status, source
) values
  ('Marie', 'Dupont', 'marie.dupont@example.com', '06 12 34 56 78',
   'Bordeaux', '33000', 'house', 110, 4, 'owner_absent', 'no',
   true, false, 85, 'prioritaire', 'new', 'website'),
  ('Jean', 'Martin', 'jean.martin@example.com', '06 98 76 54 32',
   'Merignac', '33700', 'house', 90, 3, 'for_sale', 'sometimes',
   false, true, 68, 'fort', 'contacted', 'website'),
  ('Sophie', 'Laurent', 'sophie.laurent@example.com', null,
   'Pessac', '33600', 'apartment', 65, 2, 'secondary_residence', 'sometimes',
   false, false, 45, 'moyen', 'qualified', 'website');
