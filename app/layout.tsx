import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Jane Doe — Software Engineer',
  description: 'Portfolio of Jane Doe, a full-stack software engineer who builds fast, accessible, and well-crafted software.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">{children}</body>
    </html>
  )
}
