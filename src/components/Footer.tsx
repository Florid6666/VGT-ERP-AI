import React from 'react';
import { Shield, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F5F5F7] text-[#7A7A7A] border-t border-[#E0E0E0] pt-16 pb-12 fine-print-apple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E0E0E0]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <img src="/images/logo.png" alt="VGT ERP AI" className="h-7 w-auto object-contain rounded-md" />
              <span className="text-base font-semibold tracking-tight text-[#1D1D1F] font-display">
                VGT ERP <span className="text-[#0066CC]">AI</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-normal">
              Next-generation autonomous enterprise ERP suite powering predictive logistics, plant telemetry, multi-currency sub-ledgers, and AI CRM.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-medium">
                <Shield className="w-3.5 h-3.5" /> SOC2 Type II Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-[#0066CC] text-[11px] font-mono font-medium">
                <Globe className="w-3.5 h-3.5" /> ISO-27001
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-display">Platform Modules</h4>
            <ul className="space-y-2 text-xs font-normal">
              <li><a href="#services" className="hover:text-[#0066CC] transition-colors">Autonomous Invoicing</a></li>
              <li><a href="#services" className="hover:text-[#0066CC] transition-colors">Plant Management IoT</a></li>
              <li><a href="#services" className="hover:text-[#0066CC] transition-colors">Predictive Logistics</a></li>
              <li><a href="#crm" className="hover:text-[#0066CC] transition-colors">Executive CRM Forecasting</a></li>
              <li><a href="#services" className="hover:text-[#0066CC] transition-colors">Multitenant DB Security</a></li>
            </ul>
          </div>

          {/* Verticals Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-display">Target Verticals</h4>
            <ul className="space-y-2 text-xs font-normal">
              <li><a href="#industries" className="hover:text-[#0066CC] transition-colors">Manufacturing & Robotics</a></li>
              <li><a href="#industries" className="hover:text-[#0066CC] transition-colors">Energy & Utilities</a></li>
              <li><a href="#industries" className="hover:text-[#0066CC] transition-colors">Healthcare & Pharma</a></li>
              <li><a href="#industries" className="hover:text-[#0066CC] transition-colors">Global Freight & Logistics</a></li>
              <li><a href="#industries" className="hover:text-[#0066CC] transition-colors">Omnichannel Retail</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-display">Enterprise</h4>
            <ul className="space-y-2 text-xs font-normal">
              <li><a href="#partnership" className="hover:text-[#0066CC] transition-colors flex items-center gap-1">Microsoft Partnership <ArrowUpRight className="w-3 h-3 text-[#0066CC]" /></a></li>
              <li><a href="#faq" className="hover:text-[#0066CC] transition-colors">Security & SLA Uptime</a></li>
              <li><a href="#contact" className="hover:text-[#0066CC] transition-colors">Book Architectural Demo</a></li>
              <li><a href="#contact" className="hover:text-[#0066CC] transition-colors">Careers & Research</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} VGT ERP AI Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Trust Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
