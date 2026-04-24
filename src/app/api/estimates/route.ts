import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generatePropertyIntelligenceReport } from "@/lib/intelligence/property-intelligence-report";

const estimateSchema = z.object({
  city: z.string(),
  postalCode: z.string().optional(),
  propertyType: z.enum(["studio", "apartment", "house", "villa"]),
  surface: z.number(),
  bedrooms: z.number(),
  sleeps: z.number(),
  parking: z.boolean(),
  garden: z.boolean(),
  terrace: z.boolean(),
  pool: z.boolean(),
  nearTrainStation: z.boolean(),
  nearCityCenter: z.boolean(),
  furnished: z.boolean(),
  propertyCondition: z.enum(["basic", "good", "premium"]),
  strategy: z.enum(["short_term", "mid_term", "hybrid"]),
  ownerOnSite: z.enum(["yes", "no", "sometimes", "wants_full_management"]),
  isForSale: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = estimateSchema.parse(body);
    const report = generatePropertyIntelligenceReport(input);
    return NextResponse.json({ success: true, report });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
