'use client'

import Link from "next/link";
import Cat from "./Cat";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname()

    return (
        <nav className="text-muted-foreground text-sm max-w-screen-xl mx-auto flex items-center justify-center">
            <div className="flex gap-8 pt-8 font-medium relative">
                <Link href="/" className={cn(`hover:text-slate-200 transition-all`, pathName === "/" ? "text-slate-200" : "")}>About</Link>
                <Link href="/blog" className={cn(`hover:text-slate-200 transition-all`, pathName === "/blog" ? "text-slate-200" : "")}>Blog</Link>
                <Cat />
            </div>
        </nav>
    )
}
