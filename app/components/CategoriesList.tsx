import prisma from "@/lib/prisma";
import { Tone } from "../types";
import { CategoryCard } from "./CategoryCard";
import CategoryDropdown from "./CategoryDropDown";

export async function CategoriesList() {

    const raw = await prisma.category.findMany({})

    const data = raw.map((item) => ({
        ...item,
        tone: item.tone as Tone,
    }))

    const displayCategories = data.slice(0,4)
    const moreCategories = data.slice(4,6)

    return (
        <div className="mt-5 flex gap-3 overflow-y-visible pb-2 pt-2 scrollbar-thin">
            {displayCategories.map((c) => (
                <CategoryCard key={c.label} label={c.label} icon={c.icon} count={c.count} tone={c.tone} active={false} />
            ))}
            <CategoryDropdown categories={moreCategories} /> 
        </div>
    )
}