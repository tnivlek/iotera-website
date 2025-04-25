import { Cpu, Network, Shield, BarChart } from 'lucide-react';

const features = [
  {
    name: 'Smart Sensors',
    description: 'Deploy intelligent sensors to collect real-time data from your environment and equipment.',
    icon: Cpu,
  },
  {
    name: 'Network Solutions',
    description: 'Secure and reliable connectivity solutions for your IoT devices and infrastructure.',
    icon: Network,
  },
  {
    name: 'Data Security',
    description: 'Enterprise-grade security measures to protect your IoT ecosystem and data.',
    icon: Shield,
  },
  {
    name: 'Analytics Platform',
    description: 'Advanced analytics and visualization tools to derive actionable insights from your IoT data.',
    icon: BarChart,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive IoT Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to build and manage your IoT infrastructure
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 