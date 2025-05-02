import Image from 'next/image';
import Link from 'next/link';

export default function DT50Page() {
  return (
    <div className="bg-[#fbfbfd]">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[#333333]">
        <div className="max-w-[1200px] mx-auto px-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Left Content */}
            <div className="flex flex-col justify-center pt-20">
              <h1 className="text-[56px] font-bold text-white mb-4">
                UROVO DT50
              </h1>
              <p className="text-[32px] text-white/90 mb-12">
                With DT50, anything is possible
              </p>
              {/* Certification Logos */}
              <div className="grid grid-cols-3 gap-8 mt-8">
                {/* Column 1 */}
                <div className="flex flex-col items-center justify-center space-y-6">
                  <Image
                    src="/ImagesContainer/Product/Mobile Computer/GMS.png"
                    alt="Google Mobile Service"
                    width={120}
                    height={40}
                    className="object-contain"
                    unoptimized
                  />
                  <Image
                    src="/ImagesContainer/Product/Mobile Computer/wifi.png"
                    alt="WiFi Certified"
                    width={120}
                    height={40}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                {/* Column 2 */}
                <div className="flex flex-col items-center justify-center space-y-6">
                  <Image
                    src="/ImagesContainer/Product/Mobile Computer/AER.png"
                    alt="Android Enterprise"
                    width={120}
                    height={40}
                    className="object-contain"
                    unoptimized
                  />
                  <Image
                    src="/ImagesContainer/Product/Mobile Computer/SOTIMobiControl.png"
                    alt="SOTI"
                    width={120}
                    height={40}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                {/* Column 3 */}
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Image
                    src="/ImagesContainer/Product/Mobile Computer/WorkspaceONEUEM.png"
                    alt="WorkspaceONE"
                    width={180}
                    height={60}
                    className="object-contain"
                    unoptimized
                  />
                  <Image
                    src="/ImagesContainer/Product/Mobile Computer/SafeUEM.png"
                    alt="SafeUEM"
                    width={120}
                    height={40}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            
            {/* Right Content - Product Image */}
            <div className="relative flex items-center justify-center">
              <Image
                src="/ImagesContainer/Product/Mobile Computer/Urovo/dt50hht.png"
                alt="DT50 Mobile Computer"
                width={600}
                height={800}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/ImagesContainer/Product/Mobile Computer/Urovo/DT50_1080x1080.png"
                alt="DT50 Overview"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-[40px] font-semibold text-[#1d1d1f]">
                Designed for Enterprise
              </h2>
              <p className="text-[21px] text-[#86868b] leading-relaxed">
                The DT50 combines powerful Android performance with enterprise-grade durability. 
                Built to enhance productivity in retail, logistics, and field operations.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-2">Android 13</h3>
                  <p className="text-[17px] text-[#86868b]">Latest enterprise features</p>
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-2">IP67</h3>
                  <p className="text-[17px] text-[#86868b]">Dust & water resistant</p>
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-2">5.7" Display</h3>
                  <p className="text-[17px] text-[#86868b]">Corning® Gorilla® Glass</p>
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-2">Memory</h3>
                  <p className="text-[17px] text-[#86868b]">Up to 8+128 GB memory</p>
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
            {/* Left Content */}
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
            {/* Right Content */}
            <div className="relative h-[600px]">
              <Image
                src="/ImagesContainer/Product/Mobile Computer/Urovo/DT50_Transmission.png"
                alt="DT50 Multi-channel Transmission"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[40px] text-center font-semibold text-[#1d1d1f] mb-16">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Scanner */}
            <div className="bg-white rounded-3xl p-4 aspect-square flex flex-col">
              <div className="relative flex-1 mb-4 h-[300px]">
                <Image
                  src="/ImagesContainer/Product/Mobile Computer/Urovo/Urovo-DT50-AdvanceScanner.png"
                  alt="Advanced Scanner"
                  fill
                  className="object-contain scale-125"
                  priority
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                Advanced Scanner
              </h3>
              <p className="text-[#86868b]">
                High-performance 2D imaging with exceptional motion tolerance
              </p>
            </div>

            {/* Battery */}
            <div className="bg-white rounded-3xl p-6 aspect-square flex flex-col">
              <div className="relative flex-1 mb-6 h-[220px]">
                <Image
                  src="/ImagesContainer/Product/Mobile Computer/Urovo/DT50_AllDayBattery.png"
                  alt="All-day Battery"
                  fill
                  className="object-contain scale-110"
                  priority
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                All-day Battery
              </h3>
              <p className="text-[#86868b]">
                6300mAh battery with quick charging support
              </p>
            </div>

            {/* Durability */}
            <div className="bg-white rounded-3xl p-6 aspect-square flex flex-col">
              <div className="relative flex-1 mb-6 h-[250px]">
                <Image
                  src="/ImagesContainer/Product/Mobile Computer/Urovo/DT50_RFID.png"
                  alt="Rugged Design"
                  fill
                  className="object-contain scale-100"
                  priority
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                Flexibility in different situations
              </h3>
              <p className="text-[#86868b]">
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
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">
                Performance
              </h3>
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
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">
                Display
              </h3>
              <ul className="space-y-4 text-[17px]">
                <li className="flex justify-between">
                  <span className="text-[#86868b]">Size</span>
                  <span className="text-[#1d1d1f]">6.0" HD+</span>
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
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">
                Scanning
              </h3>
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
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">
                Physical
              </h3>
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