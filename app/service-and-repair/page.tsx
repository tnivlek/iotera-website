import Image from 'next/image';
import Link from 'next/link';
import { createPageMetadata } from '../lib/metadata';

export const metadata = createPageMetadata({
  title: 'Authorized Repair Services',
  description:
    'Iotera is an authorized service center for Urovo, iData, and Newland, providing diagnostic, maintenance, and repair with genuine manufacturer parts.',
  path: '/service-and-repair',
});

interface RepairHighlight {
  title: string;
  body: string;
}

const AUTHORIZED_BRANDS: readonly string[] = ['Urovo', 'iData', 'Newland'];

const REPAIR_HIGHLIGHTS: readonly RepairHighlight[] = [
  {
    title: 'Genuine parts',
    body: 'Diagnostic, maintenance, and repair solutions using 100% genuine manufacturer parts.',
  },
  {
    title: 'Certified expertise',
    body: 'Certified technical expertise from an authorized service center for Urovo, iData, and Newland.',
  },
  {
    title: 'Peak performance',
    body: 'Fast turnaround times and extended device lifespans ensure enterprise hardware performs at its peak.',
  },
];

const pillClassName =
  'inline-flex items-center justify-center rounded-full bg-[#0071e3] px-8 py-3.5 text-[17px] font-normal text-white transition-colors hover:bg-[#0077ED] min-w-[140px]';

export default function ServiceAndRepairPage() {
  return (
    <main className="flex-1 bg-[#f5f5f7] text-[#1d1d1f]">
      <section className="px-6 pb-16 pt-16 sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-[820px] text-center">
          <Image
            src="/Images/RepairService.png"
            alt="Repair Service"
            width={570}
            height={424}
            priority
            className="mx-auto mb-8 h-auto w-auto max-h-[120px] object-contain"
          />
          <p className="text-[17px] font-normal text-[#6e6e73]">Service and Repair</p>
          <h1 className="mt-3 text-[40px] font-semibold leading-[1.07] tracking-tight sm:text-[56px] lg:text-[64px]">
            Authorized Repair Services
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-[21px] font-normal leading-snug sm:text-[24px]">
            Maintain operational continuity with our professional, certified repair and support services.
          </p>
          <p className="mx-auto mt-5 max-w-[720px] text-[17px] leading-relaxed text-[#6e6e73] sm:text-[19px]">
            As an authorized service center for Urovo, iData, and Newland, we provide reliable diagnostic, maintenance, and repair solutions using 100% genuine manufacturer parts. Empower your business with certified technical expertise, fast turnaround times, and extended device lifespan to ensure your enterprise hardware always operates at peak performance.
          </p>
          <div className="mt-10">
            <Link href="/contact" className={pillClassName}>
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-center text-[32px] font-semibold leading-tight tracking-tight sm:text-[40px]">
            Authorized for
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {AUTHORIZED_BRANDS.map((brand) => (
              <li
                key={brand}
                className="flex min-h-[140px] items-center justify-center rounded-3xl bg-[#f5f5f7] px-6 text-[24px] font-semibold tracking-tight sm:text-[28px]"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-center text-[32px] font-semibold leading-tight tracking-tight sm:text-[40px]">
            What the service covers
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {REPAIR_HIGHLIGHTS.map((item) => (
              <li key={item.title} className="rounded-3xl bg-white px-8 py-10 text-center">
                <h3 className="text-[21px] font-semibold">{item.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-[#6e6e73]">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
