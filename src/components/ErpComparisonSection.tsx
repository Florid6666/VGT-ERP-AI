import React from 'react';
import { X, Check } from 'lucide-react';

export const ErpComparisonSection: React.FC = () => {
  const traditionalFeatures = [
    'Stores and organises business data',
    'Standardises processes',
    'Generates operational reports',
    'Requires users to interpret data',
    'Reactive to business events',
    'Depends heavily on manual analysis',
  ];

  const aiFeatures = [
    'Learns continuously from your data',
    'Predicts demand and business trends',
    'Recommends the optimal decision',
    'Automates repetitive processes',
    'Detects anomalies and fraud',
    'Finds cost-reduction opportunities',
    'Optimises production and inventory',
    'Supports executives with AI insights',
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFAFC] relative overflow-hidden border-b border-[#E5E5EA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-5">
            A basic ERP remembers. <br />
            <span className="bg-gradient-to-r from-[#3B38A6] via-[#5E5CE6] to-[#A259FF] bg-clip-text text-transparent">
              ERP AI decides.
            </span>
          </h2>
          <p className="text-base sm:text-xl text-slate-500 font-normal tracking-tight">
            Same operational backbone. A completely different return on it.
          </p>
        </div>

        {/* Dual Clean Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Card 1: TRADITIONAL ERP */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-md">
            {/* Header Label */}
            <div className="mb-8">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">
                TRADITIONAL ERP
              </span>
            </div>

            {/* Feature List */}
            <ul className="space-y-5">
              {traditionalFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm sm:text-base font-normal text-slate-500">
                  <span className="text-slate-300 font-bold shrink-0 mt-0.5 text-base select-none">
                    <X className="w-4 h-4 text-slate-400 stroke-[2]" />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: VGT ERP AI */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#5E5CE6]/30 shadow-xl shadow-indigo-500/5 transition-all duration-300 hover:border-[#5E5CE6]/60">
            {/* Header Label */}
            <div className="mb-8">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#5E5CE6]">
                VGT ERP AI
              </span>
            </div>

            {/* Feature List */}
            <ul className="space-y-5">
              {aiFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm sm:text-base font-medium text-[#1D1D1F]">
                  <span className="text-[#5E5CE6] shrink-0 mt-0.5 select-none">
                    <Check className="w-4 h-4 text-[#5E5CE6] stroke-[2.5]" />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
