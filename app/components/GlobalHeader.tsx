'use client';

import Link from 'next/link';
import { useState } from 'react';
import BrandLogo from './BrandLogo';

export default function GlobalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <nav className="max-w-[1200px] mx-auto px-3 sm:px-4 h-[60px] flex items-center justify-between">
        <BrandLogo priority />

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/" className="text-[#1d1d1f] hover:text-blue-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/products" className="text-[#1d1d1f] hover:text-blue-600 transition-colors font-medium">
            Products
          </Link>
          <Link href="/about" className="text-[#1d1d1f] hover:text-blue-600 transition-colors font-medium">
            About
          </Link>
          <Link href="/contact" className="text-[#1d1d1f] hover:text-blue-600 transition-colors font-medium">
            Contact
          </Link>
        </div>

        {isMenuOpen && (
          <div className="absolute top-[60px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <Link
                href="/"
                className="text-[#1d1d1f] hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-[#1d1d1f] hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-[#1d1d1f] hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#1d1d1f] hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
