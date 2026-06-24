import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const problems = await prisma.problem.findMany ({
        include: {
            tags: true
        }
    })

    return NextResponse.json(problems)
}