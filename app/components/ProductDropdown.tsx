'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProductDropdownProps {
  label: string;
  items: {
    name: string;
    href: string;
  }[];
}

export default function ProductDropdown({ label, items }: ProductDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="text-[#1d1d1f] hover:text-[#2997ff] text-[17px] font-normal transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>
      
      {/* Dropdown Menu */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-[rgba(251,251,253,0.9)] backdrop-blur-md rounded-xl shadow-lg py-2 transition-all duration-200 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
        style={{ zIndex: 50 }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 border-8 border-transparent border-b-[rgba(251,251,253,0.9)]" />
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-[15px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.04)] transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
} 