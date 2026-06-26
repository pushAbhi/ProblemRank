import { TrendingUp } from "lucide-react";
import { ProblemRowProps, tones } from "../types";

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
            {tags.map((t) => (
              <span key={t.id} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {t.name}
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