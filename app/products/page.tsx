import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="bg-[#fbfbfd]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#000] to-[#1d1d1f]">
        <div className="text-center max-w-[800px] mx-auto px-4">
          <h1 className="text-[56px] font-bold text-white mb-5 leading-tight">
            Our Products
          </h1>
          <p className="text-[28px] text-[#86868b] mb-10 font-normal">
            Professional. Simple. Reliable.
          </p>
        </div>
      </section>

      {/* Mobile Computer Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[40px] font-semibold text-[#1d1d1f]">
                Mobile Computer
              </h2>
              <p className="text-[21px] text-[#86868b] leading-relaxed">
                Experience unmatched performance with our flagship mobile computer. 
                Designed for enterprise-grade reliability and efficiency.
              </p>
              <Link 
                href="/products/mobile-computer"
                className="inline-flex items-center text-[17px] text-[#2997ff] hover:underline"
              >
                Learn more &gt;
              </Link>
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

      {/* Barcode Scanner Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-[40px] font-semibold text-[#1d1d1f]">
                Barcode Scanner
              </h2>
              <p className="text-[21px] text-[#86868b] leading-relaxed">
                High-performance scanning for all your business needs. 
                Advanced technology for reliable and efficient barcode reading.
              </p>
              <Link 
                href="/products/barcode-scanner"
                className="inline-flex items-center text-[17px] text-[#2997ff] hover:underline"
              >
                Learn more &gt;
              </Link>
            </div>
            <div className="relative h-[400px] order-2 md:order-1">
              <Image
                src="/Images/BarcodeScanner.png"
                alt="Barcode Scanner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RFID Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[40px] font-semibold text-[#1d1d1f]">
                RFID Solutions
              </h2>
              <p className="text-[21px] text-[#86868b] leading-relaxed">
                Advanced tracking and inventory management solutions. 
                Streamline operations with cutting-edge RFID technology.
              </p>
              <Link 
                href="/products/rfid-solutions"
                className="inline-flex items-center text-[17px] text-[#2997ff] hover:underline"
              >
                Learn more &gt;
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/Images/RFID_Solutions.png"
                alt="RFID Solutions"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EMM Solutions Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-[40px] font-semibold text-[#1d1d1f]">
                EMM Solutions
              </h2>
              <p className="text-[21px] text-[#86868b] leading-relaxed">
                Enterprise mobility management made simple. 
                Secure, deploy, and monitor your mobile devices efficiently.
              </p>
              <Link 
                href="/products/emm-solutions"
                className="inline-flex items-center text-[17px] text-[#2997ff] hover:underline"
              >
                Learn more &gt;
              </Link>
            </div>
            <div className="relative h-[400px] order-2 md:order-1">
              <Image
                src="/Images/EMM_Solutions.png"
                alt="EMM Solutions"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[40px] text-center font-semibold text-[#1d1d1f] mb-16">
            Compare Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Mobile Computer', 'Barcode Scanner', 'RFID Solutions', 'EMM Solutions'].map((product) => (
              <div key={product} className="text-center p-6 border-r last:border-r-0 border-[#d2d2d7]">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">{product}</h3>
                <Link 
                  href={`/products/${product.toLowerCase().replace(' ', '-')}`}
                  className="text-[17px] text-[#2997ff] hover:underline"
                >
                  Learn more &gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 