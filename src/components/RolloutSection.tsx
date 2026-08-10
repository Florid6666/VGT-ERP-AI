import React from 'react';
import { Search, Database, Rocket, TrendingUp } from 'lucide-react';

interface StepItem {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const RolloutSection: React.FC = () => {
  const steps: StepItem[] = [
    {
      step: 'STEP 1',
      icon: <Search className="w-5 h-5" />,
      title: 'Discovery in 30 minutes',
      description:
        'We map your current flow — spreadsheets, legacy ERP or paper — and mark where time, stock and margin leak today.',
    },
    {
      step: 'STEP 2',
      icon: <Database className="w-5 h-5" />,
      title: 'Data & masters ready',
      description:
        'Items, BOMs, vendors, customers and opening balances imported and validated. No re-typing years of history.',
    },
    {
      step: 'STEP 3',
      icon: <Rocket className="w-5 h-5" />,
      title: 'Go live module by module',
      description:
        'The highest-pain module goes first and starts returning value while the rest is still being configured.',
    },
    {
      step: 'STEP 4',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'AI starts compounding',
      description:
        'Forecasts sharpen, anomalies get caught and the copilot answers your team before they open a report.',
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-white relative overflow-hidden border-b border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-xs mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC]">
              ROLLOUT
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-5">
            Live in weeks,{' '}
            <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#A259FF] bg-clip-text text-transparent">
              not years
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 font-normal tracking-tight max-w-2xl">
            A staged rollout designed so your team never stops working while the platform goes in.
          </p>
        </div>

        {/* 4 Step Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start group transition-all duration-300"
            >
              {/* Circular Icon Badge */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0066CC] to-[#5E5CE6] text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Step Label */}
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0066CC] mb-3">
                {item.step}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 tracking-tight group-hover:text-[#0066CC] transition-colors duration-200">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
