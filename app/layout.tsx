import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aleksander Drwal',
  description: `My personal portfolio showcasing my work and experience.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "overflow-x-hidden bg-slate-950")}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
