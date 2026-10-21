import Image from 'next/image';
import Link from 'next/link';
import MobileComputerSubNav from '../../../../components/MobileComputerSubNav';
import { createPageMetadata } from '../../../../lib/metadata';

export const metadata = createPageMetadata({
  title: 'iData T5',
  description:
    'iData T5 enterprise mobile computer with an AI scanning engine, Android 15, Wi-Fi 6, and IP67 durability.',
  path: '/products/mobile-computer/idata/t5',
});

interface SpecItem {
  label: string;
  value: string;
}

interface SpecGroup {
  title: string;
  items: readonly SpecItem[];
}

const HIGHLIGHTS: readonly SpecItem[] = [
  { label: 'Android 15', value: 'Android Enterprise Recommended' },
  { label: 'IP67', value: 'Dust and water resistant' },
  { label: '6" display', value: '1440 × 720, 1080p optional' },
  { label: 'Memory', value: '6GB + 64GB, up to 8GB + 128GB' },
];

const FEATURES: readonly SpecItem[] = [
  {
    label: 'AI Scanning Engine',
    value:
      'High-performance scanning module with the latest engine and iData smart algorithm, for damaged, wrinkled, or curved barcodes.',
  },
  {
    label: 'Flagship Configuration',
    value:
      'Octa-core 2.4 GHz processor and large memory for faster data processing, with Wi-Fi 6 for stable connectivity.',
  },
  {
    label: 'Field Ready',
    value:
      '5100mAh removable battery, 18W charging, glove and wet-hand touch, and a 1.5 m drop specification.',
  },
];

const INDUSTRIES: readonly string[] = [
  'Retail',
  'Logistics',
  'Manufacturing',
  'Medical',
  'Public Service',
];

interface MediaTile {
  src: string;
  alt: string;
  title: string;
  detail: string;
}

const HIGHLIGHT_TILES: readonly MediaTile[] = [
  {
    src: '/Images/iData/T5/highlights/screen.png',
    alt: 'iData T5 6-inch IPS screen',
    title: '6-inch IPS screen',
    detail: '2160 × 1080 resolution optional',
  },
  {
    src: '/Images/iData/T5/highlights/thin.png',
    alt: 'iData T5 side profile',
    title: '14.95 mm',
    detail: 'Ultra-thin design',
  },
  {
    src: '/Images/iData/T5/highlights/charging.png',
    alt: 'iData T5 charging port',
    title: '18W fast charging',
    detail: 'Type-C and pin charging',
  },
  {
    src: '/Images/iData/T5/highlights/waterproof.png',
    alt: 'iData T5 waterproof and dustproof',
    title: 'Waterproof. Dustproof.',
    detail: 'IP67 sealing',
  },
  {
    src: '/Images/iData/T5/highlights/battery.png',
    alt: 'iData T5 detachable battery',
    title: '5100 mAh',
    detail: 'Detachable battery',
  },
  {
    src: '/Images/iData/T5/highlights/speaker.png',
    alt: 'iData T5 loud speaker',
    title: '103 dB',
    detail: 'Loud speaker',
  },
];

const ACCESSORIES: readonly MediaTile[] = [
  {
    src: '/Images/iData/T5/accessories/grip.png',
    alt: 'iData T5 handle grip',
    title: 'Handle grip',
    detail: 'Pistol grip for scanning',
  },
  {
    src: '/Images/iData/T5/accessories/battery.png',
    alt: 'iData T5 battery on a charger',
    title: 'Battery charger',
    detail: 'Spare battery charging',
  },
  {
    src: '/Images/iData/T5/accessories/cradle.png',
    alt: 'iData T5 in a charging cradle',
    title: 'Charging cradle',
    detail: 'Desk dock for the T5',
  },
  {
    src: '/Images/iData/T5/accessories/multi-slot.png',
    alt: 'iData T5 multi-slot charger',
    title: 'Multi-slot charger',
    detail: 'Charge several devices together',
  },
];

