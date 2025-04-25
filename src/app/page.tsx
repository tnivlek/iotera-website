import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="IOT-ERA Logo" width={120} height={40} priority />
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-sm uppercase font-medium text-gray-700 hover:text-teal-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm uppercase font-medium text-gray-700 hover:text-teal-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm uppercase font-medium text-gray-700 hover:text-teal-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm uppercase font-medium text-gray-700 hover:text-teal-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Innovative Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">Transform your business operations.</p>
        <Link
          href="/products"
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 py-3 rounded-full transition-colors"
        >
          Learn more
        </Link>
      </section>
    </main>
  )
}

