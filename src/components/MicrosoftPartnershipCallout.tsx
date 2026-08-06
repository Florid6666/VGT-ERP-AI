import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const MicrosoftPartnershipCallout: React.FC = () => {
  const partnerLogos = [
    { name: 'Microsoft Dynamics 365', icon: '/images/logo_dynamics.svg' },
    { name: 'Amazon Web Services', icon: '/images/logo_aws.svg' },
    { name: 'Oracle Enterprise', icon: '/images/logo_oracle.svg' },
    { name: 'Salesforce CRM', icon: '/images/logo_salesforce.svg' },
    { name: 'NetSuite ERP', icon: '/images/logo_netsuite.svg' },
    { name: 'Microsoft Power BI', icon: '/images/logo_powerbi.svg' },
    { name: 'Odoo Enterprise', icon: '/images/logo_odoo.svg' },
  ];

  return (
    <section id="partnership" className="w-full py-24 sm:py-32 bg-[#1D1D1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Partner Logos Bar */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Natively Integrated & Co-Engineered With Enterprise Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {partnerLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/10 border border-white/15 hover:border-white/30 transition-all">
                <img src={logo.icon} alt={logo.name} className="h-6 w-auto object-contain" />
                <span className="text-xs font-medium text-slate-200">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 24px Apple Dark Tile Frame */}
        <div className="relative rounded-[24px] bg-[#272729] p-10 sm:p-16 border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-bold text-[#2997FF]">
                <ShieldCheck className="w-4 h-4 text-[#2997FF]" />
                <span>STRATEGIC MICROSOFT CO-SELL ALLIANCE</span>
              </div>

              <h2 className="display-lg-text text-white leading-tight">
                Deep Microsoft Azure & Dynamics 365 Integration.
              </h2>

              <p className="lead-text text-slate-300 font-normal">
                Deploy VGT ERP AI natively inside your existing Azure subscription. Seamlessly bridge Dynamics 365 Business Central, Power BI telemetry, and Azure OpenAI Service with zero data egress friction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-[#1D1D1F] border border-white/10">
                  <span className="text-xs font-mono text-slate-400 block mb-1">MARKETPLACE</span>
                  <span className="text-lg font-bold text-white">IP Co-Sell Ready</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#1D1D1F] border border-white/10">
                  <span className="text-xs font-mono text-slate-400 block mb-1">SECURITY</span>
                  <span className="text-lg font-bold text-emerald-400">SOC2 Type II</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#1D1D1F] border border-white/10">
                  <span className="text-xs font-mono text-slate-400 block mb-1">AVAILABILITY</span>
                  <span className="text-lg font-bold text-[#2997FF]">99.999% SLA</span>
                </div>
              </div>
            </div>

            {/* Image Right Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#1D1D1F]">
                <img
                  src="/images/microsoft_partnership_hero.png"
                  alt="Microsoft Partnership"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
