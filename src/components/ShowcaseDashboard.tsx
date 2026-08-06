import React, { useState } from 'react';
import {
  LayoutDashboard,
  Truck,
  FileText,
  Cpu,
  ShieldCheck,
  Server,
  Zap,
  Sparkles,
} from 'lucide-react';

export const ShowcaseDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'logistics' | 'billing' | 'telemetry'>('overview');

  return (
    <section className="w-full py-24 sm:py-32 bg-[#1D1D1F] text-white relative overflow-hidden">
      {/* Background Vivid Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-r from-blue-600/25 via-indigo-600/20 to-cyan-500/25 blur-[150px] rounded-full pointer-events-none -z-10 animate-glow"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#2997FF] uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#2997FF] animate-pulse" />
            <span>Interactive Operational Command Center</span>
          </div>
          <h2 className="display-lg-text text-white mb-6">
            Command Center for Global Operations.
          </h2>
          <p className="lead-text text-slate-300 font-normal">
            Real-time telemetry, automated sub-ledger sync, and predictive machine learning models unified in an ultra-responsive interface.
          </p>
        </div>

        {/* 24px Apple Dark Tile Frame */}
        <div className="relative rounded-[24px] bg-[#272729] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-2xl">
          {/* Dashboard Window Header Bar */}
          <div className="flex items-center justify-between px-8 py-5 bg-[#1D1D1F] border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]"></div>
              <span className="ml-4 text-xs font-mono text-slate-400 hidden sm:inline-block">
                vgt-erp-ai://app.enterprise.internal
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                AI Core Active
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-[#2997FF] text-xs font-mono font-semibold hidden md:flex">
                <Server className="w-3.5 h-3.5" />
                US-EAST-1 (0.4ms)
              </div>
            </div>
          </div>

          {/* Dashboard Main Grid Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3 p-6 bg-[#1D1D1F] border-r border-white/10 flex flex-col gap-2.5">
              <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest px-3 mb-3">
                Navigation Nodes
              </span>

              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Executive Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('logistics')}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'logistics'
                    ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>Predictive Logistics</span>
              </button>

              <button
                onClick={() => setActiveTab('billing')}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'billing'
                    ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Autonomous Invoicing</span>
              </button>

              <button
                onClick={() => setActiveTab('telemetry')}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'telemetry'
                    ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Plant Telemetry</span>
              </button>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="p-4 rounded-xl bg-[#1D1D1F] border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#2997FF]">Node Compliance</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs text-slate-300 mb-3 font-normal">ISO-27001 & SOC2 Type II Certified</p>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[100%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-9 p-8 sm:p-10 bg-[#272729] flex flex-col justify-between">
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="display-md-text text-white">Executive Telemetry Overview</h3>
                      <p className="text-base text-slate-300 mt-1">Live multi-plant analytics across 14 global logistics nodes.</p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/80 border border-blue-500/40 text-xs font-mono text-[#2997FF] font-bold">
                      <Zap className="w-4 h-4" /> Auto-Optimizing (Every 100ms)
                    </span>
                  </div>

                  {/* Integrated Mockup Image Banner */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                    <img
                      src="/images/crm_dashboard_mockup.png"
                      alt="CRM Executive Dashboard"
                      className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-[1.02] transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-300 bg-slate-950/80 px-3 py-1 rounded-md border border-cyan-500/30">
                        LIVE ML MODEL: WIN PROBABILITY &gt;90%
                      </span>
                      <span className="text-xs font-bold text-white bg-[#0066CC] px-3 py-1 rounded-md">
                        4 Enterprise Accounts Closing
                      </span>
                    </div>
                  </div>

                  {/* Summary Status Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-[#1D1D1F] border border-white/10">
                      <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2 font-semibold">Active Invoices</span>
                      <span className="text-3xl font-extrabold text-white font-mono">$12.48M</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#1D1D1F] border border-white/10">
                      <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2 font-semibold">Procurement Sync</span>
                      <span className="text-3xl font-extrabold text-emerald-400 font-mono">0.82 ms</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#1D1D1F] border border-white/10">
                      <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2 font-semibold">ML Precision</span>
                      <span className="text-3xl font-extrabold text-[#2997FF] font-mono">99.84%</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'logistics' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <h3 className="display-md-text text-white">Predictive Logistics Route Optimizer</h3>
                  <p className="text-lg text-slate-300">Autonomous freight dispatching reduces fleet fuel consumption by 32% using real-time weather & telemetry modeling.</p>
                  
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                    <img
                      src="/images/erp_ai_operations.png"
                      alt="AI Operations"
                      className="w-full h-56 object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'billing' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <h3 className="display-md-text text-white">Autonomous Multi-Currency Ledger</h3>
                  <p className="text-lg text-slate-300">Zero-human intervention cross-border reconciliation supporting 140+ fiat currencies and ERP sub-ledgers.</p>

                  <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                    <img
                      src="/images/erp_autonomous_invoicing_vgt.png"
                      alt="Autonomous Invoicing"
                      className="w-full h-56 object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'telemetry' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <h3 className="display-md-text text-white">Sub-Millisecond Plant Sensors</h3>
                  <p className="text-lg text-slate-300">IoT sensor stream parsing across manufacturing machinery to predict hardware failure 48 hours before breakdown.</p>

                  <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                    <img
                      src="/images/erp_operations_dashboard.png"
                      alt="Operations Dashboard"
                      className="w-full h-56 object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
