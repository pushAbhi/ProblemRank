import prisma from "@/lib/prisma";
import { Tone } from "../types";
import CategoriesDiv from "./CategoriesDiv";
import { cacheLife } from "next/cache";

export async function CategoriesList() {
    "use cache"
    cacheLife("days")
    const raw = await prisma.category.findMany({})

    const data = raw.map((item) => ({
        ...item,
        tone: item.tone as Tone,
    }))

    return (
        <CategoriesDiv categories={data}/>
    )
}