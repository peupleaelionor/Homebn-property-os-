import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { scoreLead } from "@/lib/intelligence/lead-scoring";
import type { RentalEstimateInput } from "@/lib/intelligence/rental-estimator";

const leadSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  propertyType: z.string().optional(),
  surface: z.string().optional(),
  situation: z.string().optional(),
  ownerOnSite: z.string().optional(),
  isForSale: z.boolean().optional(),
  wantsFullManagement: z.boolean().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  estimate: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    // Compute lead score if enough data
    let score: number | undefined;
    let label: string | undefined;

    if (data.propertyType && data.ownerOnSite) {
      const scoreInput: Partial<RentalEstimateInput> = {
        propertyType: (data.propertyType as RentalEstimateInput["propertyType"]) ?? "house",
        surface: data.surface ? parseInt(data.surface) : 80,
        bedrooms: 3,
        sleeps: 6,
        parking: false,
        garden: false,
        terrace: false,
        pool: false,
        nearTrainStation: false,
        nearCityCenter: false,
        furnished: true,
        propertyCondition: "good",
        strategy: "hybrid",
        ownerOnSite: (data.ownerOnSite as RentalEstimateInput["ownerOnSite"]) ?? "no",
        isForSale: data.isForSale ?? false,
        city: data.city ?? "",
      };
      const result = scoreLead(scoreInput as RentalEstimateInput);
      score = result.score;
      label = result.label;
    }

    // Try to save to Supabase if configured
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      try {
        const { createAdminClient } = await import("@/lib/supabase/admin");
        const supabase = createAdminClient();
        await supabase.from("owner_leads").insert({
          ...data,
          score,
          status: "new",
          source: data.source ?? "website",
        });
      } catch (supabaseErr) {
        console.error("[owner-leads] Supabase insert failed:", supabaseErr);
      }
    }

    return NextResponse.json({
      success: true,
      score,
      label,
      message: "Votre demande a bien été reçue.",
    });
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
