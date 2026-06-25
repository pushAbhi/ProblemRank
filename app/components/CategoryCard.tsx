import { HelpCircle } from "lucide-react";
import { CategoryCardProps, Icons, tones } from "../types";

export function CategoryCard({ icon, label, count, tone, active, onClick }: CategoryCardProps) {
  const Icon = Icons[icon] ?? HelpCircle
  return (
    <button
      className={`group flex min-w-45 items-center justify-start gap-3 rounded-2xl p-3 text-left shadow-lg border transition-transform 
        hover:-translate-y-0.5 hover:border-brand/40 ${
        active ? "border-brand/60 ring-2 bg-card-hover-blue ring-brand/15" 
        : "border-black/20 bg-card"
      }`}
        onClick={onClick}
    >
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tones[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold">{label}</div>
        <div className="truncate text-xs text-muted-foreground">{count} Problems</div>
      </div>
    </button>
  );
}