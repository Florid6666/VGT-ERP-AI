import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';

export const StartingPointsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startingPoints = [
    {
      id: 'no-erp',
      tabLabel: 'No ERP Yet',
      title: 'STILL RUNNING ON SPREADSHEETS, WHATSAPP AND MEMORY?',
      description:
        "You don't need to spend two years installing legacy software first. Start directly on an AI-native platform — structured operations from week one, intelligence from day one.",
      bgImage: '/images/frustrated_business_owner_whatsapp.png',
      highlights: [],
    },
    {
      id: 'basic-erp',
      tabLabel: 'Using a Basic ERP',
      title: "YOUR ERP RECORDS THE PAST. IT DOESN'T SHAPE THE FUTURE.",
      description:
        "Basic ERP tells you what happened. VGT ERP AI tells you what will happen, what to do about it, and then does most of it for you — on top of the data you already have.",
      bgImage: '/images/legacy_erp_past_records.png',
      highlights: [],
    },
    {
      id: 'vgt-erp-ai',
      tabLabel: 'With VGT ERP AI',
      title: 'AUTONOMOUS INTELLIGENCE IN ACTION FOR MODERN TEAMS.',
      description:
        'Transform scattered operations and static databases into a self-steering enterprise core. Experience real-time clarity, automated workflows, and effortless productivity.',
      bgImage: '/images/happy_manager_vgt_erp_ai.png',
      highlights: [
        'Go live module by module, no big-bang disruption',
        'Stock, production and costing visible in real time',
        'AI fills the gap left by missing process maturity',
        'Migrate existing masters and history while keeping your workflows',
        'Cut manual reporting and reconciliation hours dramatically',
        'Owner-level clarity without adding back-office headcount',
      ],
    },
  ];

  // Automatic Slideshow Timer (6s rotation)
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % startingPoints.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, startingPoints.length]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % startingPoints.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? startingPoints.length - 1 : prev - 1));
  };

  const current = startingPoints[activeSlide];
  const hasHighlights = current.highlights && current.highlights.length > 0;

  return (
    <section className="w-full pt-16 sm:pt-24 pb-0 bg-white relative overflow-hidden border-b border-[#E5E5EA]">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center relative z-10 mb-10 sm:mb-14">
        {/* Section Headline */}
        <h2 className="display-lg-text text-[#1D1D1F] max-w-5xl mb-6 tracking-tight">
          Wherever you are today, <br />
          <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE] bg-clip-text text-transparent">
            the jump is the same
          </span>
        </h2>

        {/* Section Subtitle */}
        <p className="lead-text max-w-3xl text-slate-600 font-normal">
          VGT ERP AI is built for businesses with no ERP at all — and for those stuck with an ERP that only stores data.
        </p>
      </div>

      {/* 100% Full-Bleed Interactive Slideshow Container */}
      <div
        className="relative w-full overflow-hidden min-h-[680px] sm:min-h-[780px] lg:min-h-[840px] border-t border-slate-200 shadow-2xl transition-all duration-700 text-left group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-Bleed Stretched Background Image */}
        <img
          key={current.id}
          src={current.bgImage}
          alt={current.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105"
        />

        {/* Top Vignette Overlay for Top Switcher Bar */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />

        {/* Bottom Gradient Overlay to ensure text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent pointer-events-none" />

        {/* Full-Bleed Overlay Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-6 sm:pt-8 pb-8 sm:pb-12 flex flex-col justify-between min-h-[680px] sm:min-h-[780px] lg:min-h-[840px]">
          
          {/* Top Bar Switcher Tabs & Controls */}
          <div className="flex items-center justify-between gap-4 pb-6">
            {/* Slide Tabs */}
            <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-white/20 backdrop-blur-xl shadow-lg">
              {startingPoints.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeSlide === idx
                      ? 'bg-white text-[#1D1D1F] shadow-md scale-[1.02]'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.tabLabel}
                </button>
              ))}
            </div>

            {/* Slideshow Navigation & Progress Indicator */}
            <div className="flex items-center gap-3">
              {/* Dot indicators */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950/60 border border-white/10 backdrop-blur-md">
                {startingPoints.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? 'w-6 bg-[#0066CC]' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-slate-950/80 hover:bg-slate-900 text-white border border-white/20 transition-all active:scale-95 backdrop-blur-xl shadow-lg"
                title="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-slate-950/80 hover:bg-slate-900 text-white border border-white/20 transition-all active:scale-95 backdrop-blur-xl shadow-lg"
                title="Next Slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Overlay Copy & Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 pb-2">
            {/* Headline & Description */}
            <div className={hasHighlights ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl"}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight uppercase drop-shadow-md transition-all duration-500">
                {current.title}
              </h3>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-3xl drop-shadow">
                {current.description}
              </p>
            </div>

            {/* Right Checklist Box (Only rendered for slide 3 with highlights) */}
            {hasHighlights && (
              <div className="lg:col-span-5 bg-slate-950/85 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <ul className="space-y-3.5">
                  {current.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm font-medium text-slate-100">
                      <div className="p-1 rounded-full bg-[#0066CC] text-white mt-0.5 shrink-0 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
