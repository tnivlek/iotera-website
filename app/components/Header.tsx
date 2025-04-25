'use client';

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-[rgba(251,251,253,0.8)] backdrop-blur-md fixed w-full top-0 z-50">
      <div className="max-w-[1200px] mx-auto py-3 px-4">
        <nav className="flex items-center justify-center gap-8">
          <div className="w-[140px]">
            <Link href="/" className="flex items-center">
              <div className="relative w-[140px] h-[50px]">
                <Image
                  src="/Images/ioteralogooutline.png"
                  alt="Iotera Logo"
                  fill
                  sizes="140px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <ul className="flex items-center space-x-10">
            <li>
              <Link href="/" className="text-[15px] font-normal text-[#1d1d1f] hover:text-[#2997ff] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[15px] font-normal text-[#1d1d1f] hover:text-[#2997ff] transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[15px] font-normal text-[#1d1d1f] hover:text-[#2997ff] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[15px] font-normal text-[#1d1d1f] hover:text-[#2997ff] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 