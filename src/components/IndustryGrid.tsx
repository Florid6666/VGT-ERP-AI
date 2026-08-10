import React from 'react';
import { ArrowUpRight, Factory, Zap, HeartPulse, Truck, ShoppingBag, Landmark } from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  image: string;
  stat: string;
  statLabel: string;
  description: string;
}

export const IndustryGrid: React.FC = () => {
  const industries: IndustryItem[] = [
    {
      id: 'manufacturing',
      name: 'Manufacturing & Robotics',
      icon: <Factory className="w-6 h-6 text-[#0066CC]" />,
      image: '/images/ind_manufacturing.png',
      stat: '+34%',
      statLabel: 'OEE Throughput',
      description: 'Autonomous assembly telemetry, predictive spares procurement, and robotic cell optimization.',
    },
    {
      id: 'energy',
      name: 'Energy & Utilities',
      icon: <Zap className="w-6 h-6 text-[#5E5CE6]" />,
      image: '/images/ind_energy.png',
      stat: '-28%',
      statLabel: 'Grid Load Variance',
      description: 'Smart grid metering synchronization, renewable load balancing, and asset longevity modeling.',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Pharma',
      icon: <HeartPulse className="w-6 h-6 text-emerald-600" />,
      image: '/images/ind_healthcare.png',
      stat: '100%',
      statLabel: 'FDA Track & Trace',
      description: 'HIPAA compliant cold-chain logistics telemetry, clinical trial supply chain, and ledger tracking.',
    },
    {
      id: 'logistics',
      name: 'Global Freight & Port Logistics',
      icon: <Truck className="w-6 h-6 text-[#0066CC]" />,
      image: '/images/ind_logistics.png',
      stat: '0.4ms',
      statLabel: 'Manifest Sync Time',
      description: 'Multi-modal cargo routing, automated customs clearance, and container telemetry tracking.',
    },
    {
      id: 'retail',
      name: 'Omnichannel Retail & E-Com',
      icon: <ShoppingBag className="w-6 h-6 text-[#00C7BE]" />,
      image: '/images/ind_retail.png',
      stat: '99.9%',
      statLabel: 'Stock Accuracy',
      description: 'Unified inventory subledgers, dynamic margin pricing AI, and automated vendor reordering.',
    },
    {
      id: 'finance',
      name: 'Banking & Enterprise Finance',
      icon: <Landmark className="w-6 h-6 text-[#0066CC]" />,
      image: '/images/ind_finance.png',
      stat: '$14B+',
      statLabel: 'Reconciled / Day',
      description: 'Multi-entity consolidation ledgers, real-time treasury position, and automated tax reporting.',
    },
  ];

  return (
    <section id="industries" className="w-full py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-6 inline-block">
              Target Verticals
            </span>
            <h2 className="display-lg-text text-[#1D1D1F]">
              Tailored for Complex Industries.
            </h2>
          </div>
          <p className="lead-text text-slate-600 max-w-md">
            Pre-packaged industrial AI modules tailored to strict regulatory compliance, extreme load volumes, and legacy ERP migrations.
          </p>
        </div>

        {/* Straight Corner Cards Grid (No Curved Corners, No Borders, No Shadows, Crisp Images, No Icons, Left-Aligned Edge Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="group relative rounded-none bg-white overflow-hidden flex flex-col justify-between"
            >
              {/* Card Image Banner with Crisp Edges */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F5F5F7]">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Card Content (Left-Aligned Starting from Left Edge) */}
              <div className="pt-6 pb-2 px-0 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-[#1D1D1F] font-display mb-3 text-left">{ind.name}</h3>
                  <p className="text-base text-slate-600 leading-relaxed font-normal text-left">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-start gap-2 text-sm font-semibold text-[#0066CC] group-hover:text-[#0071E3] transition-colors">
                  <span>Explore Industry Module</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
