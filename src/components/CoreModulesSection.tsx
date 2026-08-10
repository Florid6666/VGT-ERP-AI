import React from 'react';
import {
  Factory,
  Boxes,
  ShoppingCart,
  Handshake,
  ShieldCheck,
  Wrench,
  Truck,
  Users,
  Wallet,
  Sparkles,
} from 'lucide-react';

interface ModuleCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CoreModulesSection: React.FC = () => {
  const modules: ModuleCard[] = [
    {
      id: 'production',
      title: 'Production',
      description: 'AI-optimised scheduling, live OEE and bottleneck prediction before the line stalls.',
      icon: <Factory className="w-5 h-5" />,
    },
    {
      id: 'inventory',
      title: 'Inventory',
      description: 'Demand-driven stock levels, auto reorder points, zero dead-stock creep.',
      icon: <Boxes className="w-5 h-5" />,
    },
    {
      id: 'purchase',
      title: 'Purchase',
      description: 'Vendor scoring, price-trend alerts and AI-suggested purchase quantities.',
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      id: 'sales-crm',
      title: 'Sales & CRM',
      description: 'Quotation to dispatch in one thread, with win-probability and reorder nudges.',
      icon: <Handshake className="w-5 h-5" />,
    },
    {
      id: 'quality',
      title: 'Quality',
      description: 'Inspection plans, rejection analytics and root-cause patterns found automatically.',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Predictive breakdown alerts from machine and service-history patterns.',
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      id: 'logistics',
      title: 'Dispatch & Logistics',
      description: 'Load planning, delivery commitments and freight cost visibility per order.',
      icon: <Truck className="w-5 h-5" />,
    },
    {
      id: 'workforce',
      title: 'Workforce',
      description: 'Shift planning, productivity analytics and skill-based allocation.',
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Live costing, margin leakage detection and cash-flow forecasting.',
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot',
      description: 'Ask your business anything — internal intelligence, answered in seconds.',
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <section id="modules" className="w-full py-20 sm:py-28 bg-[#FAFAFC] relative overflow-hidden border-b border-[#E5E5EA]">
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-200/20 via-blue-200/20 to-indigo-200/20 blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          {/* Headline */}
          <h2 className="display-lg-text text-[#1D1D1F] mb-6 font-extrabold tracking-tight">
            Every core area, with{' '}
            <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#A855F7] bg-clip-text text-transparent">
              intelligence built in
            </span>
          </h2>

          {/* Subtitle */}
          <p className="lead-text text-slate-500 font-normal max-w-3xl mx-auto">
            Not ten tools bolted together — one data model, one AI brain, one login across the whole operation.
          </p>
        </div>

        {/* 10 Uniform Module Cards Grid with Glowing Border Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modules.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[24px] p-8 bg-white border border-slate-200/90 shadow-xs hover:border-[#5E5CE6] hover:shadow-[0_0_25px_rgba(94,92,230,0.22)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Top Left Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/90 border border-indigo-100/90 text-[#5E5CE6] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#0066CC] group-hover:to-[#5E5CE6] group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:shadow-md group-hover:shadow-indigo-500/30">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 group-hover:text-[#0066CC] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
