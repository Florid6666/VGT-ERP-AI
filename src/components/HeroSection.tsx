import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { LaptopMockup } from './LaptopMockup';

interface HeroSectionProps {
  onOpenTrial: () => void;
  onWatchDemo: () => void;
}

const TypewriterText: React.FC = () => {
  const words = [
    "Cloud Enterprise ERP Suite",
    "Autonomous Supply Chain",
    "Real-Time Financial Intelligence",
    "Predictive Procurement Engine",
    "Smart Manufacturing Operations"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  const currentText = words[index].substring(0, subIndex);

  return (
    <span className="inline-block relative whitespace-nowrap max-w-full text-[clamp(28px,5vw,76px)] sm:text-[clamp(36px,5.8vw,84px)]">
      <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE] bg-clip-text text-transparent pb-1 leading-tight">
        {currentText || '\u00A0'}
      </span>
      <span className="inline-block w-[3px] sm:w-[5px] h-[0.75em] ml-1.5 bg-[#0066CC] rounded-full align-middle animate-cursor shadow-[0_0_12px_rgba(0,102,204,0.6)]" />
    </span>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial, onWatchDemo }) => {
  return (
    <section id="home" className="w-full relative pt-32 pb-10 sm:pt-40 sm:pb-10 lg:pt-48 lg:pb-10 overflow-hidden bg-white">
      {/* Checkered Grid Pattern Depth Layer */}
      <div className="hero-grid-pattern"></div>

      {/* Eye-Catchy Pastel Mesh Radial Glow Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[450px] sm:h-[650px] bg-gradient-to-tr from-blue-300/40 via-indigo-200/30 to-cyan-300/40 blur-[150px] rounded-full pointer-events-none z-0 animate-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center relative z-10">
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
          <TypewriterText />
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
      </div>
    </section>
  );
};
