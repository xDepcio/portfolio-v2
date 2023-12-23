import Link from "next/link";
import Cat from "./Cat";

export default function Navbar() {
    return (
        <nav className="text-muted-foreground max-w-screen-xl mx-auto flex items-center justify-center">
            <div className="flex gap-8 pt-8 font-semibold relative">
                <Link href="/" className={`hover:text-slate-100 transition-all`}>Home</Link>
                <Link href="/" className={`hover:text-slate-100 transition-all`}>Blog</Link>
                <Cat />
            </div>
        </nav>
    )
}
