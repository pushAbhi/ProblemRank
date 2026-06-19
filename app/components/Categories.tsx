"use client"

import * as Icons from "lucide-react";
import type {LucideIcon} from "lucide-react";
import { Settings } from "lucide-react";

import { useEffect, useState } from "react"
import { CategoryCard } from "./CategoryCard";
import CategoryDropdown from "./CategoryDropDown";

export type Tone = "violet" | "rose" | "emerald" | "sky" | "orange" | "amber" | "slate";

export interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  count: number;
  tone: Tone;
  active?: boolean;
}

export default function Categories() {
    const [categories, setCategories] = useState<CategoryCardProps[]>([{ label: "Settingss", tone:"violet", icon:Settings, count:23 } ]);

    useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item: CategoryCardProps) => ({
          ...item,
          tone: item.tone as Tone,
          icon: Icons.HelpCircle
        }))
        setCategories(formattedData);
      })
      .catch((err) => console.log("Error Fetching client", err))
    }, [])

    return (
    <section>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Choose a problem area</h1>
          <p className="mt-1 text-sm text-muted-foreground">Explore problems across different business functions</p>

          <div className="mt-5 flex gap-3 overflow-y-visible pb-2 pt-2 scrollbar-thin">
            {categories.map((c) => (
              <CategoryCard key={c.label} label={c.label} icon={c.icon} count={c.count} tone={c.tone} active={false} />
            ))}
            <CategoryDropdown />
          </div>
        </section>
    )
}