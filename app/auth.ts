import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma";

const clientId = process.env.AUTH_GOOGLE_ID as string;
const clientSecret = process.env.AUTH_GOOGLE_SECRET as string;

if (!clientId || !clientSecret) {
    console.log("Error: google clientId or clientSecret is not set")
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google({
        clientId: clientId,
        clientSecret: clientSecret,
    })],
})