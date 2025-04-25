import Image from 'next/image';
import Link from 'next/link';
import ProductDropdown from '../../components/ProductDropdown';

export default function MobileComputerPage() {
  return (
    <div className="bg-[#fbfbfd]">
      {/* Global Header */}
      <div className="sticky top-[45px] z-40 bg-[rgba(251,251,253,0.8)] backdrop-blur-md border-b border-[#d2d2d7]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center h-[80px] px-4">
            <nav className="flex items-center justify-center w-full">
              <div className="flex items-center justify-center space-x-20">
                <ProductDropdown 
                  label="Urovo"
                  items={[
                    { name: 'DT50', href: '/products/mobile-computer/dt50' }
                  ]}
                />
                <Link href="/products/mobile-computer/idata" className="text-[#1d1d1f] hover:text-[#2997ff] text-[17px] font-normal transition-colors">
                  iData
                </Link>
                <Link href="/products/mobile-computer/newland" className="text-[#1d1d1f] hover:text-[#2997ff] text-[17px] font-normal transition-colors whitespace-nowrap">
                  Newland AIDC
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-[#000] to-[#1d1d1f]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-[56px] font-bold text-white">
                Mobile Computer
              </h1>
              <p className="text-[28px] text-[#86868b] leading-relaxed">
                Enterprise-grade mobile computer designed for intensive use in challenging environments. 
                Built with advanced scanning capabilities and robust features for maximum productivity.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/Images/DT66_MobileComputer.png"
                alt="Mobile Computer"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[40px] text-center font-semibold text-[#1d1d1f] mb-16">
            Industry Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Durability */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Superior Durability
              </h3>
              <p className="text-[#86868b]">
                • IP65/IP67 rated water and dust resistant<br/>
                • 1.8m drop resistance<br/>
                • Gorilla Glass protection<br/>
                • Designed for extreme environments
              </p>
            </div>

            {/* Performance */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Enhanced Performance
              </h3>
              <p className="text-[#86868b]">
                • High-speed octa-core processor<br/>
                • Extended battery life (up to 12 hours)<br/>
                • Quick-swap battery capability<br/>
                • Fast charging technology
              </p>
            </div>

            {/* Scanning */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Advanced Scanning
              </h3>
              <p className="text-[#86868b]">
                • High-speed 2D imaging<br/>
                • Extended scanning range<br/>
                • Motion tolerance technology<br/>
                • Multiple code capture
              </p>
            </div>

            {/* Connectivity */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Reliable Connectivity
              </h3>
              <p className="text-[#86868b]">
                • 4G LTE support<br/>
                • Dual-band WiFi<br/>
                • Bluetooth 5.0<br/>
                • GPS/GLONASS
              </p>
            </div>

            {/* Ergonomics */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Ergonomic Design
              </h3>
              <p className="text-[#86868b]">
                • Lightweight construction<br/>
                • Comfortable grip<br/>
                • Large touchscreen<br/>
                • Programmable buttons
              </p>
            </div>

            {/* Enterprise Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Enterprise Ready
              </h3>
              <p className="text-[#86868b]">
                • Android Enterprise certified<br/>
                • EMM compatibility<br/>
                • Security updates<br/>
                • Remote management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[40px] text-center font-semibold text-[#1d1d1f] mb-16">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Warehouse */}
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Warehouse Management
              </h3>
              <p className="text-[#86868b] mb-4">
                Optimize inventory tracking, picking processes, and warehouse operations with real-time data capture and processing.
              </p>
              <ul className="text-[#86868b] list-disc list-inside">
                <li>Inventory management</li>
                <li>Order picking</li>
                <li>Asset tracking</li>
                <li>Shipping/Receiving</li>
              </ul>
            </div>

            {/* Retail */}
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Retail Operations
              </h3>
              <p className="text-[#86868b] mb-4">
                Streamline retail operations with mobile point of sale, inventory checks, and price verification capabilities.
              </p>
              <ul className="text-[#86868b] list-disc list-inside">
                <li>Mobile POS</li>
                <li>Price checking</li>
                <li>Inventory counts</li>
                <li>Order fulfillment</li>
              </ul>
            </div>

            {/* Logistics */}
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Logistics & Transportation
              </h3>
              <p className="text-[#86868b] mb-4">
                Enhance delivery operations with proof of delivery, route optimization, and real-time tracking features.
              </p>
              <ul className="text-[#86868b] list-disc list-inside">
                <li>Proof of delivery</li>
                <li>Route management</li>
                <li>Package tracking</li>
                <li>Fleet management</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Healthcare
              </h3>
              <p className="text-[#86868b] mb-4">
                Improve patient care with mobile access to records, specimen tracking, and medication administration.
              </p>
              <ul className="text-[#86868b] list-disc list-inside">
                <li>Patient identification</li>
                <li>Specimen tracking</li>
                <li>Medication management</li>
                <li>Asset tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-[40px] font-semibold text-[#1d1d1f] mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-[21px] text-[#86868b] mb-8">
            Contact us to learn more about how our mobile computers can enhance your business efficiency.
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