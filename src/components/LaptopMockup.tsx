import React from 'react';

interface LaptopMockupProps {
  initialImage?: string;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({
  initialImage = '/images/erp_operations_dashboard.png',
}) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 mb-2 group">
      {/* Ambient Glowing Aura Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-r from-[#0066CC]/30 via-[#5E5CE6]/25 to-[#00C7BE]/30 blur-[140px] rounded-full pointer-events-none -z-10 animate-glow"></div>

      {/* Real MacBook Pro Device Wrapper */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Viewport Screen Overlay positioned inside MacBook Bezel */}
        <div className="relative rounded-[18px] sm:rounded-[24px] bg-slate-950 border-[6px] sm:border-[10px] border-[#1D1D1F] shadow-2xl overflow-hidden group hover:shadow-[#0066CC]/20 transition-all duration-500">
          
          {/* MacBook Screen Top Menu Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#1D1D1F] border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <span className="text-[11px] font-mono text-slate-400 ml-3">
                macbook-pro://vgt-erp-ai.internal/plant-telemetry
              </span>
            </div>
          </div>

          {/* Plant Telemetry Screen Screenshot fitted in MacBook */}
          <div className="relative h-[260px] sm:h-[400px] md:h-[480px] w-full bg-slate-950 overflow-hidden">
            <img
              src={initialImage}
              alt="VGT ERP AI Plant Telemetry Dashboard on MacBook Pro"
              className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.01]"
            />

            {/* Subtle Glass Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </div>
        </div>

        {/* MacBook Aluminium Keyboard Base */}
        <div className="relative w-full h-4 sm:h-5 bg-gradient-to-b from-[#2C2C2E] to-[#1C1C1E] rounded-b-2xl border-t border-slate-700 shadow-2xl flex items-start justify-center">
          <div className="w-24 sm:w-36 h-2.5 sm:h-3.5 bg-[#1C1C1E] rounded-b-xl border-x border-b border-slate-800"></div>
        </div>

        {/* Reflection Base Shadow */}
        <div className="w-[85%] mx-auto h-4 bg-black/40 blur-lg rounded-full mt-1"></div>
      </div>
    </div>
  );
};

