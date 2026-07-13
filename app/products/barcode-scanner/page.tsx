import Link from 'next/link';
import { createPageMetadata } from '../../lib/metadata';

export const metadata = createPageMetadata({
  title: 'Barcode Scanner',
  description: 'High-performance barcode scanning solutions for reliable and efficient business operations.',
  path: '/products/barcode-scanner',
});

export default function BarcodeScannerPage() {
  return (
    <main className="flex-1 bg-[#fbfbfd]">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1f] mb-6">Barcode Scanner</h1>
          <p className="text-xl text-[#86868b] mb-8">
            High-performance barcode scanning solutions for reliable and efficient operations.
          </p>
          <Link href="/contact" className="text-[#2997ff] hover:underline text-base">
            Contact us for product details &gt;
          </Link>
        </div>
      </section>
    </main>
  );
}
