import { Search, ChevronDown } from "lucide-react";

const navItems = ["Problems", "Categories", "Industries", "Leaderboard"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
            <span className="font-display text-lg font-black text-brand-foreground">P</span>
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight">ProblemRank</span>
        </a>

        <div className="relative hidden flex-1 max-w-md md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search problems (⌘ + K)"
            className="h-10 w-full rounded-full border border-border bg-secondary/60 pl-10 pr-4 text-sm outline-none transition focus:border-brand focus:bg-background focus:ring-4 focus:ring-brand/15"
          />
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-foreground/70 transition hover:text-foreground">
              {item}
            </a>
          ))}
          <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition hover:text-foreground">
            Resources <ChevronDown className="h-4 w-4" />
          </button>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button className="hidden rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary sm:inline-flex">
            Submit a problem
          </button>
          <button className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-brand-foreground shadow-glow transition hover:opacity-95">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}