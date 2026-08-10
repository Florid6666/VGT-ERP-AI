import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (view: 'home' | 'crm' | 'industries' | 'partnership') => void;
  activeView: 'home' | 'crm' | 'industries' | 'partnership';
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigate, activeView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-2xl border-b border-[#E0E0E0] py-3.5 shadow-md'
          : 'bg-white/80 backdrop-blur-xl border-b border-transparent py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group text-left">
          <img
            src="/images/logo.png"
            alt="VGT ERP AI"
            className="h-9 w-auto object-contain rounded-lg shadow-xs"
          />
          <span className="text-xl font-extrabold tracking-tight text-[#1D1D1F] font-display flex items-center gap-1.5">
            VGT ERP <span className="text-[#0066CC] font-black">AI</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm font-semibold transition-colors py-1 ${
              activeView === 'home' ? 'text-[#0066CC]' : 'text-slate-700 hover:text-[#1D1D1F]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('crm')}
            className={`text-sm font-semibold transition-colors py-1 ${
              activeView === 'crm' ? 'text-[#0066CC]' : 'text-slate-700 hover:text-[#1D1D1F]'
            }`}
          >
            CRM Page
          </button>
          <button
            onClick={() => onNavigate('industries')}
            className={`text-sm font-semibold transition-colors py-1 ${
              activeView === 'industries' ? 'text-[#0066CC]' : 'text-slate-700 hover:text-[#1D1D1F]'
            }`}
          >
            Industries Page
          </button>

          {/* Microsoft Partnership Link */}
          <button
            onClick={() => onNavigate('partnership')}
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-1 ${
              activeView === 'partnership' ? 'text-[#0066CC]' : 'text-slate-700 hover:text-[#1D1D1F]'
            }`}
          >
            <span>Microsoft Partnership</span>
            <ShieldCheck className="w-4 h-4 text-[#0066CC]" />
          </button>
        </nav>

        {/* Action Blue Primary Pill CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0066CC] hover:bg-[#0071E3] active:scale-[0.98] rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <span>Contact Sales</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-xl"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-2xl border-b border-[#E0E0E0] p-6 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="px-4 py-3 text-base font-bold text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-xl text-left"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('crm');
                setMobileMenuOpen(false);
              }}
              className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-[#F5F5F7] rounded-xl text-left"
            >
              CRM Page
            </button>
            <button
              onClick={() => {
                onNavigate('industries');
                setMobileMenuOpen(false);
              }}
              className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-[#F5F5F7] rounded-xl text-left"
            >
              Industries Page
            </button>
            <button
              onClick={() => {
                onNavigate('partnership');
                setMobileMenuOpen(false);
              }}
              className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-[#F5F5F7] rounded-xl text-left"
            >
              Microsoft Partnership
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#0066CC] hover:bg-[#0071E3] text-white font-semibold text-base text-center flex items-center justify-center gap-2 shadow-md"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
