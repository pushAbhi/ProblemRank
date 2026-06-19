import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    const categories = await prisma.category.findMany ({
        select: {
            count: true,
            icon: true,
            label: true,
            tone: true,
        }
    });

    return NextResponse.json(categories)
}