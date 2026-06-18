"use client"

import {
  LayoutGrid, Megaphone, DollarSign, Search, Package, Smile, Settings, MoreHorizontal,
  Flame, ChevronDown, Filter, ArrowRight,
  MessageSquare, Box, Users, BarChart3, Heart, ShoppingCart, Shield, Bot, GraduationCap,
  LucideIcon,
} from "lucide-react";

import { useEffect } from "react"
import { CategoryCard } from "./CategoryCard";
import CategoryDropdown from "./CategoryDropDown";


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

const mainCategories = categories.slice(0, 5);

export default function Categories() {
    useEffect(() => {
    }, [])
    return (
    <section>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Choose a problem area</h1>
          <p className="mt-1 text-sm text-muted-foreground">Explore problems across different business functions</p>

          <div className="mt-5 flex gap-3 overflow-y-visible pb-2 pt-2 scrollbar-thin">
            {mainCategories.map((c) => (
              <CategoryCard key={c.label} {...c} />
            ))}
            <CategoryDropdown />
          </div>
        </section>
    )
}