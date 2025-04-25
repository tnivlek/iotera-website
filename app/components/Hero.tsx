import Link from 'next/link';
import Image from 'next/image';
import ScrollButton from './ScrollButton';

export default function Hero() {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="relative min-h-[100vh] flex items-center justify-center pb-40">
        <div className="text-center max-w-[800px] mx-auto px-4">
          <h1 className="text-[56px] font-bold text-[#1d1d1f] mb-5 leading-tight">
            Innovative Solutions
          </h1>
          <p className="text-[28px] text-[#86868b] mb-10 font-normal">
            Transform your business operations.
          </p>
          <ScrollButton />
        </div>
      </div>

      <div className="h-8"></div>

      <div id="products" className="max-w-[1200px] mx-auto px-4 pb-20 pt-20">
        <h2 className="text-[40px] text-center font-semibold text-[#1d1d1f] mb-16">
          Which product is right for you?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mobile Computer */}
          <div className="text-center flex flex-col h-full">
            <div className="h-[180px] relative mb-6 flex items-center justify-center w-full">
              <Image
                src="/Images/DT66_MobileComputer.png"
                alt="Mobile Computer"
                width={160}
                height={160}
                className="object-contain w-auto h-auto max-h-[160px]"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Mobile Computer</h3>
            <p className="text-[#86868b] mb-6 flex-grow">
              Empower your workforce with professional, simple, and reliable mobile computers. Trusted globally, our technology enhances efficiency, boosts productivity, and streamlines operations for retailers, manufacturers, logistics, service organisations, and healthcare providers.
            </p>
            <div>
              <Link
                href="/products/mobile-computer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full 
                bg-[#e8e8ed] text-[#1d1d1f] text-[17px] font-normal hover:bg-[#d2d2d7] transition-colors
                min-w-[140px]"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Barcode Scanner */}
          <div className="text-center flex flex-col h-full">
            <div className="h-[180px] relative mb-6 flex items-center justify-center w-full">
              <Image
                src="/Images/BarcodeScanner.png"
                alt="Barcode Scanner"
                width={160}
                height={160}
                className="object-contain w-auto h-auto max-h-[160px]"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Barcode Scanner</h3>
            <p className="text-[#86868b] mb-6 flex-grow">
              Experience professional, simple, and efficient scanning with our barcode scanners. Easily read the barcodes using advanced technology. With corded and Bluetooth® cordless options, boost productivity, streamline operations, and ensure lasting value.
            </p>
            <div>
              <Link
                href="/products/barcode-scanner"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full 
                bg-[#e8e8ed] text-[#1d1d1f] text-[17px] font-normal hover:bg-[#d2d2d7] transition-colors
                min-w-[140px]"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* RFID Solutions */}
          <div className="text-center flex flex-col h-full">
            <div className="h-[180px] relative mb-6 flex items-center justify-center w-full">
              <Image
                src="/Images/RFID_Solutions.png"
                alt="RFID Solutions"
                width={160}
                height={160}
                className="object-contain w-auto h-auto max-h-[160px]"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">RFID Solutions</h3>
            <p className="text-[#86868b] mb-6 flex-grow">
              Enhance operations with professional, simple RFID technology for real-time tracking, security, and efficiency. Ideal for logistics, manufacturing, and retail, our solutions integrate seamlessly to optimize performance.
            </p>
            <div>
              <Link
                href="/products/rfid-solutions"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full 
                bg-[#e8e8ed] text-[#1d1d1f] text-[17px] font-normal hover:bg-[#d2d2d7] transition-colors
                min-w-[140px]"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* EMM Solutions */}
          <div className="text-center flex flex-col h-full">
            <div className="h-[180px] relative mb-6 flex items-center justify-center w-full">
              <Image
                src="/Images/EMM_Solutions.png"
                alt="EMM Solutions"
                width={160}
                height={160}
                className="object-contain w-auto h-auto max-h-[160px]"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">EMM Solutions</h3>
            <p className="text-[#86868b] mb-6 flex-grow">
              Simplify device management with our Enterprise Mobility Management solutions. Secure, deploy, and monitor your mobile fleet efficiently. From remote configuration to real-time diagnostics, ensure your devices are always optimized for peak performance.
            </p>
            <div>
              <Link
                href="/products/emm-solutions"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full 
                bg-[#e8e8ed] text-[#1d1d1f] text-[17px] font-normal hover:bg-[#d2d2d7] transition-colors
                min-w-[140px]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-28"></div>

      <div className="max-w-[1200px] mx-auto px-4 pb-20 pt-[140px]">
        <h2 className="text-[40px] text-center font-semibold text-[#1d1d1f] mb-16">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Warehouse Management */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
              Warehouse Management
            </h3>
            <p className="text-[#86868b]">
              Optimize inventory control, streamline picking processes, and enhance warehouse efficiency with our comprehensive solutions.
            </p>
          </div>

          {/* Logistics Tracking */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
              Logistics Tracking
            </h3>
            <p className="text-[#86868b]">
              Real-time visibility and tracking solutions for your supply chain, ensuring seamless delivery operations.
            </p>
          </div>

          {/* Retail Payment */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
              Retail Payment
            </h3>
            <p className="text-[#86868b]">
              Secure and efficient payment solutions for retail environments, enhancing customer experience.
            </p>
          </div>

          {/* Healthcare */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
              Healthcare
            </h3>
            <p className="text-[#86868b]">
              Improve patient care and safety with reliable tracking and data management solutions for healthcare facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 