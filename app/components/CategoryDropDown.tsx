"use client";

import {MoreHorizontal,ChevronDown} from "lucide-react";

import { useState, useRef, useEffect } from "react";
import { CategoryCard, CategoryCardProps } from "./CategoryCard";

export default function CategoryDropdown({ categories }: {categories: CategoryCardProps[]}) {
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
          {categories?.map((c: CategoryCardProps) => (
            <CategoryCard key={c.label} label={c.label} icon={c.icon} count={c.count} tone={c.tone} active={false} />
          ))}
        </div>
      )}
        </div>
    )
    
}