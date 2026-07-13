import Link from 'next/link';

export const BRAND_LOGO_SRC = '/Images/IoteraLogo_Transparent.png';

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ className = '', priority = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`flex shrink-0 items-center bg-transparent ${className}`}>
      {/* Native img keeps PNG alpha; Next/Image optimizer can add a black matte on Windows. */}
      <img
        src={BRAND_LOGO_SRC}
        alt="Iotera Logo"
        width={180}
        height={52}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className="h-7 w-auto max-w-[140px] bg-transparent object-contain sm:h-8 sm:max-w-[160px] md:h-9 md:max-w-[180px]"
      />
    </Link>
  );
}
