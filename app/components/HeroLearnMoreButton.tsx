'use client';

import { useRef } from 'react';

type HeroLearnMoreButtonProps = {
  targetId?: string;
};

const SCROLL_DURATION_MS = 1400;
const HEADER_OFFSET_PX = 46;

export default function HeroLearnMoreButton({ targetId = 'products' }: HeroLearnMoreButtonProps) {
  const frameRef = useRef<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    const startPosition = window.scrollY;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
    const distance = targetPosition - startPosition;

    const finishScroll = () => {
      root.style.scrollBehavior = previousScrollBehavior;
      frameRef.current = null;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: targetPosition, left: 0, behavior: 'auto' });
      finishScroll();
      return;
    }

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
      const nextPosition = Math.round(startPosition + distance * easeInOutCubic(progress));

      window.scrollTo({ top: nextPosition, left: 0, behavior: 'auto' });

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      finishScroll();
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full 
      bg-[#e8e8ed] text-[#1d1d1f] text-[17px] font-normal hover:bg-[#d2d2d7] transition-colors
      min-w-[140px]"
    >
      Learn more
    </a>
  );
}
