import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Flame className="h-3.5 w-3.5" /> ProblemRank © 2026 — Built for builders.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">About</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </footer>
  )
}