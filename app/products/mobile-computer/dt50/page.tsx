import Image from 'next/image';
import Link from 'next/link';
import MobileComputerSubNav from '../../../components/MobileComputerSubNav';
import { createPageMetadata } from '../../../lib/metadata';

export const metadata = createPageMetadata({
  title: 'UROVO DT50',
  description: 'Discover the UROVO DT50 mobile computer with advanced scanning, all-day battery, and enterprise durability.',
  path: '/products/mobile-computer/dt50',
});

interface CertificationLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const LOGO_DIR = '/ImagesContainer/Product/Mobile Computer';

// width/height must match the trimmed image files: they drive equal-area sizing.
const CERTIFICATION_LOGOS: readonly CertificationLogo[] = [
  { src: `${LOGO_DIR}/GMS_Dark.png`, alt: 'Google Mobile Services', width: 101, height: 45 },
  { src: `${LOGO_DIR}/AER_Dark.png`, alt: 'Android Enterprise Recommended', width: 149, height: 43 },
  { src: `${LOGO_DIR}/Omnissa.png`, alt: 'Omnissa Workspace ONE UEM', width: 1200, height: 223 },
  { src: `${LOGO_DIR}/wifi_Dark.png`, alt: 'Wi-Fi Certified', width: 227, height: 137 },
  { src: `${LOGO_DIR}/SOTIMobiControl_Dark.png`, alt: 'SOTI MobiControl Certified', width: 156, height: 36 },
  { src: `${LOGO_DIR}/SafeUEM_Logo.png`, alt: 'SafeUEM', width: 600, height: 398 },
];

