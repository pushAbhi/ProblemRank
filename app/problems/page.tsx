"use client"

import { ChevronDown, Filter, HelpCircle } from "lucide-react"
import Categories from "./components/Categories"
import Tags from "./components/Tags"
import { ProblemRow } from "@/components/ProblemRow"
import Pages from "./components/Pages"

export default function problems() {
    return (
        <div className="flex h-full bg-background">
            {/* SIDEBAR */}
            <div className="border-r border-black bg-secondary flex-2 flex flex-col p-15 gap-7 max-w-[25%]">
                <div>
                    <h2 className="font-extrabold text-2xl">Categories</h2>
                    <Categories />
                </div>
                <div>
                    <h2 className="font-extrabold text-2xl">Tags</h2>
                    <Tags />
                </div>
            </div>

            {/* PROBLEMS */}
            <div className="flex-9 px-20 py-15">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-extrabold text-3xl">All Problems</h1>
                        <p>1,234 real business problems from entrepreneurs and professionals</p>
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

                {/* Problem list */}
                <div className="mb-5">
                    <div className="grid grid-cols-[2rem_auto_minmax(0,1fr)_auto_auto] items-center gap-4 px-4 py-2 mt-10 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:px-6">
                        <span>#</span>
                        <span>PROBLEM</span>
                        <span>SCORE</span>
                        <span>TREND</span>
                    </div>
                    <div className="bg-secondary border border-gray-500/50 rounded-sm">
                        <ProblemRow rank={1} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={2} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={3} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={4} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={5} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={6} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={7} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={8} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={9} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                        <ProblemRow rank={10} title="Freelancers find it hard to manage multiple clients" tags={[{id:"SaaS", name:"Hello"}]} score={9.9} icon={HelpCircle} tone="violet" />
                    </div>
                </div>
                <Pages />
            </div>
        </div>
    )
}