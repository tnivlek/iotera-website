import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-[#e8e8ed]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[#86868b] text-sm">
            <Link href="/privacy-policy" className="hover:text-[#2997ff] transition-colors">
              Privacy Policy
            </Link>
            <span>–</span>
            <Link href="/terms-conditions" className="hover:text-[#2997ff] transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <div className="text-[#86868b] text-sm">
            Copyright © 2025 Iotera Technologies Limited - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
} 