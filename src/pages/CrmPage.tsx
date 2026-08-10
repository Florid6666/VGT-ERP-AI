import { Users, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, BarChart3, Clock, Zap } from 'lucide-react';

interface CrmPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const CrmPage: React.FC<CrmPageProps> = ({ onBackToHome, onOpenContact }) => {
  const crmFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6 text-[#0066CC]" />,
      title: 'AI Machine Learning Deal Forecasting',
      description: 'Predict exact deal closure probability based on historical customer touchpoints, contract terms, and stakeholder sentiment.',
      stat: '94% Accuracy',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#5E5CE6]" />,
      title: 'Automated Account Churn Prevention',
      description: 'Continuous monitoring flags account health degradation 60 days before contract renewal, prompting executive intervention.',
      stat: '3.2x Reduction',
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: 'Real-Time Meeting & Email Sentiment',
      description: 'NLP models analyze customer meeting transcripts and email exchanges to detect hidden objections and deal risks instantly.',
      stat: 'Real-time NLP',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#00C7BE]" />,
      title: 'Zero-Manual-Entry Subledger Sync',
      description: 'Phone calls, emails, and WhatsApp interactions automatically sync to subledgers in real time without rep manual data entry.',
      stat: 'Sub-second Sync',
    },
  ];

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
          <span className="text-sm font-medium text-slate-500">Executive CRM Platform</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-6 inline-flex items-center gap-2">
            <Users className="w-3.5 h-3.5" /> Standalone CRM Module
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-6">
            Autonomous Executive CRM &{' '}
            <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE] bg-clip-text text-transparent">
              AI Deal Intelligence
            </span>
          </h1>
          <p className="lead-text text-slate-600 font-normal max-w-3xl mx-auto">
            Traditional CRMs are static activity logs. VGT ERP AI turns customer touchpoints into automated revenue projections, sentiment alerts, and instant subledger synchronization.
          </p>
        </div>

        {/* Large Dashboard Preview Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 mb-16 overflow-hidden relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
            <img
              src="/images/crm_dashboard_mockup.png"
              alt="VGT ERP AI Autonomous CRM Platform"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Real-Time Sales Telemetry & Pipeline Copilot</span>
            </div>
          </div>
        </div>

        {/* Feature Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {crmFeatures.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-slate-200/60">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0066CC] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {item.stat}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed font-normal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subpage CTA Box */}
        <div className="bg-[#1D1D1F] text-white rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-bold text-[#2997FF]">
              <Sparkles className="w-4 h-4" />
              <span>ENTERPRISE PROVISIONING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Customer Intelligence?
            </h2>
            <p className="text-slate-300 text-lg">
              Deploy VGT Autonomous CRM as a standalone module or natively connected to your ERP.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0066CC] hover:bg-[#0071E3] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Request CRM Demo & Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
