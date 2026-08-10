import React, { useState } from 'react';
import { TrendingUp, Package, DollarSign, Activity, Sparkles, RefreshCw } from 'lucide-react';

interface MetricItem {
  id: string;
  eyebrow: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

export const MetricSparklines: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricItem[]>([
    {
      id: 'rev',
      eyebrow: 'FINANCIAL INTELLIGENCE',
      title: 'Quarterly Revenue',
      value: '$3.84M',
      change: '+18.4%',
      isPositive: true,
      icon: <DollarSign className="w-5 h-5 text-[#0066CC]" />,
    },
    {
      id: 'proc',
      eyebrow: 'SUPPLY CHAIN HUB',
      title: 'Procurement Orders',
      value: '5,820',
      change: '+12.1%',
      isPositive: true,
      icon: <Package className="w-5 h-5 text-[#5E5CE6]" />,
    },
    {
      id: 'eff',
      eyebrow: 'OPERATIONAL YIELD',
      title: 'Plant OEE Efficiency',
      value: '99.4%',
      change: '+5.2%',
      isPositive: true,
      icon: <Activity className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'growth',
      eyebrow: 'AUTONOMOUS FREIGHT',
      title: 'Logistics Velocity',
      value: '+24.8%',
      change: '+3.9%',
      isPositive: true,
      icon: <Sparkles className="w-5 h-5 text-[#00C7BE]" />,
    },
  ]);

  const [animatingId, setAnimatingId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setAnimatingId(id);
    setTimeout(() => setAnimatingId(null), 400);

    setMetrics((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (id === 'rev') {
          const newVal = (3.6 + Math.random() * 0.4).toFixed(2);
          return { ...item, value: `$${newVal}M` };
        } else if (id === 'proc') {
          const newVal = Math.floor(5600 + Math.random() * 600);
          return { ...item, value: newVal.toLocaleString() };
        } else if (id === 'eff') {
          const newVal = (98.8 + Math.random() * 1.1).toFixed(1);
          return { ...item, value: `${newVal}%` };
        } else {
          const newVal = (23.0 + Math.random() * 4.0).toFixed(1);
          return { ...item, value: `+${newVal}%` };
        }
      })
    );
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-white border-y border-[#E5E5EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Apple-style Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#E0E0E0] shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-pulse"></span>
              <span className="text-[11px] font-bold text-[#0066CC] uppercase tracking-widest">
                REAL-TIME TELEMETRY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
              Enterprise Performance. <span className="text-slate-500 font-normal">Measured live.</span>
            </h2>
          </div>
          
          <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
            Click any metric card to recalculate node telemetry
          </span>
        </div>

        {/* 4 Apple Glass Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={`group relative cursor-pointer bg-[#F5F5F7]/80 hover:bg-white rounded-[28px] border border-[#E5E5EA] p-7 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0066CC]/30 hover:-translate-y-1.5 ${
                animatingId === item.id ? 'scale-[1.02] border-[#0066CC] ring-2 ring-[#0066CC]/20 bg-white' : ''
              }`}
            >
              {/* Card Top: Icon & Trend Pill */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.change}</span>
                </div>
              </div>

              {/* Eyebrow & Value */}
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  {item.eyebrow}
                </span>
                <h3 className="text-sm font-semibold text-slate-700 mb-2">
                  {item.title}
                </h3>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight font-mono">
                  {item.value}
                </div>
              </div>

              {/* Micro Refresh Hint Icon */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
                <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

