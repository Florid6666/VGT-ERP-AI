import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Factory, Zap, HeartPulse, Truck, ShoppingBag, Landmark, CheckCircle2 } from 'lucide-react';

interface IndustriesPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onBackToHome, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<string>('manufacturing');

  const industryDetails = [
    {
      id: 'manufacturing',
      name: 'Manufacturing & Robotics',
      icon: <Factory className="w-6 h-6 text-[#0066CC]" />,
      image: '/images/ind_manufacturing.png',
      stat: '+34% OEE',
      description: 'Autonomous assembly telemetry, predictive spares procurement, and robotic cell optimization.',
      highlights: [
        'Real-time IoT telemetry synchronization across 500+ assembly nodes',
        'Predictive spare parts reordering with sub-second supplier inventory checks',
        'ISO 9001 and IATF 16949 automated compliance audit logs',
      ],
    },
    {
      id: 'energy',
      name: 'Energy & Utilities',
      icon: <Zap className="w-6 h-6 text-[#5E5CE6]" />,
      image: '/images/ind_energy.png',
      stat: '-28% Load Variance',
      description: 'Smart grid metering synchronization, renewable load balancing, and asset longevity modeling.',
      highlights: [
        'Sub-second smart grid load balancing and peak demand shaving',
        'Predictive turbine and transformer failure alerts 72 hours in advance',
        'Automated carbon footprint and regulatory ESG compliance accounting',
      ],
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Pharma',
      icon: <HeartPulse className="w-6 h-6 text-emerald-600" />,
      image: '/images/ind_healthcare.png',
      stat: '100% FDA Track',
      description: 'HIPAA compliant cold-chain logistics telemetry, clinical trial supply chain, and ledger tracking.',
      highlights: [
        '21 CFR Part 11 and DSCSA drug traceability ledger compliance',
        'Continuous cold-chain temperature telemetry with automated breach alerts',
        'Zero-trust HIPAA compliant tenant database encryption',
      ],
    },
    {
      id: 'logistics',
      name: 'Global Freight & Port Logistics',
      icon: <Truck className="w-6 h-6 text-[#0066CC]" />,
      image: '/images/ind_logistics.png',
      stat: '0.4ms Sync',
      description: 'Multi-modal cargo routing, automated customs clearance, and container telemetry tracking.',
      highlights: [
        'Dynamic multi-modal route optimization considering weather and port delays',
        'Automated customs documentation generation and subledger sync',
        'Real-time fleet fuel overhead reduction by average 32%',
      ],
    },
    {
      id: 'retail',
      name: 'Omnichannel Retail & E-Com',
      icon: <ShoppingBag className="w-6 h-6 text-[#00C7BE]" />,
      image: '/images/ind_retail.png',
      stat: '99.9% Accuracy',
      description: 'Unified inventory subledgers, dynamic margin pricing AI, and automated vendor reordering.',
      highlights: [
        'Unified subledger inventory across 1,000+ brick-and-mortar and e-com nodes',
        'Dynamic price elasticity ML models optimizing profit margins in real time',
        'Automated vendor PO triggers avoiding out-of-stock events during peak spikes',
      ],
    },
    {
      id: 'finance',
      name: 'Banking & Enterprise Finance',
      icon: <Landmark className="w-6 h-6 text-[#0066CC]" />,
      image: '/images/ind_finance.png',
      stat: '$14B+/day',
      description: 'Multi-entity consolidation ledgers, real-time treasury position, and automated tax reporting.',
      highlights: [
        'Multi-entity consolidation ledgers across 140+ international currencies',
        'Real-time automated intercompany clearing and reconciliation',
        'Continuous ML anomaly detection flagging fraudulent ledger entries',
      ],
    },
  ];

  const current = industryDetails.find((i) => i.id === activeTab) || industryDetails[0];

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#1D1D1F] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066CC] hover:text-[#0071E3] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-medium text-slate-500">Industry Vertical Solutions</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-6 inline-block">
            Pre-Packaged Vertical Modules
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-6">
            Industrial AI Tailored for{' '}
            <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE] bg-clip-text text-transparent">
              Complex Verticals
            </span>
          </h1>
          <p className="lead-text text-slate-600 font-normal max-w-3xl mx-auto">
            Discover how VGT ERP AI adapts pre-built telemetry, compliance modules, and autonomous models to your specific sector.
          </p>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
          {industryDetails.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeTab === ind.id
                  ? 'bg-[#1D1D1F] text-white shadow-xl scale-[1.03]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {ind.icon}
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Industry Detail Card Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-8 sm:p-14 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl h-80 sm:h-96 w-full">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono font-bold text-[#0066CC] shadow-md">
                {current.stat}
              </div>
            </div>

            {/* Description & Highlights Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-extrabold text-[#1D1D1F]">{current.name}</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-normal">{current.description}</p>
              
              <div className="space-y-3 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Industrial Capabilities</h4>
                {current.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-3.5 rounded-full bg-[#0066CC] hover:bg-[#0071E3] text-white font-semibold text-sm inline-flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Request {current.name} Spec Sheet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
