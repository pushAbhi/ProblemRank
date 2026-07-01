"use client"
import { useSession, signOut } from "next-auth/react"
import { useState } from "react";
import AuthCard from "./AuthCard";

const BUTTON_STYLE = "rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold border border-foreground bg-foreground text-background shadow-glow transition hover:opacity-95 hover:bg-secondary hover:text-foreground hover:border-foreground hover:cursor-pointer"

export default function NavbarSessionComps() {
    const { data: session } = useSession()
    const [isAuthOpen, setAuthOpen] = useState(false)

    return (
        <div>
            {!session && (
                <div className="flex justify-between gap-1">
                <button className={BUTTON_STYLE}
                onClick={() => setAuthOpen(true)}>
                    log in
                </button>
                <button className={BUTTON_STYLE}
                onClick={() => setAuthOpen(true)}>
                    Sign up
                </button>
                </div>
            )}
            {session && (
                <button className={BUTTON_STYLE}
                onClick={() => signOut()}
                >Log out</button>
            )

            }
            {isAuthOpen && (
                <AuthCard isAuthOpen={isAuthOpen} setAuthOpen={setAuthOpen}/>
            )
          }
        </div>

    )
}