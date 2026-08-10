import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PartnershipPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const PartnershipPage: React.FC<PartnershipPageProps> = ({ onBackToHome, onOpenContact }) => {
  const allianceFeatures = [
    {
      title: 'Azure OpenAI & Co-Sell Ready Marketplace',
      description: 'Natively listed on the Microsoft Commercial Marketplace with IP Co-Sell Ready designation. Purchase via Azure MACC spend commitment.',
    },
    {
      title: 'Dynamics 365 Business Central API Bridge',
      description: 'Bidirectional subsecond data synchronization with Dynamics 365. Keep your existing accounting and ERP ledgers intact while adding AI intelligence.',
    },
    {
      title: 'Power BI Telemetry & Direct Lake Integration',
      description: 'Stream real-time plant, logistics, and CRM telemetry directly into Power BI dashboards with zero data ETL lag.',
    },
    {
      title: 'SOC2 Type II & BYOK Encryption Security',
      description: 'Zero-trust tenant isolation with Bring Your Own Key (BYOK) AES-256 encryption hosted within your dedicated Azure tenant boundary.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1D1D1F] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2997FF] hover:text-[#0071E3] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-sm font-medium text-slate-400">Microsoft Strategic Partnership</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-bold text-[#2997FF] mb-6">
            <ShieldCheck className="w-4 h-4 text-[#2997FF]" />
            <span>STRATEGIC MICROSOFT CO-SELL ALLIANCE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Co-Engineered with <br />
            <span className="bg-gradient-to-r from-[#2997FF] via-[#5E5CE6] to-[#00C7BE] bg-clip-text text-transparent">
              Microsoft Azure & Dynamics 365
            </span>
          </h1>
          <p className="lead-text text-slate-300 font-normal max-w-3xl mx-auto">
            Deploy VGT ERP AI directly inside your Azure enterprise tenant. Bridge legacy Dynamics 365 systems with zero friction and enterprise-grade SLA.
          </p>
        </div>

        {/* Hero Image Banner */}
        <div className="rounded-3xl border border-white/15 bg-[#272729] p-6 sm:p-10 shadow-2xl mb-16 overflow-hidden">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/microsoft_partnership_hero.png"
              alt="Microsoft Dynamics 365 & VGT ERP AI Partnership"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Alliance Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {allianceFeatures.map((item, idx) => (
            <div key={idx} className="bg-[#272729] rounded-3xl p-8 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2997FF] shrink-0" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Callout Action Box */}
        <div className="bg-gradient-to-r from-blue-950 via-[#1D1D1F] to-indigo-950 rounded-3xl p-10 sm:p-14 border border-blue-500/30 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Deploy via Microsoft Azure Marketplace Today
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Leverage your existing Microsoft Azure consumption commitment (MACC) to license VGT ERP AI.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full bg-[#0066CC] hover:bg-[#0071E3] text-white font-semibold text-base inline-flex items-center gap-2 shadow-lg transition-all"
            >
              <span>Schedule Microsoft Architecture Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
