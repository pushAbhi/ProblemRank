import { HelpCircle } from "lucide-react";
import { CategoryCardProps, Icons, tones } from "@/types";

export function CategoryCard({ icon, label, count, tone, active, onClick }: CategoryCardProps) {
  const Icon = Icons[icon] ?? HelpCircle
  return (
    <button
      className={`group flex w-full items-center justify-between gap-3 rounded-2xl p-5 text-left shadow-lg border transition-transform 
        hover:-translate-y-0.5 hover:border-brand/40 ${
        active ? "border-brand/60 ring-2 bg-card-hover-blue ring-brand/15" 
        : "border-black/20 bg-card"
      }`}
        onClick={onClick}
    >
        <div className="flex justify-center items-center gap-2">
            <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${tones[tone]}`}>
                <Icon className="h-5 w-5" />
            </div>
                <div className="truncate text-sm font-semibold">{label}</div>
        </div>
        <div className="truncate text-xs text-muted-foreground">{count} Problems</div>
    </button>
  );
}