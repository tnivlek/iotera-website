import Link from 'next/link';
import { createPageMetadata } from '../../lib/metadata';

export const metadata = createPageMetadata({
  title: 'EMM Solutions',
  description: 'Securely deploy, manage, and monitor enterprise mobile devices at scale with EMM solutions.',
  path: '/products/emm-solutions',
});

export default function EMMSolutionsPage() {
  return (
    <main className="flex-1 bg-[#fbfbfd]">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1f] mb-6">EMM Solutions</h1>
          <p className="text-xl text-[#86868b] mb-8">
            Securely deploy, manage, and monitor enterprise mobile devices at scale.
          </p>
          <Link href="/contact" className="text-[#2997ff] hover:underline text-base">
            Contact us for product details &gt;
          </Link>
        </div>
      </section>
    </main>
  );
}
