import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const problems = await prisma.problem.findMany ({})

    return NextResponse.json(problems)
}