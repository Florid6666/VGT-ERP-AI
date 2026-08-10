import { Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CrmShowcaseSection: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const crmHighlights = [
    {
      title: 'AI Machine Learning Deal Conversion',
      description: 'Predict exact deal closure probability based on historical customer touchpoints, contract terms, and stakeholder sentiment.',
      metric: '94% Prediction Accuracy',
    },
    {
      title: 'Automated Account Churn Prevention',
      description: 'Continuous monitoring flags account health degradation 60 days before contract renewal, prompting executive intervention.',
      metric: '3.2x Churn Reduction',
    },
    {
      title: 'Dynamics 365 & Salesforce Native Sync',
      description: 'Zero-manual data entry — phone calls, emails, and WhatsApp interactions automatically sync to subledgers in real time.',
      metric: 'Sub-second Sync Time',
    },
  ];

  return (
    <section id="crm" className="w-full py-24 sm:py-32 bg-[#FAFAFC] relative overflow-hidden border-b border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-6 inline-flex items-center gap-2">
            <Users className="w-3.5 h-3.5" /> Executive CRM Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-6">
            Turn customer data into{' '}
            <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE] bg-clip-text text-transparent">
              predictive revenue
            </span>
          </h2>
          <p className="lead-text text-slate-600 font-normal">
            Legacy CRMs log activity. VGT ERP AI coaches sales teams, forecasts quarter-end figures, and resolves pipeline bottlenecks automatically.
          </p>
        </div>

        {/* Hero Visual & Feature Grid Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Showcase (7 cols) */}
            <div className="lg:col-span-7 relative group">
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-900">
                <img
                  src="/images/crm_dashboard_mockup.png"
                  alt="VGT Autonomous CRM Dashboard"
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live AI CRM Copilot Active</span>
              </div>
            </div>

            {/* Right Pillars List (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {crmHighlights.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FAFAFC] border border-slate-200/80 hover:border-[#0066CC]/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#1D1D1F] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-block text-xs font-mono font-bold text-[#0066CC] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {item.metric}
                  </span>
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={onOpenTrial}
                  className="w-full py-3.5 px-6 rounded-full bg-[#0066CC] hover:bg-[#0071E3] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Request Live CRM Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
