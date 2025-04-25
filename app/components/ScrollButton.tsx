'use client';

import Link from 'next/link';

export default function ScrollButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('products');
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Speed in milliseconds (lower = faster, higher = slower)
    let start: number | null = null;

    function animation(currentTime: number) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <Link
      href="#products"
      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full 
      bg-[#e8e8ed] text-[#1d1d1f] text-[17px] font-normal hover:bg-[#d2d2d7] transition-colors
      min-w-[140px]"
      onClick={handleClick}
    >
      Learn more
    </Link>
  );
} 