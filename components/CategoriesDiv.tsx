"use client"

import { useState } from "react";
import { CategoryCardProps } from "../types"
import { CategoryCard } from "./CategoryCard"
import CategoryDropdown from "./CategoryDropDown"

// handles client side selectivity.

interface CategoriesDivProps {
  categories: CategoryCardProps[];
}

export default function CategoriesDiv({categories}: CategoriesDivProps) {

    // setting active category
    const [activeCategory, setActiveCategory] = useState("All Problems")

    // splitting categories
    const displayCategories = categories.slice(0,6)

    return (
        <div className="mt-5 flex gap-3 overflow-y-visible overflow-auto pb-2 pt-2 scrollbar-none">
            {displayCategories.map((c) => (
                <CategoryCard 
                key={c.label} label={c.label} icon={c.icon} count={c.count} tone={c.tone} 
                active={(c.label === activeCategory)} 
                onClick={() => setActiveCategory(c.label)}
                />
            ))}
        </div>
    )
}