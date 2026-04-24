import type { AgentTimelineEvent } from "@/types/agents";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle, XCircle } from "lucide-react";

interface Props {
  events: AgentTimelineEvent[];
}

const statusIcons = {
  done: <CheckCircle size={16} className="text-green-500" />,
  pending: <Circle size={16} className="text-gray-300" />,
  skipped: <XCircle size={16} className="text-gray-300" />,
};

export function AgentTimeline({ events }: Props) {
  return (
    <div className="space-y-3">
      {events.map((event, i) => (
        <div key={event.id} className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            {statusIcons[event.status]}
            {i < events.length - 1 && (
              <div className="w-px h-6 bg-gray-200 mt-1" />
            )}
          </div>
          <div className="pb-3">
            <p
              className={cn(
                "text-sm font-medium",
                event.status === "done" ? "text-gray-900" : "text-gray-400"
              )}
            >
              {event.event}
            </p>
            <p className="text-xs text-gray-500">{event.description}</p>
            <p className="text-xs text-gray-300 mt-0.5">
              {new Date(event.timestamp).toLocaleString("fr-FR")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
