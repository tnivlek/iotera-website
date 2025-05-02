import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientHeader from './components/ClientHeader'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iotera',
  description: 'Enterprise Solutions for Mobile Computing',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <div className="min-h-screen flex flex-col pt-[46px]">
          <ClientHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
