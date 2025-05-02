'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ProductDropdown from './ProductDropdown';

export default function GlobalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-[1200px] mx-auto px-4 h-[46px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ImagesContainer/IoteraLogoChoped.png"
            alt="Iotera Logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#1d1d1f] hover:text-gray-600">
            Home
          </Link>
          <Link href="/products" className="text-[#1d1d1f] hover:text-gray-600">
            Products
          </Link>
          <Link href="/about" className="text-[#1d1d1f] hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="text-[#1d1d1f] hover:text-gray-600">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-[46px] left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                href="/" 
                className="text-[#1d1d1f] hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-[#1d1d1f] hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="text-[#1d1d1f] hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-[#1d1d1f] hover:text-gray-600"
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