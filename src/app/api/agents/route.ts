import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { routeAgent } from "@/lib/agents/agent-router";

const agentSchema = z.object({
  type: z.enum([
    "property-analyst",
    "owner-negotiator",
    "investor-analyst",
    "agency-advisor",
    "listing-copy",
    "operations",
    "compliance",
    "report",
  ]),
  context: z.record(z.string(), z.unknown()),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, context } = agentSchema.parse(body);
    const response = await routeAgent({ type, context });
    return NextResponse.json(response);
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