const SPEC_GROUPS: readonly SpecGroup[] = [
  {
    title: 'System',
    items: [
      { label: 'Processor', value: 'Octa-core 2.4 GHz' },
      { label: 'OS', value: 'Android 15.0 AER' },
      { label: 'Memory', value: '6GB + 64GB standard, 8GB + 128GB optional' },
      { label: 'SIM', value: 'Dual SIM, dual standby. Nano SIM + Nano SIM, or Nano SIM + TF card' },
      { label: 'eSIM', value: 'Optional' },
      { label: 'Expansion', value: 'Micro SD, up to 512GB' },
    ],
  },
  {
    title: 'Display and cameras',
    items: [
      { label: 'Display', value: '6" IPS, 1440 × 720 standard, 2160 × 1080 optional' },
      { label: 'Touch', value: 'Industrial capacitive, wet-hand, glove, and multi-touch' },
      { label: 'Camera', value: '16MP rear with autofocus, 8MP front' },
      { label: 'Keys', value: 'Scan ×2, power, volume ×2, custom key' },
    ],
  },
  {
    title: 'Communication',
    items: [
      { label: 'WLAN', value: 'Wi-Fi 6, 802.11 a/b/g/n/ac/ax, 2.4 GHz + 5 GHz' },
      { label: 'WWAN', value: '4G LTE, with China, Eurasia, and global band options' },
      { label: 'Bluetooth', value: 'Bluetooth 5.2, BLE' },
      { label: 'Positioning', value: 'GPS, AGPS, BDS, Galileo, GLONASS, QZSS' },
      { label: 'NFC', value: '13.56 MHz, ISO14443A/B and ISO15693, within 60 mm' },
    ],
  },
  {
    title: 'Scanning',
    items: [
      { label: 'Barcodes', value: '1D and 2D' },
      { label: 'OCR', value: 'Supported' },
      { label: 'Accuracy', value: '≥ 3.33 mil' },
      { label: 'Motion tolerance', value: '8 m/s' },
      { label: 'Angles', value: 'Pitch ±60°, skew ±45°, tilt 360°' },
    ],
  },
  {
    title: 'Durability',
    items: [
      { label: 'Ingress', value: 'IP67' },
      { label: 'Drop', value: '1.5 m to concrete, multiple drops' },
      { label: 'Tumble', value: '1,000 tumbles from 0.5 m' },
      { label: 'Operating', value: '−20°C to 55°C' },
      { label: 'ESD', value: '±15 kV air, ±8 kV contact' },
    ],
  },
  {
    title: 'Physical',
    items: [
      { label: 'Dimensions', value: '163 × 77.7 × 14.95 mm' },
      { label: 'Weight', value: '290 g including battery' },
      { label: 'Battery', value: '3.87 V, 5100mAh, removable' },
      { label: 'Charging', value: 'Type-C and pin charging, 18W' },
    ],
  },
];

