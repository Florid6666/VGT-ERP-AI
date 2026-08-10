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
    'Slow, rigid module customisations',
    'Siloed operational visibility',
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

  const matrixData = [
    { area: 'Productivity', traditional: 'Medium', vgt: 'Very high' },
    { area: 'Automation', traditional: 'Moderate', vgt: 'Extensive' },
    { area: 'Decision speed', traditional: 'Hours or days', vgt: 'Minutes or seconds' },
    { area: 'Forecast accuracy', traditional: 'Moderate', vgt: 'High' },
    { area: 'Cost reduction', traditional: 'Limited', vgt: 'Significant' },
    { area: 'Customer experience', traditional: 'Standard', vgt: 'Personalised & proactive' },
    { area: 'Executive support', traditional: 'Reports', vgt: 'AI recommendations' },
    { area: 'ROI', traditional: '2–4 years', vgt: '12–24 months' },
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
          <p className="text-base sm:text-xl text-slate-600 font-medium tracking-tight max-w-2xl">
            Same operational backbone. A completely different return on it.
          </p>
        </div>

        {/* Dual Clean Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12 sm:mb-16">
          
          {/* Card 1: TRADITIONAL ERP */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full">
            <div>
              {/* Header Label */}
              <div className="mb-8">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
                  TRADITIONAL ERP
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-5">
                {traditionalFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm sm:text-base font-medium text-slate-700">
                    <span className="text-slate-400 shrink-0 mt-0.5 select-none">
                      <X className="w-4 h-4 text-slate-400 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: VGT ERP AI */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#5E5CE6]/35 shadow-xl shadow-indigo-500/5 transition-all duration-300 hover:border-[#5E5CE6]/70 flex flex-col justify-between h-full">
            <div>
              {/* Header Label */}
              <div className="mb-8">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#5E5CE6]">
                  VGT ERP AI
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-5">
                {aiFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm sm:text-base font-semibold text-[#1D1D1F]">
                    <span className="text-[#5E5CE6] shrink-0 mt-0.5 select-none">
                      <Check className="w-4 h-4 text-[#5E5CE6] stroke-[3]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Business Area Matrix Table */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 sm:px-10 py-5 bg-[#FAFAFC] border-b border-slate-100 text-xs sm:text-sm font-bold tracking-widest uppercase">
            <div className="col-span-5 sm:col-span-5 text-slate-400">
              BUSINESS AREA
            </div>
            <div className="col-span-3 sm:col-span-3 text-slate-400">
              TRADITIONAL ERP
            </div>
            <div className="col-span-4 sm:col-span-4 text-[#5E5CE6]">
              VGT ERP AI
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-slate-100">
            {matrixData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 px-6 sm:px-10 py-4.5 sm:py-5 items-center text-xs sm:text-base transition-colors hover:bg-slate-50/60"
              >
                <div className="col-span-5 sm:col-span-5 font-bold text-[#1D1D1F] pr-2">
                  {row.area}
                </div>
                <div className="col-span-3 sm:col-span-3 font-normal text-slate-500 pr-2">
                  {row.traditional}
                </div>
                <div className="col-span-4 sm:col-span-4 font-semibold text-[#5E5CE6]">
                  {row.vgt}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
