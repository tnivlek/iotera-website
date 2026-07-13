'use client';

import { usePathname } from 'next/navigation';

type PageFadeInProps = {
  children: React.ReactNode;
};

export default function PageFadeIn({ children }: PageFadeInProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-fade-in flex-1">
      {children}
    </div>
  );
}