export default function IDataT5Page() {
  return (
    <div className="bg-[#fbfbfd]">
      <MobileComputerSubNav active="idata" />

      <section className="relative min-h-screen bg-[#f5f5f7] sm:h-[92vh]">
        <div className="mx-auto h-full max-w-[1380px] px-5 sm:px-7">
          <div className="grid h-full grid-cols-1 items-center gap-9 py-9 sm:py-14 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <h1 className="mb-5 text-[37px] font-bold leading-tight text-[#1d1d1f] sm:text-[46px] lg:text-[64px]">
                iData T5
              </h1>
              <p className="text-[21px] leading-snug text-[#1d1d1f]/90 sm:text-[28px] lg:text-[37px]">
                Robust performance for demanding operations
              </p>
            </div>
            <div className="relative order-1 flex min-h-[345px] items-center justify-center sm:min-h-[460px] lg:order-2 lg:min-h-[575px]">
              <Image
                src="/Images/iData/T5/hero.png"
                alt="iData T5 front and rear"
                width={2854}
                height={2807}
                priority
                className="h-auto w-full max-w-[460px] object-contain sm:max-w-[520px] lg:max-w-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
              <Image
                src="/Images/iData/T5/angle.png"
                alt="iData T5 angled view"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
              <h2 className="text-[28px] font-semibold leading-tight text-[#1d1d1f] sm:text-[32px] lg:text-[40px]">
                AI scanning for real-world barcodes
              </h2>
              <p className="text-[16px] leading-relaxed text-[#86868b] sm:text-[18px] lg:text-[21px]">
                The latest scanning engine and iData smart algorithm improve reading on damaged, wrinkled, or curved barcodes.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:gap-8">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="text-center lg:text-left">
                    <h3 className="mb-1 text-[18px] font-semibold text-[#1d1d1f] sm:mb-2 sm:text-[20px] lg:text-[24px]">
                      {item.label}
                    </h3>
                    <p className="text-[14px] text-[#86868b] sm:text-[15px] lg:text-[17px]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbfd] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-[28px] font-semibold leading-tight text-[#1d1d1f] sm:text-[32px] lg:text-[40px]">
                Flagship core, stable connection
              </h2>
              <p className="text-[17px] leading-relaxed text-[#86868b] sm:text-[21px]">
                A high-performance CPU and large memory raise data processing capacity. Wi-Fi 6 keeps the connection stable.
              </p>
              <div className="space-y-3">
                <p className="text-[17px] text-[#86868b] sm:text-[21px]">Wi-Fi 6, 2.4 GHz and 5 GHz</p>
                <p className="text-[17px] text-[#86868b] sm:text-[21px]">4G LTE</p>
                <p className="text-[17px] text-[#86868b] sm:text-[21px]">Bluetooth 5.2 with BLE</p>
              </div>
            </div>
            <div className="relative h-[420px] sm:h-[520px]">
              <Image
                src="/Images/iData/T5/rear.png"
                alt="iData T5 rear camera and scanner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="mb-8 text-center text-[28px] font-semibold text-[#1d1d1f] sm:mb-12 sm:text-[32px] lg:mb-16 lg:text-[40px]">
            Built around the workday
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {HIGHLIGHT_TILES.map((tile) => (
              <li key={tile.src} className="overflow-hidden rounded-3xl bg-[#111111]">
                <Image
                  src={tile.src}
                  alt={`${tile.title}. ${tile.detail}`}
                  width={564}
                  height={273}
                  className="h-auto w-full"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="text-center text-[28px] font-semibold text-[#1d1d1f] sm:text-[32px] lg:text-[40px]">
            One-stop solution for daily operational needs
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {ACCESSORIES.map((item) => (
              <li key={item.src} className="flex flex-col rounded-3xl bg-white p-5 shadow-sm">
                <div className="relative mb-5 flex h-[220px] items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center text-[20px] font-semibold text-[#1d1d1f]">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#fbfbfd] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="mb-8 text-center text-[28px] font-semibold text-[#1d1d1f] sm:mb-12 sm:text-[32px] lg:mb-16 lg:text-[40px]">
            Built for complex work
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.label} className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-[21px] font-semibold text-[#1d1d1f] sm:text-[24px]">{feature.label}</h3>
                <p className="text-[17px] leading-relaxed text-[#86868b]">{feature.value}</p>
              </div>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry) => (
              <li
                key={industry}
                className="rounded-full bg-white px-5 py-2 text-[15px] text-[#1d1d1f] shadow-sm"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="text-center text-[28px] font-semibold text-[#1d1d1f] sm:text-[32px] lg:text-[40px]">
            Technical Specifications
          </h2>
          <div className="mb-10 mt-6 flex justify-center sm:mb-16">
            <a
              href="/downloads/iData-T5-Product-Brochure.pdf"
              download="iData-T5-Product-Brochure.pdf"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#0071e3] px-8 py-3.5 text-[17px] font-normal text-white transition-colors hover:bg-[#0077ED]"
            >
              Product Brochure
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {SPEC_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-6 text-[24px] font-semibold text-[#1d1d1f]">{group.title}</h3>
                <ul className="space-y-4 text-[17px]">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-8">
                      <span className="shrink-0 text-[#86868b]">{item.label}</span>
                      <span className="text-[#1d1d1f] sm:text-right">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[14px] text-[#86868b]">
            Specifications follow the iData T5 product page. Optional configurations are marked as optional.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <h2 className="mb-6 text-[32px] font-semibold text-[#1d1d1f] sm:text-[40px]">
            Talk to us about the T5
          </h2>
          <p className="mb-8 text-[18px] text-[#86868b] sm:text-[21px]">
            Contact Iotera for availability, configuration, and service.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-[#0071e3] px-8 py-3.5 text-[17px] font-normal text-white transition-colors hover:bg-[#0077ED]"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
