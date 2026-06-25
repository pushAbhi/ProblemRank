import prisma from "@/lib/prisma";
import { Tone } from "../types";
import CategoriesDiv from "./CategoriesDiv";

export async function CategoriesList() {

    const raw = await prisma.category.findMany({})

    const data = raw.map((item) => ({
        ...item,
        tone: item.tone as Tone,
    }))

    return (
        <CategoriesDiv categories={data}/>
    )
}