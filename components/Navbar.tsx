import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="text-muted-foreground max-w-screen-xl mx-auto flex items-center justify-center">
            <div className="flex gap-4 pt-8 font-semibold">
                <Link href="/">Home</Link>
                <Link href="/">Blog</Link>
            </div>
        </nav>
    )
}
