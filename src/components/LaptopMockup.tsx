import React, { useState } from 'react';
import { Cpu, Zap, Activity } from 'lucide-react';

interface LaptopMockupProps {
  initialImage?: string;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({
  initialImage = '/images/erp_operations_dashboard.png',
}) => {
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [activeTab, setActiveTab] = useState('telemetry');

  const screens = [
    {
      id: 'telemetry',
      label: 'Plant Telemetry',
      image: '/images/erp_operations_dashboard.png',
      badge: '99.94% OEE Yield',
    },
    {
      id: 'crm',
      label: 'Predictive CRM',
      image: '/images/crm_dashboard_mockup.png',
      badge: '$4.85M Pipeline Win',
    },
    {
      id: 'logistics',
      label: 'Autonomous Freight',
      image: '/images/erp_ai_operations.png',
      badge: '-32% Fuel Overhead',
    },
    {
      id: 'ledgers',
      label: 'Multi-Subledgers',
      image: '/images/erp_autonomous_invoicing_vgt.png',
      badge: '1,450 Invoices / Sec',
    },
  ];

  const handleTabChange = (id: string, image: string) => {
    setActiveTab(id);
    setCurrentImage(image);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 group">
      {/* Ambient Glowing Aura Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-r from-[#0066CC]/30 via-[#5E5CE6]/25 to-[#00C7BE]/30 blur-[140px] rounded-full pointer-events-none -z-10 animate-glow"></div>

      {/* Floating HUD Stat Badges */}
      <div className="hidden lg:flex absolute -top-6 -left-8 z-30 items-center gap-3 px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl animate-float">
        <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
          <Activity className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Response Latency</span>
          <span className="text-sm font-extrabold text-[#1D1D1F] font-mono">0.42 ms Sync</span>
        </div>
      </div>

      <div className="hidden lg:flex absolute -bottom-4 -right-8 z-30 items-center gap-3 px-5 py-3 rounded-2xl bg-[#1D1D1F] text-white backdrop-blur-xl border border-white/20 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
        <div className="p-2.5 rounded-xl bg-[#0066CC] text-white">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">AI Capacity</span>
          <span className="text-sm font-extrabold text-white font-mono">+34% Throughput</span>
        </div>
      </div>

      {/* Real MacBook Pro Device Wrapper */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Interactive Viewport Screen Overlay positioned inside MacBook Bezel */}
        <div className="relative rounded-[18px] sm:rounded-[24px] bg-slate-950 border-[6px] sm:border-[10px] border-[#1D1D1F] shadow-2xl overflow-hidden group hover:shadow-[#0066CC]/20 transition-all duration-500">
          
          {/* MacBook Screen Top Menu Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#1D1D1F] border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <span className="text-[11px] font-mono text-slate-400 ml-3 hidden sm:inline">
                macbook-pro://vgt-erp-ai.internal
              </span>
            </div>

            {/* Interactive Screen Tab Controls */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {screens.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id, tab.image)}
                  className={`px-3 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#0066CC] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live Telemetry
            </div>
          </div>

          {/* Active Screen Screenshot fitted in MacBook */}
          <div className="relative h-[260px] sm:h-[400px] md:h-[480px] w-full bg-slate-950 overflow-hidden">
            <img
              src={currentImage}
              alt="VGT ERP AI Dashboard on MacBook Pro"
              className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.01]"
            />

            {/* Subtle Glass Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>

            {/* Floating Live Badge Overlay inside MacBook Screen */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-2xl">
              <Cpu className="w-4 h-4 text-[#0066CC]" />
              <span>MACBOOK DISPLAY: <strong className="text-cyan-400">{screens.find(s => s.id === activeTab)?.badge}</strong></span>
            </div>
          </div>
        </div>

        {/* MacBook Aluminium Keyboard Aluminum Notch Base */}
        <div className="relative w-full h-4 sm:h-5 bg-gradient-to-b from-[#2C2C2E] to-[#1C1C1E] rounded-b-2xl border-t border-slate-700 shadow-2xl flex items-start justify-center">
          <div className="w-24 sm:w-36 h-2.5 sm:h-3.5 bg-[#1C1C1E] rounded-b-xl border-x border-b border-slate-800"></div>
        </div>

        {/* Reflection Base Shadow */}
        <div className="w-[85%] mx-auto h-4 bg-black/40 blur-lg rounded-full mt-1"></div>
      </div>
    </div>
  );
};
