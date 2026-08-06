import React, { useState } from 'react';
import { TrendingUp, Package, DollarSign, Activity, RefreshCw } from 'lucide-react';

interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  chartPath: string;
}

export const MetricSparklines: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricItem[]>([
    {
      id: 'rev',
      title: 'Quarterly Revenue',
      value: '$3.84M',
      change: '+18.4%',
      isPositive: true,
      icon: <DollarSign className="w-6 h-6 text-[#0066CC]" />,
      chartPath: 'M0 25 Q 25 10, 50 18 T 100 5 T 150 15 T 200 2',
    },
    {
      id: 'proc',
      title: 'Procurement Orders',
      value: '5,820',
      change: '+12.1%',
      isPositive: true,
      icon: <Package className="w-6 h-6 text-[#5E5CE6]" />,
      chartPath: 'M0 20 Q 30 28, 60 12 T 120 18 T 170 8 T 200 4',
    },
    {
      id: 'eff',
      title: 'Plant Efficiency',
      value: '99.4%',
      change: '+5.2%',
      isPositive: true,
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
      chartPath: 'M0 22 Q 40 5, 80 15 T 140 8 T 200 3',
    },
    {
      id: 'growth',
      title: 'Logistics Growth',
      value: '+24.8%',
      change: '+3.9%',
      isPositive: true,
      icon: <TrendingUp className="w-6 h-6 text-[#00C7BE]" />,
      chartPath: 'M0 28 Q 50 18, 90 22 T 150 10 T 200 2',
    },
  ]);

  const [animatingId, setAnimatingId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setAnimatingId(id);
    setTimeout(() => setAnimatingId(null), 300);

    setMetrics((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (id === 'rev') {
          const newVal = (3.5 + Math.random() * 0.5).toFixed(2);
          return { ...item, value: `$${newVal}M` };
        } else if (id === 'proc') {
          const newVal = Math.floor(5500 + Math.random() * 800);
          return { ...item, value: newVal.toLocaleString() };
        } else if (id === 'eff') {
          const newVal = (98.5 + Math.random() * 1.4).toFixed(1);
          return { ...item, value: `${newVal}%` };
        } else {
          const newVal = (22.0 + Math.random() * 5.0).toFixed(1);
          return { ...item, value: `+${newVal}%` };
        }
      })
    );
  };

  return (
    <section className="w-full py-20 bg-[#F5F5F7] border-y border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            Real-Time Telemetry (Click cards to trigger live node recalculation)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={`relative cursor-pointer bg-white rounded-[24px] border border-slate-200/90 p-8 shadow-xs transition-all duration-300 hover:shadow-2xl hover:border-[#0066CC]/40 hover:-translate-y-1.5 group ${
                animatingId === item.id ? 'scale-105 border-[#0066CC] bg-blue-50/50' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-slate-200/60 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {item.change}
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  {item.title}
                </span>
                <span className="giant-metric text-[#1D1D1F]">
                  {item.value}
                </span>
              </div>

              {/* Mini Sparkline SVG */}
              <div className="w-full h-10 overflow-hidden">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 30">
                  <path
                    d={item.chartPath}
                    fill="none"
                    stroke="#0066CC"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <RefreshCw className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
