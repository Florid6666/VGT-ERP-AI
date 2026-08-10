import React from 'react';

interface LaptopMockupProps {
  initialImage?: string;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({
  initialImage = '/images/erp_operations_dashboard.png',
}) => {
  return (
    <div className="relative w-full max-w-6xl xl:max-w-7xl mx-auto mt-8 mb-4 group">
      {/* Ambient Glowing Aura Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[85%] bg-gradient-to-r from-[#0066CC]/35 via-[#5E5CE6]/30 to-[#00C7BE]/35 blur-[160px] rounded-full pointer-events-none -z-10 animate-glow"></div>

      {/* Computer Monitor Display Wrapper */}
      <div className="relative w-full mx-auto">
        {/* Monitor Screen Frame (Ultra-Sleek Apple Studio Display Bezel) */}
        <div className="relative rounded-[22px] sm:rounded-[30px] bg-slate-950 border-[8px] sm:border-[14px] border-[#1D1D1F] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden group hover:shadow-[#0066CC]/25 transition-all duration-500">
          
          {/* Top Camera Sensor Dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111113] ring-1 ring-slate-800 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-slate-700"></div>
            </div>
          </div>

          {/* Monitor Screen Top Browser / Dashboard Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#1D1D1F] border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <span className="text-[11px] sm:text-xs font-mono text-slate-300 ml-3 font-semibold">
                vgt-erp-ai://app.enterprise.internal/operations-dashboard
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE SYSTEM
              </span>
            </div>
          </div>

          {/* Monitor Full Widescreen Display Content (No Cropping / Fills Canvas) */}
          <div className="relative w-full bg-slate-950 overflow-hidden flex items-center justify-center">
            <img
              src={initialImage}
              alt="VGT ERP AI Operations Dashboard on 5K Monitor Display"
              className="w-full h-auto object-contain block transition-all duration-500 group-hover:scale-[1.005]"
            />

            {/* Glass Surface Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Studio Display Ergonomic Metallic Stand Arm */}
        <div className="relative w-28 sm:w-40 h-10 sm:h-14 bg-gradient-to-b from-[#2C2C2E] via-[#3A3A3C] to-[#1C1C1E] mx-auto border-x border-slate-700 shadow-inner rounded-t-sm -mt-0.5 z-0"></div>

        {/* Heavy Metal Base Stand Footprint */}
        <div className="relative w-64 sm:w-96 h-3.5 sm:h-5 bg-gradient-to-b from-[#3A3A3C] via-[#2C2C2E] to-[#1C1C1E] rounded-full mx-auto border-t border-slate-500/80 shadow-2xl -mt-1 z-10"></div>

        {/* Floor Soft Ambient Glow & Reflection Shadow */}
        <div className="w-[90%] mx-auto h-5 bg-black/50 blur-xl rounded-full mt-1"></div>
      </div>
    </div>
  );
};
