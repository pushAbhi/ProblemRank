import type { LucideIcon } from "lucide-react";

export interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  count: string;
  tone: "violet" | "rose" | "emerald" | "sky" | "orange" | "amber" | "slate";
  active?: boolean;
}

const tones: Record<CategoryCardProps["tone"], string> = {
  violet: "bg-violet-100 text-violet-600",
  rose: "bg-rose-100 text-rose-600",
  emerald: "bg-emerald-100 text-emerald-600",
  sky: "bg-sky-100 text-sky-600",
  orange: "bg-orange-100 text-orange-600",
  amber: "bg-amber-100 text-amber-600",
  slate: "bg-slate-100 text-slate-600",
};

export function CategoryCard({ icon: Icon, label, count, tone, active }: CategoryCardProps) {
  return (
    <button
      className={`group flex min-w-45 items-center justify-start gap-3 rounded-2xl bg-card p-3 text-left shadow-lg border border-black/20 transition hover:-translate-y-0.5 hover:border-brand/40 ${
        active ? "border-brand/60 ring-2 bg-card-hover-blue ring-brand/15" : "border-border"
      }`}
    >
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tones[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-">{label}</div>
        <div className="truncate text-xs text-muted-foreground">{count}</div>
      </div>
    </button>
  );
}