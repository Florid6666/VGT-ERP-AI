import React from 'react';
import { Brain, MessageSquare, Plug, Gauge, Coins, ShieldCheck } from 'lucide-react';

interface ReasonItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const WhyVgtSection: React.FC = () => {
  const reasons: ReasonItem[] = [
    {
      id: 'native-ai',
      icon: <Brain className="w-6 h-6" />,
      title: 'AI that is native, not bolted on',
      description:
        "Prediction and recommendation live inside every module — not in a separate analytics add-on you'll never open.",
    },
    {
      id: 'ask-anything',
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Ask your company anything',
      description:
        'The internal-intelligence chatbot answers stock, margin, order and machine questions in plain language, instantly.',
    },
    {
      id: 'migrate-fresh',
      icon: <Plug className="w-6 h-6" />,
      title: 'Migrate or start fresh',
      description:
        "Import masters and history from your existing ERP, or begin clean if you've never used one. Both paths go live fast.",
    },
    {
      id: 'weeks-to-value',
      icon: <Gauge className="w-6 h-6" />,
      title: 'Weeks to value, not years',
      description:
        'Modular rollout means the first module is producing results while the rest is still being configured.',
    },
    {
      id: 'cost-visible',
      icon: <Coins className="w-6 h-6" />,
      title: 'Cost you can see',
      description:
        'Purchase price drift, idle capacity, overtime and dead stock surfaced as rupee-value opportunities, not raw tables.',
    },
    {
      id: 'anomaly-watch',
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Anomaly & fraud watch',
      description:
        'Continuous monitoring flags unusual entries, duplicate billing and consumption spikes before they become losses.',
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFAFC] relative overflow-hidden border-b border-[#E5E5EA]">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-200/30 via-indigo-200/30 to-purple-200/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-sm backdrop-blur-md mb-6 transition-transform duration-300 hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC]">
              HOW WE'RE DIFFERENT
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-4">
            Six reasons teams pick{' '}
            <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#A259FF] bg-clip-text text-transparent">
              VGT ERP AI
            </span>
          </h2>
        </div>

        {/* Unified 6-Grid Border Frame Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-x lg:divide-y-0 divide-slate-100">
            {reasons.map((item, idx) => (
              <div
                key={item.id}
                className={`p-8 sm:p-10 flex flex-col justify-start transition-all duration-300 hover:bg-slate-50/70 group relative ${
                  idx < 3 ? 'lg:border-b lg:border-slate-100' : ''
                } ${idx < 4 && idx >= 2 ? 'md:border-t md:border-slate-100 lg:border-t-0' : ''} ${
                  idx === 1 ? 'md:border-l md:border-slate-100 lg:border-l-0' : ''
                } ${idx === 3 ? 'md:border-t md:border-slate-100 lg:border-t-0' : ''} ${
                  idx === 5 ? 'md:border-l md:border-slate-100 lg:border-l-0' : ''
                }`}
              >
                {/* Subtle top indicator line on hover */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[#0066CC] to-[#5E5CE6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100/80 flex items-center justify-center text-[#0066CC] mb-6 group-hover:scale-110 group-hover:bg-[#0066CC] group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-3 tracking-tight group-hover:text-[#0066CC] transition-colors duration-200">
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
      </div>
    </section>
  );
};
