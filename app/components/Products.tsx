import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    name: 'Mobile Computer',
    description: 'Enterprise-grade mobile computer with advanced scanning capabilities',
    image: '/dt66.jpg',
    model: 'DT66 Mobile Computer',
    link: '/products/mobile-computer'
  },
  {
    name: 'Barcode Scanner',
    description: 'Professional scanning solutions for enhanced productivity',
    image: '/barcode-scanner.jpg',
    model: 'Barcode Scanner',
    link: '/products/barcode-scanner'
  },
  {
    name: 'RFID Solutions',
    description: 'Advanced RFID technology for seamless asset tracking',
    image: '/rfid.jpg',
    model: 'RFID Solutions',
    link: '/products/rfid-solutions'
  },
  {
    name: 'EMM Solutions',
    description: 'Comprehensive enterprise mobility management platform',
    image: '/emm.jpg',
    model: 'EMM Solutions',
    link: '/products/emm-solutions'
  }
];

export default function Products() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover our range of enterprise-grade solutions
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {products.map((product) => (
            <article key={product.name} className="flex flex-col items-start bg-white rounded-lg shadow-lg p-6">
              <div className="w-full aspect-[16/9] relative mb-8">
                <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs">
                  <h3 className="text-2xl font-semibold leading-6 text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="mt-4 text-lg text-gray-600">{product.description}</p>
                <div className="mt-4">
                  <p className="text-base font-semibold text-blue-600">{product.model}</p>
                </div>
                <div className="mt-8">
                  <Link
                    href={product.link}
                    className="inline-block rounded-md bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 