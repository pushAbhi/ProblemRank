"use client"

import { Search } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import NavbarSessionComps from "./NavbarSessionComps";
import { SessionProvider } from "next-auth/react";

const navItems = ["Problems", "Blogs"];

export default function Navbar(){


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8 justify-between">
        <div className="flex w-100 gap-5 flex-1 shrink">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={35} height={35} />
            <span className="font-display text-lg font-extrabold tracking-tight">ProblemRank</span>
          </Link>

          <div className="relative hidden flex-1 md:block w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search problems"
              className="h-10 w-full rounded-2xl shadow bg-secondary pl-10 pr-4 text-sm outline-none transition border-border focus:border-brand focus:ring-2 focus:ring-brand/15"
            />
          </div>
        </div>

        <div className="flex gap-5">
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm font-bold transition hover:text-foreground">
                {item}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <button className="hidden rounded-2xl border border-border px-4 py-2 text-sm font-bold text-foreground transition sm:inline-flex hover:bg-foreground hover:text-secondary hover:cursor-pointer">
              Submit a problem
            </button>

            {/*signIn login buttons */}
            <SessionProvider>
              <NavbarSessionComps />
            </SessionProvider>
          </div>


        </div>
      </div>
    </header>
  );
}