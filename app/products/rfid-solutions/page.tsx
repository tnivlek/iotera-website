import Link from 'next/link';
import { createPageMetadata } from '../../lib/metadata';

export const metadata = createPageMetadata({
  title: 'RFID Solutions',
  description: 'Enterprise RFID solutions for real-time tracking and inventory visibility.',
  path: '/products/rfid-solutions',
});

export default function RFIDSolutionsPage() {
  return (
    <main className="flex-1 bg-[#fbfbfd]">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1f] mb-6">RFID Solutions</h1>
          <p className="text-xl text-[#86868b] mb-8">
            Real-time tracking and inventory visibility with enterprise-grade RFID technology.
          </p>
          <Link href="/contact" className="text-[#2997ff] hover:underline text-base">
            Contact us for product details &gt;
          </Link>
        </div>
      </section>
    </main>
  );
}
