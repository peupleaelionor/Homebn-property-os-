import Link from "next/link";
import { LEGAL_NOTICE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-bold text-xl text-[var(--homebn-navy)]">
              Homebn
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Homebn transforme les biens vides, invendus ou sous-exploités en
              revenus intelligents.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Propriétaires</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/estimer" className="hover:text-[var(--homebn-navy)]">Estimer mon bien</Link></li>
              <li><Link href="/proprietaires" className="hover:text-[var(--homebn-navy)]">Gestion locative</Link></li>
              <li><Link href="/proprietaires-absents" className="hover:text-[var(--homebn-navy)]">Propriétaires absents</Link></li>
              <li><Link href="/biens-invendus" className="hover:text-[var(--homebn-navy)]">Biens invendus</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Partenaires</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/agences" className="hover:text-[var(--homebn-navy)]">Agences immobilières</Link></li>
              <li><Link href="/investisseurs" className="hover:text-[var(--homebn-navy)]">Investisseurs</Link></li>
              <li><Link href="/gironde" className="hover:text-[var(--homebn-navy)]">Gironde</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Homebn</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/contact" className="hover:text-[var(--homebn-navy)]">Contact</Link></li>
              <li><Link href="/dashboard" className="hover:text-[var(--homebn-navy)]">Mon espace</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 leading-relaxed">
            {LEGAL_NOTICE}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Homebn. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
