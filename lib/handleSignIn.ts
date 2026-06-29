"use server"

import { signIn } from "@/app/auth"
import { SigninProvider } from "@/types"

export default async function handleSignIn(provider : SigninProvider) {
    await signIn(provider)
}