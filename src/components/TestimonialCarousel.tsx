import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "VGT ERP AI transformed our multi-plant manufacturing operations. Sub-second telemetry sync reduced unscheduled downtime by 42% in our first quarter.",
      author: "Henry Vance",
      role: "VP of Global Supply Chain Operations",
      company: "Apex Industrial Corp",
      avatar: "/images/henry_portrait.png",
      rating: 5,
    },
    {
      id: 2,
      quote: "The autonomous multi-currency ledger feature cut our month-end financial reconciliation time from 12 business days down to less than 4 hours.",
      author: "Sarah Jenkins",
      role: "Chief Financial Officer",
      company: "Global Logistics Group",
      avatar: "/images/client_portrait_2.png",
      rating: 5,
    },
    {
      id: 3,
      quote: "Deploying VGT ERP AI natively on Azure Dynamics 365 saved our engineering team months of custom API integration. Highly recommended for enterprise scale.",
      author: "David Miller",
      role: "Chief Technology Officer",
      company: "Vanguard Tech Solutions",
      avatar: "/images/client_portrait_3.png",
      rating: 5,
    },
    {
      id: 4,
      quote: "Predictive freight routing saved us over $1.4M in logistics overhead during peak supply chain disruption last winter. It pays for itself immediately.",
      author: "Elena Rostova",
      role: "Director of Supply Chain Logistics",
      company: "EuroTrans Energy",
      avatar: "/images/client_portrait_4.png",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full py-24 sm:py-32 bg-[#F5F5F7] border-y border-[#E0E0E0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 mb-6 inline-block">
            Customer Proof
          </span>
          <h2 className="display-lg-text text-[#1D1D1F]">
            Trusted by Enterprise Pioneers.
          </h2>
        </div>

        {/* 24px Apple Store Utility Card */}
        <div className="relative rounded-[24px] bg-white p-10 sm:p-16 border border-slate-200/90 shadow-md">
          <Quote className="w-16 h-16 text-[#0066CC]/15 absolute top-8 left-8 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            {/* Stars */}
            <div className="flex items-center gap-1.5 text-amber-500">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
              ))}
            </div>

            {/* Giant Quote Text */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1D1D1F] leading-snug max-w-3xl italic">
              "{current.quote}"
            </p>

            {/* Author Avatar & Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-[#F0F0F0] w-full justify-center">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-[#0066CC]/20"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-[#1D1D1F] font-display">{current.author}</h4>
                <p className="text-sm text-slate-500 font-normal">{current.role}</p>
                <p className="text-sm text-[#0066CC] font-bold">{current.company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#F0F0F0]">
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-10 bg-[#0066CC]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-[#F5F5F7] border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors shadow-xs"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-[#F5F5F7] border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors shadow-xs"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
