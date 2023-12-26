import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-slate-100 mt-16 mb-16">
            <p className="text-muted-foreground text-sm text-center">Created by <Link className="underline inline" href={"https://github.com/xDepcio"}>Aleksander Drwal</Link>. View code <Link href={'https://github.com/xDepcio/portfolio-v2'} className="underline inline">here</Link>.</p>
        </footer>
    )
}
