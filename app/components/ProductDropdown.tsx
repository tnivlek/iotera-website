'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProductDropdownProps {
  label: string;
  items: {
    name: string;
    href: string;
  }[];
  isActive?: boolean;
}

export default function ProductDropdown({ label, items, isActive = false }: ProductDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const labelClass = isActive
    ? 'text-[#2997ff]'
    : 'text-[#1d1d1f] group-hover:text-[#2997ff]';

  const menuClass = isOpen
    ? 'opacity-100 visible translate-y-0'
    : 'opacity-0 invisible translate-y-1 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0';

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={`text-[17px] font-normal transition-colors duration-200 ${labelClass}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 pt-2 transition-all duration-300 ease-out ${menuClass}`}
      >
        <div className="overflow-hidden rounded-xl bg-[rgba(251,251,253,0.95)] py-2 shadow-lg backdrop-blur-md">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-[15px] text-[#1d1d1f] transition-colors duration-200 hover:bg-[rgba(0,0,0,0.04)] hover:text-[#2997ff]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
