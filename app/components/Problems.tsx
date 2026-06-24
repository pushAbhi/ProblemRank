import { ChevronDown, Filter, ArrowRight } from "lucide-react";
import ProblemListSkeleton from "./ProblemListSkeleton";

import { Suspense } from "react";
import { ProblemList } from "./ProblemList";

export default function Problems() {
  return(
      <section className="mt-10 overflow-hidden rounded-3xl border border-black/20 bg-card shadow-card">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 p-5 sm:flex sm:items-center sm:justify-between sm:p-6">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <h2 className="truncate text-xl font-extrabold tracking-tight sm:text-2xl">Top Problems This Week</h2>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Real business problems ranked by opportunity score</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button className="flex items-center gap-2 rounded-full border border-muted-foreground bg-secondary px-3 py-2 text-xs font-medium transition 
            hover:border-brand hover:bg-background hover:cursor-pointer">
              Sort by: <span className="font-semibold">Score (High)</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-muted-foreground bg-secondary px-3 py-2 text-xs font-medium transition 
            hover:border-brand hover:bg-background hover:cursor-pointer">
              <Filter className="h-3.5 w-3.5" /> Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[2rem_auto_minmax(0,1fr)_auto_auto] items-center gap-4 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:px-6">
          <span>#</span>
          <span></span>
          <span>Problem</span>
          <span className="text-right">Score</span>
          <span>Trend</span>
        </div>

        <Suspense fallback={<ProblemListSkeleton />}>
          <ProblemList />
        </Suspense>

        <div className="border-t border-border/70 p-4 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
            View all problems <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
  );
}