"use client";

import {
  LayoutGrid, Megaphone, DollarSign, Search, Package, Smile, Settings, MoreHorizontal,
  Flame, ChevronDown, Filter, ArrowRight,
  MessageSquare, Box, Users, BarChart3, Heart, ShoppingCart, Shield, Bot, GraduationCap,
  LucideIcon,
} from "lucide-react";

import { useState, useRef, useEffect } from "react";
import { CategoryCard, CategoryCardProps } from "./CategoryCard";

interface Category {
  icon: LucideIcon;
  label: string;
  count: string;
  tone: "violet" | "rose" | "emerald" | "sky" | "orange" | "amber" | "slate";
  active?: boolean;
}

const categories: Category[] = [
  { icon: LayoutGrid, label: "All Problems", count: "All categories", tone: "violet" as const, active: true },
  { icon: Megaphone, label: "Marketing", count: "312 problems", tone: "rose" as const },
  { icon: DollarSign, label: "Sales", count: "284 problems", tone: "emerald" as const },
  { icon: Search, label: "SEO", count: "156 problems", tone: "sky" as const },
  { icon: Package, label: "Product", count: "198 problems", tone: "orange" as const },
  { icon: Smile, label: "Customer Success", count: "167 problems", tone: "amber" as const },
  { icon: Settings, label: "Operations", count: "142 problems", tone: "slate" as const },
];

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

interface Props {
    categories: CategoryCardProps[];
}

const moreCategories = categories.slice(5);

export default function CategoryDropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [])

    return (
        <div className="relative" ref={ref}>
            <button 
            onClick={() => setOpen((prev) => !prev)}
            className="flex min-w-30 py-6 px-5 shadow-lg items-center justify-center gap-2 rounded-2xl border border-black/20 bg-card text-md font-bold text-black/80 transition 
            hover:border-brand/40 hover:text-foreground hover:cursor-pointer">
                <MoreHorizontal className="h-4 w-4" /> More
                <ChevronDown className="h-4 w-4" />
        </button>

        {open && (
        <div className="absolute left-0 top-full z-50 mt-2 flex flex-col gap-2 rounded-2xl border border-black/10 bg-card p-3 shadow-lg">
          {moreCategories.map((c) => (
            <CategoryCard key={c.label} {...c} />
          ))}
        </div>
      )}
        </div>
    )
    
}