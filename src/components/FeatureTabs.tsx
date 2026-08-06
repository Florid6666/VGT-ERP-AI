import React, { useState } from 'react';
import { CreditCard, Factory, Truck, Users, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface FeatureItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export const FeatureTabs: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const features: FeatureItem[] = [
    {
      id: 'billing',
      label: 'Autonomous Billing',
      icon: <CreditCard className="w-5 h-5" />,
      title: 'Zero-Human Intervention Multi-Subledger Billing',
      description: 'Automate high-volume enterprise invoicing with real-time tax calculation, currency hedging, and instantaneous ERP subledger synchronization.',
      image: '/images/erp_autonomous_invoicing_vgt.png',
      highlights: [
        'Automated 140+ currency conversion ledgers',
        'ISO & SOC2 audit-ready compliance tracking',
        'Sub-second dispute detection & resolution',
      ],
    },
    {
      id: 'plant',
      label: 'Plant Management',
      icon: <Factory className="w-5 h-5" />,
      title: 'Real-Time Industrial IoT Telemetry & Control',
      description: 'Connect manufacturing floors, automated robotics, and assembly lines directly to predictive AI models to maximize throughput.',
      image: '/images/erp_operations_dashboard.png',
      highlights: [
        '48-hour predictive equipment maintenance alerts',
        'Dynamic energy consumption optimization',
        'Automated inventory replenishment triggers',
      ],
    },
    {
      id: 'logistics',
      label: 'Predictive Logistics',
      icon: <Truck className="w-5 h-5" />,
      title: 'Autonomous Freight & Supply Chain Routing',
      description: 'Leverage weather data, traffic patterns, and port delays to dynamically re-route shipments and optimize warehouse stocking.',
      image: '/images/erp_ai_operations.png',
      highlights: [
        '32% average reduction in fleet fuel overhead',
        'Real-time GPS container temperature tracking',
        'Automated customs documentation generation',
      ],
    },
    {
      id: 'crm',
      label: 'Executive CRM',
      icon: <Users className="w-5 h-5" />,
      title: 'AI Machine Learning Deal & Churn Forecasting',
      description: 'Empower sales executives with exact ML conversion probabilities, automated pipeline risk detection, and automated rep activity coaching.',
      image: '/images/crm_dashboard_mockup.png',
      highlights: [
        '>90% accuracy on quarterly revenue projections',
        'Automated churn risk scoring for top enterprise accounts',
        'Seamless integration with Microsoft Dynamics 365',
      ],
    },
    {
      id: 'security',
      label: 'Multitenant Security',
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Zero-Trust Isolated Database Architecture',
      description: 'Ensure absolute data sovereignty with dedicated encryption keys per tenant, granular role-based access control, and continuous threat mitigation.',
      image: '/images/erp_custom_domains_vgt.png',
      highlights: [
        'BYOK (Bring Your Own Key) AES-256 encryption',
        'Strict row-level security & tenant isolation',
        'Real-time anomaly & breach detection',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('billing');
  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section id="services" className="w-full py-24 sm:py-32 relative overflow-hidden bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-6 inline-block">
            Enterprise Architecture
          </span>
          <h2 className="display-lg-text text-[#1D1D1F] mb-6">
            Built for High-Velocity Enterprises.
          </h2>
          <p className="lead-text text-slate-600 font-normal">
            Discover how VGT ERP AI unifies billing, manufacturing, logistics, CRM, and security into a single autonomous core.
          </p>
        </div>

        {/* Action Blue Pill Tabs Navigation */}
        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-6 mb-16 scrollbar-none">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === feature.id
                  ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-600/20 scale-105'
                  : 'bg-white border border-[#E0E0E0] text-slate-700 hover:text-[#1D1D1F] hover:bg-slate-50'
              }`}
            >
              {feature.icon}
              <span>{feature.label}</span>
            </button>
          ))}
        </div>

        {/* 24px Apple Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-10 sm:p-14 rounded-[24px] border border-slate-200/90 shadow-lg">
          {/* Left Feature Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 text-[#0066CC] text-xs font-mono font-bold">
              FEATURE CAPABILITY
            </div>
            <h3 className="display-md-text text-[#1D1D1F] leading-tight">
              {activeFeature.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              {activeFeature.description}
            </p>

            {/* Feature Highlights List */}
            <div className="space-y-3.5 pt-2">
              {activeFeature.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-base font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#0066CC] hover:bg-[#0071E3] rounded-full shadow-md hover:shadow-lg transition-all group"
              >
                <span>Deploy Feature Node</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
