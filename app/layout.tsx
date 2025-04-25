import type { Metadata } from "next"
import "./globals.css"
import ClientHeader from './components/ClientHeader'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: "IOT-ERA | Innovative Solutions",
  description: "Transform your business operations with IOT-ERA solutions",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica_Neue',sans-serif] bg-[#fbfbfd] text-[#1d1d1f] antialiased" suppressHydrationWarning>
        <div className="min-h-screen flex flex-col pt-[46px]">
          <ClientHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
