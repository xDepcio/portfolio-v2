import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Aleksander Drwal',
    description: `Personal portfolio showcasing my work and experience.`,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "overflow-x-hidden bg-slate-950")}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
