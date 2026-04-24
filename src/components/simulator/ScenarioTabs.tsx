"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface ScenarioTabsProps {
  tabs: Tab[];
  children: (activeTab: string) => React.ReactNode;
}

export function ScenarioTabs({ tabs, children }: ScenarioTabsProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors",
              active === tab.id
                ? "border-[var(--homebn-navy)] text-[var(--homebn-navy)]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children(active)}
    </div>
  );
}
