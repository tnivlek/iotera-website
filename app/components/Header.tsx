'use client';

import Link from "next/link"
import BrandLogo from './BrandLogo'

export default function Header() {
  return (
    <header className="bg-[rgba(251,251,253,0.8)] backdrop-blur-md fixed w-full top-0 z-50">
      <div className="max-w-[1200px] mx-auto py-3 px-3 sm:px-4">
        <nav className="flex items-center justify-between md:justify-center gap-2 sm:gap-4 md:gap-8">
          <BrandLogo priority />
          <ul className="flex min-w-0 items-center space-x-2 sm:space-x-6 md:space-x-10">
            <li>
              <Link href="/" className="whitespace-nowrap text-[12px] sm:text-[14px] md:text-[15px] font-normal text-[#1d1d1f] hover:text-[#2997ff] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="whitespace-nowrap text-[12px] sm:text-[14px] md:text-[15px] font-normal text-[#1d1d1f] hover:text-[#2997ff] transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="whitespace-nowrap text-[12px] sm:text-[14px] md:text-[15px] font-normal text-[#1d1d1f] hover:text-[#2997ff] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="whitespace-nowrap text-[12px] sm:text-[14px] md:text-[15px] font-normal text-[#1d1d1f] hover:text-[#2997ff] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
