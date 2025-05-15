// ✅ layout.tsx (GLOBAL wrapper for your entire app)
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Sameer Taneja ~ (sam)',
  description: 'Sameer Taneja | Life story, beliefs, thoughts. Showing up, building things, not settling.',
  keywords: ['Sameer Taneja', 'Entrepreneur', 'Founder', 'Life story', 'Beliefs', 'Personal site'],
  authors: [{ name: 'Sameer Taneja' }],
  icons: {
    icon: '/favicon.ico', // make sure this exists in public folder
  },
  openGraph: {
    title: 'Sameer Taneja ~ (sam)',
    description: 'Life story, beliefs, and thoughts of Sameer Taneja — a product of grit & curiosity.',
    url: 'https://sameerxtaneja.com',
    siteName: 'Sameer Taneja',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-canela bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
