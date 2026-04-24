"use client";

import { useState } from "react";
import { PropertyInputForm } from "./PropertyInputForm";
import { EstimateResultCard } from "./EstimateResultCard";
import type { RentalEstimateInput } from "@/lib/intelligence/rental-estimator";
import { generatePropertyIntelligenceReport } from "@/lib/intelligence/property-intelligence-report";
import type { PropertyIntelligenceReport } from "@/lib/intelligence/property-intelligence-report";

export function RentalRevenueSimulator() {
  const [report, setReport] = useState<PropertyIntelligenceReport | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(input: RentalEstimateInput) {
    setLoading(true);
    setTimeout(() => {
      const r = generatePropertyIntelligenceReport(input);
      setReport(r);
      setLoading(false);
    }, 400);
  }

  return (
    <div className="w-full">
      {!report ? (
        <PropertyInputForm onSubmit={handleSubmit} loading={loading} />
      ) : (
        <EstimateResultCard
          report={report}
          onReset={() => setReport(null)}
        />
      )}
    </div>
  );
}
