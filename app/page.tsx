
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import { CategoryCard } from "./components/CategoryCard";
import { ProblemRow } from "./components/ProblemRow";
import CategoryDropdown from "./components/CategoryDropDown";
import Categories from "./components/Categories";
import {
  LayoutGrid, Megaphone, DollarSign, Search, Package, Smile, Settings, MoreHorizontal,
  Flame, ChevronDown, Filter, ArrowRight,
  MessageSquare, Box, Users, BarChart3, Heart, ShoppingCart, Shield, Bot, GraduationCap,
  LucideIcon,
} from "lucide-react";


const problems = [
  { rank: 1, title: "Small businesses struggle with consistent customer support", tags: ["SaaS", "B2B", "Customer Success"], score: 9.2, icon: MessageSquare, tone: "emerald" as const },
  { rank: 2, title: "Creators need better tools to sell digital products", tags: ["Creator Economy", "B2C", "Product"], score: 8.7, icon: Box, tone: "violet" as const },
  { rank: 3, title: "Freelancers find it hard to manage multiple clients", tags: ["Productivity", "B2B", "Operations"], score: 8.3, icon: Users, tone: "orange" as const },
  { rank: 4, title: "Companies lack visibility into team productivity", tags: ["Enterprise", "B2B", "Operations"], score: 8.1, icon: BarChart3, tone: "sky" as const },
  { rank: 5, title: "People want personalized health guidance that's actionable", tags: ["Health", "B2C", "Product"], score: 7.9, icon: Heart, tone: "rose" as const },
  { rank: 6, title: "E-commerce brands struggle with abandoned carts", tags: ["E-commerce", "D2C", "Marketing"], score: 7.8, icon: ShoppingCart, tone: "amber" as const },
  { rank: 7, title: "Teams need simpler security compliance workflows", tags: ["SaaS", "B2B", "Operations"], score: 7.6, icon: Shield, tone: "indigo" as const },
  { rank: 8, title: "Marketers can't prove content actually drives revenue", tags: ["Marketing", "B2B", "Growth"], score: 7.4, icon: Megaphone, tone: "pink" as const },
  { rank: 9, title: "Non-technical teams need easier automation tools", tags: ["No-Code", "SMB", "Product"], score: 7.2, icon: Bot, tone: "lime" as const },
  { rank: 10, title: "Students struggle to stay organized across different tools", tags: ["Education", "B2C", "Productivity"], score: 7.1, icon: GraduationCap, tone: "fuchsia" as const },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <HeroBanner />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Categories */}
        <Categories />

        {/* Top Problems */}
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

          <div>
            {problems.map((p) => (
              <ProblemRow key={p.rank} {...p} />
            ))}
          </div>

          <div className="border-t border-border/70 p-4 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              View all problems <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

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
      </main>
    </div>
  );
}