import React from 'react';
import { Sparkles, Gauge, Activity } from 'lucide-react';

export const OneScreenSection: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#5E5CE6]" />,
      iconBg: 'bg-indigo-50 border-indigo-100',
      title: 'AI-first navigation',
      description:
        'Every module — production, inventory, procurement, quality and demand — powered by native intelligence.',
    },
    {
      icon: <Gauge className="w-5 h-5 text-[#0066CC]" />,
      iconBg: 'bg-blue-50 border-blue-100',
      title: 'Live operating picture',
      description:
        'OEE, on-time delivery, quality pass rate and plant utilization updated second by second.',
    },
    {
      icon: <Activity className="w-5 h-5 text-purple-600" />,
      iconBg: 'bg-purple-50 border-purple-100',
      title: 'Act from the dashboard',
      description:
        'Raise a work order, run a demand forecast or approve procurement directly from the screen.',
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFAFC] relative overflow-hidden border-b border-[#E5E5EA]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100/30 via-indigo-100/30 to-purple-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Headline */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-5">
            Your whole operation,{' '}
            <span className="bg-gradient-to-r from-[#3B38A6] via-[#5E5CE6] to-[#A259FF] bg-clip-text text-transparent">
              on one intelligent screen
            </span>
          </h2>
          <p className="text-base sm:text-xl text-slate-600 font-normal tracking-tight max-w-3xl">
            No hunting through menus or waiting for a report. The command centre shows what's happening now — and what the AI suggests you do next.
          </p>
        </div>

        {/* Big Apple Studio Display Monitor Mockup (No Cropping, Full Width Display) */}
        <div className="max-w-6xl mx-auto mb-16 relative">
          
          {/* Monitor Screen Frame */}
          <div className="bg-[#1D1D1F] rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-300/80 group">
            
            {/* Monitor Top Browser Window Bar */}
            <div className="bg-[#2C2C2E] rounded-t-2xl px-4 py-2.5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              
              {/* URL Pill */}
              <div className="bg-[#1C1C1E] px-5 py-1 rounded-full text-xs font-mono text-slate-300 border border-white/10 flex items-center gap-2 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>app.vgterp.ai / operations</span>
              </div>

              <div className="w-12" />
            </div>

            {/* Uncropped Full Screen Dashboard Image */}
            <div className="bg-white rounded-b-2xl overflow-hidden shadow-inner">
              <img
                src="/images/erp_operations_dashboard.png"
                alt="VGT ERP AI Operations Command Centre"
                className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Sleek Apple Studio Display Stand Base */}
          <div className="flex flex-col items-center pointer-events-none">
            {/* Monitor Neck Stem */}
            <div className="w-24 sm:w-32 h-10 sm:h-12 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-200 border-x border-slate-400/50 shadow-md" />
            {/* Monitor Foot Base */}
            <div className="w-56 sm:w-72 h-3.5 sm:h-4 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 rounded-t-lg border-t border-slate-400/60 shadow-xl" />
          </div>
        </div>

        {/* 3 Feature Cards Below Monitor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-11 h-11 rounded-2xl ${item.iconBg} border flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
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
