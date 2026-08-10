import React from 'react';
import { X, Check, Sparkles, Cpu, Zap, ArrowRight } from 'lucide-react';

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
    <section className="w-full py-20 sm:py-28 bg-white relative overflow-hidden border-b border-[#E5E5EA]">
      {/* Subtle ambient light glow */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-indigo-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-4">
            A basic ERP remembers.{' '}
            <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#A259FF] bg-clip-text text-transparent">
              ERP AI decides.
            </span>
          </h2>
          <p className="lead-text text-slate-600 max-w-2xl font-normal">
            Same operational backbone. A completely different return on it.
          </p>
        </div>

        {/* Dual Comparison Grid Layout with Apple Side Visual Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: TRADITIONAL ERP */}
          <div className="lg:col-span-5 bg-[#FAFAFC] rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between relative group hover:border-slate-300 transition-all duration-300">
            <div>
              {/* Header Label */}
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-slate-200/60">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  TRADITIONAL ERP
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-4">
                {traditionalFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base font-normal text-slate-500">
                    <div className="w-5 h-5 rounded-full bg-slate-200/70 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Status Pill */}
            <div className="mt-10 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
              <span>Mode: Static System of Record</span>
              <span className="font-mono">Legacy Core</span>
            </div>
          </div>

          {/* Right Card: VGT ERP AI (Prominent Apple Glass Card + Side Visual Graphic) */}
          <div className="lg:col-span-7 bg-gradient-to-b from-white to-blue-50/30 rounded-3xl p-8 sm:p-10 border-2 border-[#0066CC]/30 shadow-2xl shadow-blue-500/10 flex flex-col justify-between relative overflow-hidden group hover:border-[#0066CC]/60 transition-all duration-300">
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE]" />

            <div>
              {/* Header Label with AI Pulse */}
              <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-blue-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC]">
                    VGT ERP AI
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#0066CC] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    <Sparkles className="w-3 h-3 fill-[#0066CC]" /> Autonomous
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#5E5CE6] bg-indigo-50 px-3 py-1 rounded-full">
                  +340% ROI
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Side: Check List (7 cols) */}
                <div className="md:col-span-7">
                  <ul className="space-y-3.5">
                    {aiFeatures.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base font-semibold text-[#1D1D1F]">
                        <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:bg-[#0066CC] group-hover:text-white group-hover:border-[#0066CC] transition-all duration-200">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Apple-Style AI Intelligence Card Visual (5 cols) */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  {/* Floating Telemetry Box */}
                  <div className="bg-slate-950 text-white rounded-2xl p-5 border border-slate-800 shadow-xl relative overflow-hidden transform transition-all group-hover:scale-105 duration-300">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-800">
                      <span className="flex items-center gap-1.5 font-bold text-white">
                        <Cpu className="w-4 h-4 text-[#00C7BE]" /> Live Decision Core
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-400">Demand Forecast:</span>
                        <span className="text-emerald-400 font-bold">+18.4% Auto-Adjust</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-400">Cost Opportunity:</span>
                        <span className="text-blue-400 font-bold">₹14.2L Saved</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-400">Fraud Flag:</span>
                        <span className="text-purple-300 font-bold">0 Anomalies</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Screenshot Preview Thumbnail */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative group/img">
                    <img
                      src="/images/erp_strategic_projection.png"
                      alt="VGT ERP AI Decision Interface"
                      className="w-full h-32 object-cover object-top transition-transform duration-500 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-white flex items-center gap-1">
                        Real-time AI Copilot <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-8 pt-6 border-t border-blue-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-[#0066CC] flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-[#0066CC]" /> Continuous Autonomous Engine
              </span>
              <span className="font-mono text-slate-400">VGT Neural Core v4.2</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
