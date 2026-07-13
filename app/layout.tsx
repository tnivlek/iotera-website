import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientHeader from './components/ClientHeader'
import Footer from './components/Footer'
import { SITE_NAME, SITE_URL } from './lib/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Enterprise Solutions for Mobile Computing`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Enterprise solutions for mobile computing, barcode scanning, RFID, and device management.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <div className="min-h-screen flex flex-col pt-[60px]">
          <ClientHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
