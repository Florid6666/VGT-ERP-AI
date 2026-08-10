import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Bot,
  Brain,
  Zap,
  TrendingUp,
  BarChart3,
  Users,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Layers,
  Building2,
  Check,
} from 'lucide-react';

interface CrmPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const CrmPage: React.FC<CrmPageProps> = ({ onBackToHome, onOpenContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Why Choose VGT AI CRM
  const whyChooseItems = [
    {
      title: 'AI-Powered Customer Intelligence',
      description: 'Automatically analyze customer behavior, buying patterns, and engagement history in real time.',
      icon: <Brain className="w-6 h-6 text-[#0066CC]" />,
    },
    {
      title: 'Complete Sales Automation',
      description: 'Manage leads, opportunities, quotations, follow-ups, and contracts seamlessly from one platform.',
      icon: <Zap className="w-6 h-6 text-[#5E5CE6]" />,
    },
    {
      title: 'Intelligent Lead Scoring',
      description: 'AI identifies your highest-converting prospects based on historical sales data and engagement metrics.',
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Real-Time Business Insights',
      description: 'Monitor KPIs, revenue pipelines, sales performance, and customer activity through interactive dashboards.',
      icon: <BarChart3 className="w-6 h-6 text-[#00C7BE]" />,
    },
    {
      title: 'Cloud-Based CRM',
      description: 'Access your CRM securely from anywhere using desktop, tablet, or mobile devices with 99.99% uptime.',
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
    },
  ];

  // Complete CRM Feature Modules
  const featureModules = [
    {
      title: 'Lead Management',
      subtitle: 'Generate, assign, qualify, and nurture leads automatically.',
      tags: [
        'Lead Capture',
        'Lead Assignment',
        'AI Lead Scoring',
        'Duplicate Detection',
        'Lead Tracking',
        'Lead Qualification',
        'Follow-up Reminders',
        'Lead Source Analytics',
        'Campaign Attribution',
        'Web Form Integration',
      ],
    },
    {
      title: 'Contact Management',
      subtitle: 'Maintain complete customer profiles in one central hub.',
      tags: [
        'Customer Database',
        'Contact History',
        'Communication Timeline',
        'Notes & Activities',
        'File Management',
        'Email Tracking',
        'Social Media Links',
        'Multiple Contacts',
        'Customer Segmentation',
      ],
    },
    {
      title: 'Opportunity Management',
      subtitle: 'Track every sales opportunity from inquiry to closed deal.',
      tags: [
        'Sales Pipeline',
        'Opportunity Tracking',
        'Probability Forecasting',
        'AI Deal Predictions',
        'Quotation Management',
        'Contract Management',
        'Revenue Forecasting',
        'Competitor Analysis',
      ],
    },
    {
      title: 'Sales Automation',
      subtitle: 'Automate repetitive sales tasks and boost rep efficiency.',
      tags: [
        'Email Sequences',
        'Task Automation',
        'Meeting Scheduling',
        'Proposal Generation',
        'Quote Creation',
        'Sales Follow-up',
        'Customer Notifications',
        'Workflow Automation',
      ],
    },
    {
      title: 'AI Sales Assistant',
      subtitle: 'Your intelligent 24/7 sales companion and deal advisor.',
      tags: [
        'Suggest Next Best Action',
        'Predict Closing Probability',
        'Customer Sentiment Analysis',
        'Upselling Recommendations',
        'Cross-Selling Opportunities',
        'AI Email Drafting',
        'AI Meeting Summaries',
        'Conversation Intelligence',
      ],
    },
    {
      title: 'Customer Service Management',
      subtitle: 'Deliver exceptional customer support across every channel.',
      tags: [
        'Ticket Management',
        'Case Management',
        'Knowledge Base',
        'SLA Tracking',
        'Customer Feedback',
        'Live Chat',
        'AI Chatbot',
        'Omnichannel Support',
      ],
    },
    {
      title: 'Marketing Automation',
      subtitle: 'Create targeted, multi-channel campaigns that convert.',
      tags: [
        'Email Marketing',
        'SMS Campaigns',
        'WhatsApp Integration',
        'Landing Pages',
        'Marketing Automation',
        'Campaign Tracking',
        'ROI Analytics',
        'Customer Journey Mapping',
      ],
    },
  ];

  // AI Differentiators
  const aiDifferentiators = [
    {
      title: 'AI Executive Dashboard',
      description: 'Ask natural language questions like:',
      bullets: [
        'Which deals are likely to close this month?',
        'Which sales representative has the highest conversion rate?',
        'Which customers haven\'t been contacted recently?',
        'Which accounts are at risk of churn?',
        'What is my projected quarterly revenue?',
      ],
    },
    {
      title: 'AI Forecasting & Predictive Analytics',
      description: 'Accurately predict key business metrics:',
      bullets: [
        'Quarterly & Annual Revenue',
        'Sales Representative Target Attainment',
        'Customer Lifetime Value (CLV)',
        'Customer Churn Probability',
        'Contract Renewal Opportunities',
      ],
    },
    {
      title: 'AI Customer Insights & Nudges',
      description: 'Automatically uncover actionable customer intelligence:',
      bullets: [
        'Buying behavior & purchase patterns',
        'Preferred communication channels',
        'High-value target accounts',
        'At-risk accounts requiring intervention',
        'Contextual upsell & cross-sell opportunities',
      ],
    },
    {
      title: 'AI Communication Assistant',
      description: 'Streamline rep outbound activities instantly:',
      bullets: [
        'Generate personalized sales emails',
        'Summarize client call transcripts',
        'Automated follow-up reminders',
        'Instant proposal & quote drafting',
        'AI-recommended customer responses',
      ],
    },
  ];

  // Comparison Matrix: Traditional vs VGT AI CRM
  const comparisonData = [
    { traditional: 'Stores static customer information', vgt: 'Learns continuously from customer interactions' },
    { traditional: 'Manual lead qualification', vgt: 'AI-assisted instant lead scoring' },
    { traditional: 'Manual follow-up tracking', vgt: 'Automated follow-up workflows & nudges' },
    { traditional: 'Basic static dashboards', vgt: 'AI-powered predictive analytics' },
    { traditional: 'Manual sales forecasting', vgt: 'Predictive machine learning sales forecasting' },
    { traditional: 'Limited basic automation', vgt: 'Intelligent workflow automation across all teams' },
    { traditional: 'Reactive customer management', vgt: 'Proactive AI recommendations & risk alerts' },
    { traditional: 'Static reports & spreadsheets', vgt: 'Conversational AI reporting in seconds' },
    { traditional: 'Time-consuming manual data entry', vgt: 'AI-assisted automated data capture' },
    { traditional: 'Basic contact lists', vgt: '360° deep customer intelligence' },
  ];

  // Integrations List
  const integrations = [
    'Microsoft 365',
    'Google Workspace',
    'Microsoft Teams',
    'Outlook',
    'Gmail',
    'ERP Systems',
    'Accounting Software',
    'Payment Gateways',
    'HR Systems',
    'LinkedIn',
    'WhatsApp Business',
    'SMS Platforms',
    'Zoom',
    'Slack',
    'Power BI',
    'API Connectors',
  ];

  // Industries Served
  const industriesList = [
    'Manufacturing',
    'Staffing & Recruitment',
    'Information Technology',
    'Healthcare & Life Sciences',
    'Financial Services',
    'Insurance',
    'Logistics & Freight',
    'Construction',
    'Retail & E-Commerce',
    'Distribution',
    'Professional Services',
    'Education',
  ];

  // Benefits
  const benefitsList = [
    'Increase Sales Productivity',
    'Improve Customer Retention',
    'Shorten Sales Cycles',
    'Enhance Team Collaboration',
    'Automate Repetitive Tasks',
    'Improve Forecast Accuracy',
    'Increase Customer Satisfaction',
    'Generate Better Business Insights',
    'Scale Business Operations',
    'Make Faster Decisions',
  ];

  // FAQs
  const faqs = [
    {
      q: 'Is VGT AI CRM suitable for small and medium businesses?',
      a: 'Yes. VGT AI CRM is built for startups, SMEs, and large enterprises with flexible deployment options and modular pricing that grows with your business.',
    },
    {
      q: 'Can VGT AI CRM integrate with our existing ERP software?',
      a: 'Yes. It seamlessly integrates with legacy ERP systems, Microsoft Dynamics 365, accounting packages, HR tools, and custom databases through secure APIs and pre-built connectors.',
    },
    {
      q: 'Does VGT AI CRM include built-in artificial intelligence capabilities?',
      a: 'Yes. AI is native to the platform — including predictive lead scoring, automated sales forecasting, intelligent workflow automation, customer sentiment analysis, and executive conversational reporting.',
    },
    {
      q: 'Is VGT AI CRM cloud-based and secure?',
      a: 'Yes. VGT AI CRM supports enterprise-grade cloud deployment (SOC2 & ISO-27001 compliant) and can also be configured for private cloud or hybrid enterprise environments as required.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#1D1D1F] pt-24 pb-20 font-sans selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumb Header */}
        <div className="mb-10 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0066CC] hover:text-[#0071E3] bg-blue-50 px-4 py-2 rounded-full border border-blue-200/80 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home Overview
          </button>

          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            vgt-ai-crm://enterprise.suite
          </span>
        </div>

        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#0066CC]/10 border border-[#0066CC]/25 text-[#0066CC] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            <span>INTELLIGENT CUSTOMER RELATIONSHIP MANAGEMENT</span>
          </div>

          <h1 className="display-lg-text text-[#1D1D1F] font-extrabold tracking-tight mb-6 leading-tight">
            VGT AI CRM — Sell Smarter, Close Faster &{' '}
            <span className="bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE] bg-clip-text text-transparent">
              Accelerate Growth
            </span>
          </h1>

          <p className="lead-text text-slate-600 font-normal max-w-3xl mx-auto mb-10">
            Your CRM should do more than store customer information. VGT AI CRM acts as an intelligent sales assistant that helps your team generate leads, manage relationships, automate workflows, and close deals faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#0066CC] hover:bg-[#0071E3] text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Request a Free Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-[#1D1D1F] font-semibold text-base shadow-xs transition-all duration-300"
            >
              <span>Schedule a CRM Consultation</span>
            </button>
          </div>
        </div>

        {/* 5K DASHBOARD PREVIEW */}
        <div className="bg-white rounded-[28px] border border-slate-200/90 shadow-2xl p-4 sm:p-8 mb-20 overflow-hidden relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
            <img
              src="/images/crm_dashboard_mockup.png"
              alt="VGT AI CRM Executive Dashboard"
              className="w-full h-auto object-contain block"
            />
            <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE AI SALES COPILOT & PIPELINE TELEMETRY</span>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE VGT AI CRM (5 PILLARS) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-4 inline-block">
              CORE ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
              Why Choose VGT AI CRM?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-8 border border-slate-200/90 shadow-xs hover:border-[#0066CC] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 w-fit mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPLETE CRM FEATURE MODULES (7 CARDS) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5E5CE6] bg-purple-50 px-4 py-1.5 rounded-full border border-purple-200 mb-4 inline-block">
              END-TO-END CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
              Complete CRM Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-8 border border-slate-200/90 shadow-xs hover:border-[#5E5CE6] hover:shadow-lg transition-all duration-300 space-y-6"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-[#5E5CE6] text-xs font-mono font-bold mb-3">
                    FEATURE SUITE 0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2">{mod.title}</h3>
                  <p className="text-sm text-slate-600 font-normal">{mod.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {mod.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI DIFFERENTIATORS */}
        <div className="mb-24 bg-[#1D1D1F] text-white rounded-[28px] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-500/20 blur-[150px] pointer-events-none" />

          <div className="relative z-10 space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2997FF] bg-blue-950/80 px-4 py-1.5 rounded-full border border-blue-500/40 mb-4 inline-block">
                AI ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                AI Features That Make VGT CRM Different
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiDifferentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="bg-[#272729] rounded-2xl p-8 border border-white/15 space-y-4 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-950 border border-blue-500/40 text-[#2997FF]">
                      <Bot className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{diff.title}</h3>
                  </div>

                  <p className="text-sm text-slate-300 font-normal">{diff.description}</p>

                  <ul className="space-y-2.5 pt-2">
                    {diff.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE: TRADITIONAL VS VGT AI CRM */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-4 inline-block">
              HEAD-TO-HEAD COMPARISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
              Traditional CRM vs VGT AI CRM
            </h2>
          </div>

          <div className="bg-white rounded-[24px] border border-slate-200/90 shadow-lg overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-900 text-white p-5 text-sm font-bold tracking-wide">
              <div className="col-span-6 border-r border-slate-800 pr-4">TRADITIONAL CRM</div>
              <div className="col-span-6 pl-4 text-[#2997FF] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>VGT AI CRM (NEXT-GEN)</span>
              </div>
            </div>

            <div className="divide-y divide-slate-200">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-5 text-xs sm:text-sm hover:bg-slate-50 transition-colors">
                  <div className="col-span-6 text-slate-500 pr-4 border-r border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="col-span-6 text-[#1D1D1F] font-semibold pl-4 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{row.vgt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INTEGRATIONS & INDUSTRIES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Integrations */}
          <div className="lg:col-span-6 bg-white rounded-[24px] p-8 border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-50 text-[#0066CC]">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1D1D1F]">Ecosystem Integrations</h3>
                <p className="text-xs text-slate-500 font-normal">Seamless API connectors across your tech stack</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {integrations.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="lg:col-span-6 bg-white rounded-[24px] p-8 border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-50 text-[#5E5CE6]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1D1D1F]">Industries We Serve</h3>
                <p className="text-xs text-slate-500 font-normal">Pre-packaged modules tailored to your sector</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {industriesList.map((ind, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BENEFITS LIST (10 CARDS) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 mb-4 inline-block">
              BUSINESS OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
              Benefits of VGT AI CRM
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {benefitsList.map((ben, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 text-center space-y-3 hover:border-emerald-500 transition-all shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="block text-xs font-bold text-[#1D1D1F]">{ben}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-4 inline-block">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-[#1D1D1F]"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0066CC] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#0066CC]' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-base leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA BANNER */}
        <div className="bg-[#1D1D1F] text-white rounded-[28px] p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-bold text-[#2997FF]">
              <Sparkles className="w-4 h-4" />
              <span>START YOUR AI CRM JOURNEY TODAY</span>
            </div>

            <h2 className="display-lg-text text-white font-extrabold tracking-tight">
              Ready to Grow Your Business with AI?
            </h2>

            <p className="lead-text text-slate-300 font-normal">
              Transform your sales, marketing, and customer service with VGT AI CRM. Empower your teams with intelligent automation, actionable insights, and a 360° view of every customer relationship.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#0066CC] hover:bg-[#0071E3] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
              >
                <span>Book a Free CRM Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base transition-all"
              >
                <span>Request a Personalized Consultation</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
