import Hero from "./components/Hero"
import { createPageMetadata } from "./lib/metadata"

export const metadata = createPageMetadata({
  title: "Innovative Solutions",
  description: "Transform your business operations with Iotera enterprise mobile computing solutions.",
  path: "/",
})

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
    </main>
  )
} 