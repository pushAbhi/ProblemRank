import { ProblemRow } from "./ProblemRow"
import prisma from "@/lib/prisma"
import { Tone, Icons } from "../types"
import { HelpCircle } from "lucide-react"
import { cacheLife } from "next/cache"

// the top 10 problem list SSR function

export async function ProblemList() {
  "use cache"
  cacheLife("days")
  const raw = await prisma.problem.findMany({
    include: {tags: true}
  })

  const data = raw.map((item) => ({
    ...item,
    tone: item.tone as Tone,
    icon: Icons[item.icon as unknown as string] ?? HelpCircle,
    tags: item.tags ?? []
  }))

  return (
      <div>
        {data.map((p) => (
          <ProblemRow key={p.rank} {...p} />
        ))}
      </div>
  )
} 