export default function DT50Page() {
  return (
    <div className="bg-[#fbfbfd]">
      <MobileComputerSubNav active="dt50" />

      {/* Hero Section */}
      <section className="relative min-h-screen sm:h-[92vh] bg-[#f5f5f7]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-14 h-full py-9 sm:py-14">
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-[37px] sm:text-[46px] lg:text-[64px] font-bold text-[#1d1d1f] mb-5 leading-tight">
                UROVO DT50
              </h1>
              <p className="text-[21px] sm:text-[28px] lg:text-[37px] text-[#1d1d1f]/90 mb-9 sm:mb-14">
                With DT50, anything is possible
              </p>
              {/* Certification Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-items-center gap-x-5 gap-y-6 sm:gap-x-7 lg:gap-x-9 lg:gap-y-8 mt-7 sm:mt-9 [--logo-scale:44px] sm:[--logo-scale:52px] lg:[--logo-scale:60px]">
                {CERTIFICATION_LOGOS.map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="w-auto object-contain"
                    style={{ height: `calc(var(--logo-scale) * ${Math.sqrt(logo.height / logo.width).toFixed(3)})` }}
                  />
                ))}
              </div>
            </div>

            {/* Right Content - Product Image */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[345px] sm:min-h-[460px] lg:min-h-[575px]">
              <Image
                src="/ImagesContainer/Product/Mobile Computer/Urovo/dt50hht.png"
                alt="DT50 Mobile Computer"
                width={460}
                height={613}
                className="object-contain w-full h-auto max-w-[345px] sm:max-w-[403px] lg:max-w-[518px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] order-2 lg:order-1">
              <Image
                src="/ImagesContainer/Product/Mobile Computer/Urovo/DT50_1080x1080.png"
                alt="DT50 Overview"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-[#1d1d1f] leading-tight">
                Designed for Enterprise
              </h2>
              <p className="text-[16px] sm:text-[18px] lg:text-[21px] text-[#86868b] leading-relaxed">
                The DT50 combines powerful Android performance with enterprise-grade durability.
                Built to enhance productivity in retail, logistics, and field operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#1d1d1f] mb-1 sm:mb-2">Android 13</h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[17px] text-[#86868b]">Latest enterprise features</p>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#1d1d1f] mb-1 sm:mb-2">IP67</h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[17px] text-[#86868b]">Dust & water resistant</p>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#1d1d1f] mb-1 sm:mb-2">5.7&quot; Display</h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[17px] text-[#86868b]">Corning® Gorilla® Glass</p>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#1d1d1f] mb-1 sm:mb-2">Memory</h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[17px] text-[#86868b]">Up to 8+128 GB memory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-channel Transmission Section */}
      <section className="py-20 bg-[#fbfbfd]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-[40px] font-semibold text-[#1d1d1f] leading-tight">
                Multi-channel transmission,
                <br />
                message transmitted in a second
              </h2>
              <div className="space-y-4">
                <p className="text-[21px] text-[#86868b]">
                  Wi-Fi 6 ready, offers faster transmission speed, lower latency, and enhanced security
                </p>
                <p className="text-[21px] text-[#86868b]">
                  All 4G network and VoLTE
                </p>
                <p className="text-[21px] text-[#86868b]">
                  Low power consumption BT5.0
                </p>
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/ImagesContainer/Product/Mobile Computer/Urovo/DT50_Transmission.png"
                alt="DT50 Multi-channel Transmission"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] text-center font-semibold text-[#1d1d1f] mb-8 sm:mb-12 lg:mb-16">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 aspect-square flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="relative flex-1 mb-3 sm:mb-4 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                <Image
                  src="/ImagesContainer/Product/Mobile Computer/Urovo/Urovo-DT50-AdvanceScanner.png"
                  alt="Advanced Scanner"
                  fill
                  className="object-contain scale-110 sm:scale-125"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1d1d1f] mb-2 text-center">
                Advanced Scanner
              </h3>
              <p className="text-sm sm:text-base text-[#86868b] text-center leading-relaxed">
                High-performance 2D imaging with exceptional motion tolerance
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 aspect-square flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="relative flex-1 mb-3 sm:mb-4 min-h-[180px] sm:min-h-[220px] lg:min-h-[250px]">
                <Image
                  src="/ImagesContainer/Product/Mobile Computer/Urovo/DT50_AllDayBattery.png"
                  alt="All-day Battery"
                  fill
                  className="object-contain scale-100 sm:scale-110"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1d1d1f] mb-2 text-center">
                All-day Battery
              </h3>
              <p className="text-sm sm:text-base text-[#86868b] text-center leading-relaxed">
                6300mAh battery with quick charging support
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 aspect-square flex flex-col shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="relative flex-1 mb-3 sm:mb-4 min-h-[200px] sm:min-h-[250px] lg:min-h-[280px]">
                <Image
                  src="/ImagesContainer/Product/Mobile Computer/Urovo/DT50_RFID.png"
                  alt="Rugged Design"
                  fill
                  className="object-contain scale-90 sm:scale-100"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1d1d1f] mb-2 text-center">
                Rugged Design
              </h3>
              <p className="text-[#86868b] text-center">
                Support for multiple RFID antennas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[40px] text-center font-semibold text-[#1d1d1f] mb-16">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Performance</h3>
              <ul className="space-y-4 text-[17px]">
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Processor</span>
                  <span className="text-[#1d1d1f]">Octa-core 2.0 GHz</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Memory</span>
                  <span className="text-[#1d1d1f]">4GB RAM / 64GB Storage</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#86868b]">OS</span>
                  <span className="text-[#1d1d1f]">Android 11</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Display</h3>
              <ul className="space-y-4 text-[17px]">
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Size</span>
                  <span className="text-[#1d1d1f]">6.0&quot; HD+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Resolution</span>
                  <span className="text-[#1d1d1f]">1440 x 720</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Protection</span>
                  <span className="text-[#1d1d1f]">Gorilla® Glass</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Scanning</h3>
              <ul className="space-y-4 text-[17px]">
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Engine</span>
                  <span className="text-[#1d1d1f]">2D Imager</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Symbologies</span>
                  <span className="text-[#1d1d1f]">All major 1D/2D</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Scan Range</span>
                  <span className="text-[#1d1d1f]">Up to 60 cm</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Physical</h3>
              <ul className="space-y-4 text-[17px]">
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Weight</span>
                  <span className="text-[#1d1d1f]">296g</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Battery</span>
                  <span className="text-[#1d1d1f]">6300mAh</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Durability</span>
                  <span className="text-[#1d1d1f]">IP67, 1.5m drops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-[40px] font-semibold text-[#1d1d1f] mb-6">
            Transform Your Operations
          </h2>
          <p className="text-[21px] text-[#86868b] mb-8">
            Contact us to learn how the DT50 can enhance your business efficiency
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full 
            bg-[#0071e3] text-white text-[17px] font-normal hover:bg-[#0077ED] transition-colors
            min-w-[140px]"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
