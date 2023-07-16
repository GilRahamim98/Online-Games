import './globals.css'
import type { Metadata } from 'next'
import { AppProvider } from './context/store'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gamez',
  description: 'The Best Games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body suppressHydrationWarning={true}>
      <AppProvider>

        <Header/>
        <main>{children}</main>
        </AppProvider>

        </body>
    </html>
  )
}
