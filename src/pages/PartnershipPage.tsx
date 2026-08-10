import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Cloud,
  Briefcase,
  Zap,
  TrendingUp,
  Settings,
  HelpCircle,
  ChevronDown,
  Layers,
  Sparkles,
  Bot,
  FileText,
  Workflow,
  Headphones,
  FileSpreadsheet,
  Check,
  Award,
  Factory,
  Building2,
  Lock,
  Globe,
  RefreshCw,
  Car,
  Rocket,
  Utensils,
  Pill,
  Stethoscope,
  Package,
  Store,
  Truck,
  ShoppingCart,
  HardHat,
  Mail,
  Send,
  Folder,
  Table,
  Presentation,
  ClipboardList,
  Layout,
  Shield,
  Smartphone,
  MessageCircle,
  LineChart,
  Activity,
  Mic,
  BrainCircuit,
  FileSearch,
  CheckSquare
} from 'lucide-react';

interface PartnershipPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const PartnershipPage: React.FC<PartnershipPageProps> = ({ onBackToHome, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'finance' | 'supply' | 'central' | 'sales' | 'customer' | 'field'>('finance');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whyChooseVgt = [
    {
      title: 'Certified Microsoft Expertise',
      description: 'Delivering industry best practices for Microsoft business applications and enterprise digital transformation.',
      icon: Award,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'End-to-End Implementation',
      description: 'From initial strategy and process planning to deployment, user adoption training, and 24/7 hypercare support.',
      icon: Layers,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Manufacturing & Distribution Specialists',
      description: 'Industry-tailored solutions for manufacturers, wholesale distributors, logistics, retail, and professional services.',
      icon: Factory,
      color: 'from-cyan-600 to-teal-600'
    },
    {
      title: 'AI-Driven Business Transformation',
      description: 'Combine Microsoft cloud technologies with AI automation, predictive analytics, and intelligent executive insights.',
      icon: Sparkles,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Cloud Migration Experts',
      description: 'Seamlessly transition from legacy on-premise ERP systems to Microsoft modern cloud platform with zero data loss.',
      icon: Cloud,
      color: 'from-blue-700 to-indigo-600'
    }
  ];

  const d365Services = {
    finance: {
      name: 'Dynamics 365 Finance',
      subtitle: 'Gain real-time financial visibility and automate financial operations.',
      badge: 'FINANCIAL INTELLIGENCE',
      icon: TrendingUp,
      features: [
        'Financial Management',
        'General Ledger',
        'Budget Planning',
        'Cash Flow Forecasting',
        'Accounts Payable',
        'Accounts Receivable',
        'Fixed Assets',
        'Financial Reporting',
        'Multi-Currency',
        'Global Compliance'
      ]
    },
    supply: {
      name: 'Dynamics 365 Supply Chain Management',
      subtitle: 'Optimize your manufacturing, procurement, and logistics operations.',
      badge: 'OPERATIONS & LOGISTICS',
      icon: Factory,
      features: [
        'Inventory Management',
        'Warehouse Management',
        'Procurement',
        'Production Planning',
        'Material Requirements Planning (MRP)',
        'Demand Forecasting',
        'Vendor Management',
        'Quality Management',
        'Shop Floor Control'
      ]
    },
    central: {
      name: 'Dynamics 365 Business Central',
      subtitle: 'The complete unified ERP solution for small and medium-sized businesses.',
      badge: 'SMB ALL-IN-ONE ERP',
      icon: Building2,
      features: [
        'Finance',
        'Purchasing',
        'Inventory',
        'Sales',
        'CRM',
        'Warehouse',
        'Manufacturing',
        'Service Management',
        'Project Management',
        'Reporting'
      ]
    },
    sales: {
      name: 'Dynamics 365 Sales',
      subtitle: 'Increase revenue with intelligent sales automation and predictive AI.',
      badge: 'REVENUE & GROWTH',
      icon: Zap,
      features: [
        'Opportunity Management',
        'Pipeline Management',
        'AI Sales Insights',
        'Lead Scoring',
        'Customer Relationship Management',
        'Quote Management',
        'Sales Forecasting'
      ]
    },
    customer: {
      name: 'Dynamics 365 Customer Service',
      subtitle: 'Deliver exceptional, personalized omnichannel customer experiences.',
      badge: 'CUSTOMER EXPERIENCE',
      icon: Headphones,
      features: [
        'Omnichannel Support',
        'Case Management',
        'AI Copilot Assistance',
        'Knowledge Base',
        'SLA Management',
        'Customer Insights'
      ]
    },
    field: {
      name: 'Dynamics 365 Field Service',
      subtitle: 'Manage field technicians and service operations efficiently in real time.',
      badge: 'SERVICE OPERATIONS',
      icon: Settings,
      features: [
        'Work Orders',
        'Scheduling',
        'Asset Management',
        'Preventive Maintenance',
        'Mobile Workforce',
        'IoT Integration'
      ]
    }
  };

  const m365Apps = [
    { name: 'Microsoft Teams', cat: 'Collaboration', icon: MessageCircle, color: 'bg-indigo-600 text-white' },
    { name: 'Outlook', cat: 'Email & Calendar', icon: Mail, color: 'bg-blue-600 text-white' },
    { name: 'Exchange Online', cat: 'Messaging', icon: Send, color: 'bg-cyan-600 text-white' },
    { name: 'SharePoint Online', cat: 'Content & Intranet', icon: Folder, color: 'bg-teal-600 text-white' },
    { name: 'OneDrive', cat: 'Cloud Storage', icon: Cloud, color: 'bg-sky-500 text-white' },
    { name: 'Word', cat: 'Document Creation', icon: FileText, color: 'bg-blue-700 text-white' },
    { name: 'Excel', cat: 'Spreadsheets & Data', icon: Table, color: 'bg-emerald-600 text-white' },
    { name: 'PowerPoint', cat: 'Presentations', icon: Presentation, color: 'bg-orange-600 text-white' },
    { name: 'Microsoft Forms', cat: 'Surveys & Polls', icon: ClipboardList, color: 'bg-teal-500 text-white' },
    { name: 'Microsoft Planner', cat: 'Task Management', icon: CheckSquare, color: 'bg-green-600 text-white' },
    { name: 'Power Automate', cat: 'Workflow Automation', icon: Workflow, color: 'bg-blue-500 text-white' },
    { name: 'Power Apps', cat: 'Low-Code Apps', icon: Layout, color: 'bg-purple-600 text-white' },
    { name: 'Microsoft Copilot', cat: 'Generative AI', icon: Sparkles, color: 'bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white' },
    { name: 'Microsoft Defender', cat: 'Cloud Security', icon: Shield, color: 'bg-slate-800 text-white' },
    { name: 'Microsoft Intune', cat: 'Endpoint Management', icon: Smartphone, color: 'bg-indigo-700 text-white' }
  ];

  const aiServices = [
    { name: 'AI Business Automation', icon: Workflow, desc: 'Streamline repetitive administrative workflows.', image: '/images/ai_automation_thumb.png' },
    { name: 'AI Chatbots', icon: Bot, desc: '24/7 intelligent conversational assistants.', image: '/images/microsoft_365_ai_suite.png' },
    { name: 'AI Document Processing', icon: FileSearch, desc: 'Extract data from invoices and contracts instantly.', image: '/images/ai_automation_thumb.png' },
    { name: 'AI Workflow Automation', icon: Cpu, desc: 'Automate cross-platform business processes.', image: '/images/ai_analytics_thumb.png' },
    { name: 'AI Predictive Analytics', icon: LineChart, desc: 'Forecast demand, cash flow, and market trends.', image: '/images/ai_analytics_thumb.png' },
    { name: 'AI Reporting', icon: FileSpreadsheet, desc: 'Generate executive summary reports in seconds.', image: '/images/ai_analytics_thumb.png' },
    { name: 'AI Executive Dashboard', icon: Activity, desc: 'Real-time holistic business KPI dashboards.', image: '/images/microsoft_365_ai_suite.png' },
    { name: 'AI Customer Support', icon: Headphones, desc: 'Intelligent ticket routing and copilot answers.', image: '/images/microsoft_365_ai_suite.png' },
    { name: 'AI Voice Agents', icon: Mic, desc: 'Voice-based customer interaction nodes.', image: '/images/ai_automation_thumb.png' },
    { name: 'AI ERP Solutions', icon: BrainCircuit, desc: 'Deep learning integrated into core ledger systems.', image: '/images/ai_analytics_thumb.png' }
  ];

  const implementationServices = [
    { title: 'Consulting', desc: 'Business process analysis and digital transformation planning tailored to your growth objectives.' },
    { title: 'ERP Assessment', desc: 'Evaluate your current ERP system infrastructure and build a clear risk-mitigated migration roadmap.' },
    { title: 'Implementation', desc: 'End-to-end Dynamics 365 deployment using industry-proven agile methodologies.' },
    { title: 'Customization', desc: 'Tailor Dynamics 365 modules, data schemas, and user interfaces strictly to your unique business processes.' },
    {
      title: 'Integration',
      desc: 'Connect Dynamics 365 with Microsoft 365, Power BI, Azure, Third-party ERPs, CRM platforms, HR, Payroll, E-commerce, and Banking systems.'
    },
    {
      title: 'Data Migration',
      desc: 'Secure data extraction, transformation, and validation from legacy systems including Dynamics AX, GP, NAV, SAP, Oracle, NetSuite, Sage, QuickBooks, and Custom ERPs.'
    },
    { title: 'User Training', desc: 'Role-based hands-on training for system administrators, finance teams, operations, sales force, warehouse staff, and executives.' },
    { title: 'Managed Support', desc: '24/7 proactive monitoring, continuous optimization, quarterly upgrades, and dedicated technical support.' }
  ];

  const legacySystems = [
    'Microsoft Dynamics AX',
    'Microsoft Dynamics GP',
    'Microsoft Dynamics NAV',
    'SAP Enterprise',
    'Oracle NetSuite',
    'Sage ERP',
    'QuickBooks Desktop & Online',
    'Custom Legacy ERP Solutions'
  ];

  const comparisonData = [
    { feature: 'Architecture & Deployment', traditional: 'On-premise legacy systems', dynamics: 'Cloud-first, scalable global platform' },
    { feature: 'Scalability', traditional: 'Limited hardware expansion', dynamics: 'Instant elastic cloud scalability' },
    { feature: 'Reporting & Analytics', traditional: 'Manual batch reporting', dynamics: 'Real-time interactive Power BI dashboards' },
    { feature: 'AI & Machine Learning', traditional: 'No native AI capabilities', dynamics: 'Built-in AI Copilot & predictive insights' },
    { feature: 'Ecosystem Integration', traditional: 'Siloed separate applications', dynamics: 'Unified Microsoft 365 & Azure ecosystem' },
    { feature: 'Maintenance & Upgrades', traditional: 'Expensive periodic upgrades', dynamics: 'Automatic seamless cloud updates' },
    { feature: 'Third-party Connectivity', traditional: 'Complex custom API integrations', dynamics: 'Native Microsoft connectors & Power Platform' }
  ];

  const industriesList = [
    { name: 'Manufacturing', icon: Factory, image: '/images/ind_manufacturing.png' },
    { name: 'Automotive', icon: Car, image: '/images/ind_manufacturing.png' },
    { name: 'Aerospace', icon: Rocket, image: '/images/ind_energy.png' },
    { name: 'Food & Beverage', icon: Utensils, image: '/images/ind_retail.png' },
    { name: 'Pharmaceutical', icon: Pill, image: '/images/ind_healthcare.png' },
    { name: 'Medical Devices', icon: Stethoscope, image: '/images/ind_healthcare.png' },
    { name: 'Distribution', icon: Package, image: '/images/ind_logistics.png' },
    { name: 'Wholesale', icon: Store, image: '/images/ind_retail.png' },
    { name: 'Logistics', icon: Truck, image: '/images/ind_logistics.png' },
    { name: 'Retail', icon: ShoppingCart, image: '/images/ind_retail.png' },
    { name: 'Professional Services', icon: Briefcase, image: '/images/ind_finance.png' },
    { name: 'Construction', icon: HardHat, image: '/images/ind_energy.png' }
  ];

  const faqs = [
    {
      q: 'How long does a Dynamics 365 implementation take?',
      a: 'Typical implementation projects range from 3 to 12 months depending on organization size, complexity, custom requirements, and data migration scope. Our structured methodology ensures predictable timelines and budget adherence.'
    },
    {
      q: 'Can you migrate from Microsoft Dynamics AX / GP / NAV?',
      a: 'Yes! VGT specializes in assessing and migrating legacy Dynamics AX, GP, and NAV environments to supported Microsoft cloud platforms (Dynamics 365 Finance & Supply Chain or Business Central) with full data preservation and upgraded AI capabilities.'
    },
    {
      q: 'Can Dynamics 365 integrate seamlessly with Microsoft 365?',
      a: 'Yes. Dynamics 365 natively integrates with Microsoft 365 applications including Teams, Outlook, Excel, SharePoint, and Power BI. Users can generate quotes, process customer requests, and analyze financial data directly inside Outlook or Teams.'
    },
    {
      q: 'Do you provide custom AI solutions with Microsoft technologies?',
      a: 'Yes. VGT provides custom AI-powered automation, predictive analytics, intelligent chatbots, and document processing solutions that complement Microsoft Copilot and Azure OpenAI to drive competitive edge.'
    }
  ];

  const seoKeywords = [
    'Microsoft Dynamics 365 Partner',
    'Dynamics 365 Implementation',
    'Microsoft Business Central Partner',
    'Dynamics 365 Finance',
    'Dynamics 365 Supply Chain',
    'Microsoft 365 Services',
    'ERP Implementation',
    'Dynamics AX Migration',
    'Microsoft Copilot Consulting',
    'AI ERP Solutions',
    'Manufacturing ERP',
    'Business Central Implementation',
    'Microsoft ERP Partner',
    'ERP Consulting',
    'Digital Transformation'
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16 pb-20 selection:bg-[#0066CC] selection:text-white">
      
      {/* 100% Edge-to-Edge Viewport Hero Section */}
      <section className="relative w-full bg-slate-950 overflow-hidden border-b border-slate-800 text-white min-h-[500px] flex items-center mb-16">
        {/* Background Image Layer Spreading Edge-to-Edge Across Entire Screen */}
        <div
          className="absolute inset-0 bg-cover bg-[#07090E] bg-[center_right] bg-no-repeat"
          style={{ backgroundImage: `url('/images/ms_dynamics_hero_bg.jpg')` }}
        />

        {/* Darkish Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/40 md:to-slate-950/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/60 z-10" />

        {/* Content Container aligned with site grid */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
          
          {/* Top Breadcrumb Navigation inside Hero */}
          <div className="mb-6 flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Overview
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-sm font-medium text-slate-400">Microsoft Dynamics 365 & Microsoft 365 Solutions</span>
          </div>

          <div className="max-w-3xl space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/90 border border-blue-400/40 text-xs font-bold text-white shadow-lg backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span className="tracking-widest uppercase">MICROSOFT DYNAMICS 365 & MICROSOFT 365 SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
              Accelerate Your Digital Transformation with{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Venus Global Technology
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl font-bold text-cyan-200 tracking-wide">
              Transform Your Business with Microsoft Business Applications & AI
            </p>

            {/* Primary Action Hero Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-4 rounded-full bg-[#0066CC] hover:bg-[#0052A3] active:scale-[0.98] text-white font-bold text-base inline-flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all border border-blue-400/30 shrink-0"
              >
                <span>Schedule a Free Microsoft Business Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onOpenContact}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base inline-flex items-center justify-center gap-2 backdrop-blur-md shadow-lg transition-all shrink-0"
              >
                <span>Talk to a Microsoft Expert</span>
              </button>
            </div>

            {/* Capability Badges Strip */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-start gap-3 text-xs font-semibold text-slate-300">
              <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Dynamics 365 Finance & Supply Chain
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Business Central & Sales
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Microsoft 365 & Copilot AI
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Azure & Power Platform
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Why Choose Venus Global Technology Section */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Choose Venus Global Technology?
            </h2>
            <p className="text-slate-600 text-base">
              Proven expertise, deep domain knowledge, and relentless commitment to operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseVgt.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-[#0066CC]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} p-3 flex items-center justify-center text-white shadow-md`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0066CC]">
                    <CheckCircle2 className="w-4 h-4" /> VGT Enterprise Guarantee
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Microsoft Dynamics 365 Services Interactive Tab Section */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0066CC]">
              <Layers className="w-4 h-4" />
              <span>CORE DYNAMICS 365 PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
              Microsoft Dynamics 365 Services
            </h2>
            <p className="text-slate-600 text-base">
              Comprehensive cloud ERP & CRM modules tailored to power every department across your business.
            </p>
          </div>

          {/* Tab Selection Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl bg-slate-100 border border-slate-200 max-w-5xl mx-auto">
            {(Object.keys(d365Services) as Array<keyof typeof d365Services>).map((key) => {
              const serv = d365Services[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0066CC] text-white shadow-md scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <serv.icon className="w-4 h-4" />
                  <span>{serv.name.replace('Dynamics 365 ', '')}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Service Display Card */}
          {(() => {
            const current = d365Services[activeTab];
            const IconComponent = current.icon;
            return (
              <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC]">
                      {current.badge}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 flex items-center gap-3">
                      <IconComponent className="w-8 h-8 text-[#0066CC]" />
                      {current.name}
                    </h3>
                    <p className="text-slate-600 text-lg">{current.subtitle}</p>
                  </div>
                  <button
                    onClick={onOpenContact}
                    className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm inline-flex items-center gap-2 border border-slate-300 self-start md:self-auto shrink-0 shadow-sm transition-all"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-4 h-4 text-[#0066CC]" />
                  </button>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
                    Key Features & Functional Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {current.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-center gap-3 hover:border-[#0066CC]/40 shadow-xs transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0066CC]" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Microsoft 365 Solutions Section */}
        <div className="mb-24 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
                <Globe className="w-4 h-4" />
                <span>WORKPLACE PRODUCTIVITY & SECURITY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Microsoft 365 Solutions
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Empower your workforce with secure collaboration, cloud messaging, endpoint security, and AI productivity tools.
              </p>
              <p className="text-slate-600 text-base">
                VGT configures, secures, and optimizes your entire Microsoft 365 stack to seamlessly work alongside Dynamics 365 and Power Platform.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 rounded-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold text-sm inline-flex items-center gap-2 shadow-md"
                >
                  <span>Explore Microsoft 365 Licensing & Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-3 shadow-xl">
                <img
                  src="/images/microsoft_365_ai_suite.png"
                  alt="Microsoft 365 Solutions & Copilot Suite"
                  className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                />
              </div>
            </div>
          </div>

          {/* Microsoft 365 Services Badges Grid */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#0066CC]" />
              Comprehensive Microsoft 365 Suite Coverage
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {m365Apps.map((app, idx) => {
                const IconC = app.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0066CC]/50 hover:shadow-md transition-all text-center space-y-2 flex flex-col items-center justify-between"
                  >
                    <div className={`w-10 h-10 rounded-xl ${app.color} flex items-center justify-center shadow-xs`}>
                      <IconC className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">{app.name}</span>
                      <span className="text-[11px] font-mono text-slate-500 block">{app.cat}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI + Microsoft = Intelligent Business Section with Clean Image Cards (No Color Overlays) */}
        <div className="mb-24 space-y-12">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-14 border border-slate-200 shadow-xl space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-xs font-bold text-purple-700">
                <Bot className="w-4 h-4" />
                <span>INTELLIGENT ENTERPRISE AUTOMATION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                AI + Microsoft = Intelligent Business
              </h2>
              <p className="text-slate-700 text-lg">
                VGT combines Microsoft cloud technologies with cutting-edge Artificial Intelligence.
              </p>
            </div>

            {/* 10 AI Cards with Clean Crisp Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {aiServices.map((ai, idx) => {
                const IconC = ai.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 hover:border-[#0066CC] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Clean Image Header */}
                    <div className="relative h-32 w-full overflow-hidden bg-slate-900">
                      <img
                        src={ai.image}
                        alt={ai.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      
                      {/* Icon Badge Overlay */}
                      <div className="absolute bottom-2.5 left-2.5 w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-md">
                        <IconC className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#0066CC] transition-colors">
                          {ai.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed pt-1">{ai.desc}</p>
                      </div>
                      <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-[#0066CC]">
                        <span>AI Module</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Implementation Services & Data Migration Grid */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
              Our Microsoft Implementation Services
            </h2>
            <p className="text-slate-600 text-base">
              End-to-end consulting, migration, customization, and managed support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationServices.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0066CC] flex items-center justify-center text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Legacy Migration & Integration Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-700">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>DATA MIGRATION EXPERTISE</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Secure Data Migration from Legacy ERPs
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Transitioning from an older ERP? We migrate your historical financial records, inventory tables, vendor masters, and transaction ledgers with zero data corruption.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {legacySystems.map((sys, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 shadow-xs"
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/images/ms_dynamics_cloud_migration.png"
                  alt="Dynamics 365 Cloud Migration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Businesses Choose Microsoft Dynamics 365 Comparison Table */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
              Why Businesses Choose Microsoft Dynamics 365
            </h2>
            <p className="text-slate-600 text-base">
              Compare traditional legacy ERP systems against modern Microsoft cloud architecture.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <th className="p-6">Feature / Capability</th>
                  <th className="p-6 text-slate-500">Traditional ERP</th>
                  <th className="p-6 text-[#0066CC] bg-blue-50/80">Microsoft Dynamics 365</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-6 text-slate-500">{row.traditional}</td>
                    <td className="p-6 font-semibold text-[#0066CC] bg-blue-50/40 flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0066CC] shrink-0" />
                      {row.dynamics}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Industries We Serve Section with Clean Image Cards (No Color Overlays) */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-base">
              Engineered for industry-specific compliance, operational workflows, and regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {industriesList.map((ind, idx) => {
              const IconC = ind.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0066CC] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between bg-slate-950 h-44 relative"
                >
                  {/* Background Image (Clean without Color Tint Gradient) */}
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Dark Vignette for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Card Content Overlay */}
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                    <div className="w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700 flex items-center justify-center shadow-md">
                      <IconC className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-white block group-hover:text-cyan-300 transition-colors">
                        {ind.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-300 tracking-wider uppercase block">
                        Industry Solution
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mb-24 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-[#0066CC]" />
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Got questions about Microsoft Dynamics 365 implementation? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0066CC] transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-[#0066CC] transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>


        {/* Final CTA Banner */}
        <div className="bg-gradient-to-r from-[#003366] via-[#0066CC] to-[#0284C7] rounded-3xl p-10 sm:p-16 border border-blue-600 text-center space-y-6 shadow-2xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white mx-auto">
            <Lock className="w-4 h-4" />
            <span>ENTERPRISE READY TRANSFORMATIONAL PARTNER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Modernize Your Business?
          </h2>

          <p className="text-blue-50 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Partner with Venus Global Technology to implement Microsoft Dynamics 365, Microsoft 365, and AI-powered business solutions that help your organization improve efficiency, increase visibility, and support long-term growth.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-white text-[#0066CC] hover:bg-slate-100 active:scale-[0.98] font-bold text-base inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
            >
              <span>Request a Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base inline-flex items-center gap-2 transition-all"
            >
              <span>Book a Dynamics 365 Demo</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-blue-950/60 hover:bg-blue-950/80 border border-white/30 text-white font-semibold text-base inline-flex items-center gap-2 transition-all"
            >
              <span>Speak with a Microsoft Solutions Expert</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
