'use client';

import Link from 'next/link';
import ProductDropdown from './ProductDropdown';

export default function GlobalHeader() {
  return (
    <div className="sticky top-[45px] z-40 bg-[rgba(251,251,253,0.8)] backdrop-blur-md border-b border-[#d2d2d7]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-center h-[80px] px-4">
          <nav className="flex items-center justify-center w-full">
            <div className="flex items-center justify-center space-x-20">
              <ProductDropdown 
                label="Urovo"
                items={[
                  { name: 'DT50', href: '/products/mobile-computer/dt50' }
                ]}
              />
              <Link href="/products/mobile-computer/idata" className="text-[#1d1d1f] hover:text-[#2997ff] text-[17px] font-normal transition-colors">
                iData
              </Link>
              <Link href="/products/mobile-computer/newland" className="text-[#1d1d1f] hover:text-[#2997ff] text-[17px] font-normal transition-colors whitespace-nowrap">
                Newland AIDC
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
} 