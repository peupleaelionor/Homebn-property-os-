import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homebn — Votre bien vide génère des revenus intelligents",
  description:
    "Homebn transforme les biens vides, invendus ou sous-exploités en revenus intelligents. Estimation, audit, stratégie, gestion complète à distance.",
  keywords: [
    "gestion locative",
    "maison vide",
    "location courte durée",
    "propriétaire absent",
    "bien invendu",
    "résidence secondaire",
    "Gironde",
    "Bordeaux",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
