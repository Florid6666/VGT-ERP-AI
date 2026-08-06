import React from 'react';
import { ArrowRight, Play, Shield, Cpu, Zap } from 'lucide-react';
import { LaptopMockup } from './LaptopMockup';

interface HeroSectionProps {
  onOpenTrial: () => void;
  onWatchDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial, onWatchDemo }) => {
  return (
    <section id="home" className="w-full relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden bg-white">
      {/* Eye-Catchy Pastel Mesh Radial Glow Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[450px] sm:h-[650px] bg-gradient-to-tr from-blue-300/50 via-indigo-200/40 to-cyan-300/50 blur-[150px] rounded-full pointer-events-none -z-10 animate-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Social Proof Capsule */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E0E0E0] shadow-xs mb-8 group hover:border-[#0066CC]/40 transition-all duration-300">
          <div className="flex -space-x-1.5 overflow-hidden">
            <img
              src="/images/reviewer_portrait.png"
              alt="Client"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
            />
            <div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[#0066CC] ring-2 ring-white text-[10px] font-bold text-white">
              +3
            </div>
            <div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-emerald-600 ring-2 ring-white text-[10px] font-bold text-white">
              JD
            </div>
          </div>
          <span className="text-sm font-medium text-slate-700">
            Trusted by <strong className="text-[#1D1D1F] font-bold">12,000+</strong> global enterprise leaders
          </span>
          <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-pulse"></span>
        </div>

        {/* Giant Keynote SF Display Headline (96px max) */}
        <h1 className="hero-display-text text-[#1D1D1F] max-w-6xl mb-6">
          Autonomous, AI-Powered <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE] bg-clip-text text-transparent">
            Cloud Enterprise ERP Suite
          </span>
        </h1>

        {/* Lead Tagline */}
        <p className="lead-text max-w-4xl mb-12 text-slate-600 font-normal">
          Streamline plant management, logistics, automated billing, and predictive procurement with VGT ERP AI — the next-generation autonomous enterprise platform.
        </p>

        {/* Giant Dual Action Blue Pill CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4.5 text-lg font-semibold text-white bg-[#0066CC] hover:bg-[#0071E3] active:scale-[0.98] rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onWatchDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4.5 text-lg font-semibold text-[#0066CC] bg-[#F5F5F7] hover:bg-[#E8E8ED] border border-[#E0E0E0] active:scale-[0.98] rounded-full transition-all duration-300 group"
          >
            <Play className="w-5 h-5 mr-2 text-[#0066CC] fill-[#0066CC] group-hover:scale-110 transition-transform" />
            <span>Watch AI Demo</span>
          </button>
        </div>

        {/* LAPTOP PRODUCT MOCKUP DEMO */}
        <LaptopMockup initialImage="/images/erp_operations_dashboard.png" />

        {/* Feature Badges Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full pt-8 border-t border-[#F0F0F0]">
          <div className="flex items-center justify-center gap-2.5 text-sm font-medium text-slate-700">
            <Cpu className="w-5 h-5 text-[#0066CC]" />
            <span>Autonomous AI Workflows</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-sm font-medium text-slate-700">
            <Zap className="w-5 h-5 text-[#5E5CE6]" />
            <span>Sub-Millisecond Telemetry</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-sm font-medium text-slate-700">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span>Multitenant DB Isolation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
