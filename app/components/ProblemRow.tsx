import { TrendingUp, type LucideIcon } from "lucide-react";

export interface ProblemRowProps {
  rank: number;
  title: string;
  tags: string[];
  score: number;
  icon: LucideIcon;
  tone: "emerald" | "violet" | "orange" | "sky" | "rose" | "amber" | "indigo" | "pink" | "lime" | "fuchsia";
}

const tones: Record<ProblemRowProps["tone"], string> = {
  emerald: "bg-emerald-100 text-emerald-600",
  violet: "bg-violet-100 text-violet-600",
  orange: "bg-orange-100 text-orange-600",
  sky: "bg-sky-100 text-sky-600",
  rose: "bg-rose-100 text-rose-600",
  amber: "bg-amber-100 text-amber-600",
  indigo: "bg-indigo-100 text-indigo-600",
  pink: "bg-pink-100 text-pink-600",
  lime: "bg-lime-100 text-lime-600",
  fuchsia: "bg-fuchsia-100 text-fuchsia-600",
};

export function ProblemRow({ rank, title, tags, score, icon: Icon, tone }: ProblemRowProps) {
  return (
    <div className="grid grid-cols-[2rem_auto_minmax(0,1fr)_auto_auto] items-center gap-3 border-t border-muted-foreground/30 px-4 py-4 transition hover:bg-hover-dark/50 sm:px-6">
      <span className="text-sm font-bold text-black">{rank}</span>
      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tones[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm font-semibold text-black sm:text-[15px]">{title}</span>
          <div className="flex flex-wrap gap-1.5">
            {(tags ?? []).map((t) => (
              <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className="text-lg font-bold tabular-nums text-black">{score.toFixed(1)}</span>
      <TrendingUp className="h-4 w-4 text-success ml-7 mr-2" />
    </div>
  );
}