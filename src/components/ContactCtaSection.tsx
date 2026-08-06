import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactCtaProps {
  onShowToast: (msg: string) => void;
}

export const ContactCtaSection: React.FC<ContactCtaProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Manufacturing',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Thank you, ${formData.name}! Your demo request has been logged. Our enterprise team will contact ${formData.email} within 2 hours.`);
      setFormData({ name: '', email: '', company: '', industry: 'Manufacturing', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="w-full py-24 sm:py-32 bg-[#F5F5F7] border-t border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block">
              Schedule AI Consultation
            </span>

            <h2 className="display-lg-text text-[#1D1D1F] leading-tight">
              Ready to Automate Your Enterprise Operations?
            </h2>

            <p className="lead-text text-slate-600 font-normal">
              Book a live 30-minute custom architectural demo with our enterprise solution engineers.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-[#0066CC] shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-mono font-bold">ENTERPRISE SALES</span>
                  <span className="text-lg font-bold text-[#1D1D1F]">enterprise@vgterpai.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-[#0066CC] shadow-xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-mono font-bold">DIRECT LINE</span>
                  <span className="text-lg font-bold text-[#1D1D1F]">+1 (800) 492-8480</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-[#0066CC] shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-mono font-bold">GLOBAL HEADQUARTERS</span>
                  <span className="text-lg font-bold text-[#1D1D1F]">Seattle, WA • Zurich, Switzerland</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 24px Form Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[24px] bg-white p-10 sm:p-12 border border-slate-200/90 shadow-xl">
              <h3 className="display-md-text text-[#1D1D1F] mb-3">Request Custom AI Demo</h3>
              <p className="text-sm text-slate-500 mb-8 font-normal">Fill out your details for instant access to sandbox environment.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F7] border border-slate-200 text-[#1D1D1F] placeholder-slate-400 text-base focus:outline-none focus:bg-white focus:border-[#0066CC] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F7] border border-slate-200 text-[#1D1D1F] placeholder-slate-400 text-base focus:outline-none focus:bg-white focus:border-[#0066CC] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Apex Logistics"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F7] border border-slate-200 text-[#1D1D1F] placeholder-slate-400 text-base focus:outline-none focus:bg-white focus:border-[#0066CC] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Industry Vertical
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F7] border border-slate-200 text-[#1D1D1F] text-base focus:outline-none focus:bg-white focus:border-[#0066CC] transition-colors"
                    >
                      <option value="Manufacturing">Manufacturing & Robotics</option>
                      <option value="Energy">Energy & Utilities</option>
                      <option value="Healthcare">Healthcare & Pharma</option>
                      <option value="Logistics">Freight & Logistics</option>
                      <option value="Retail">Retail & E-Commerce</option>
                      <option value="Finance">Banking & Finance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Scope / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your active ERP setup, SAP migration target, or telemetry load..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F7] border border-slate-200 text-[#1D1D1F] placeholder-slate-400 text-base focus:outline-none focus:bg-white focus:border-[#0066CC] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 text-lg font-semibold text-white bg-[#0066CC] hover:bg-[#0071E3] disabled:opacity-50 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <span>Scheduling Consultation...</span>
                  ) : (
                    <>
                      <span>Submit Demo Request</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
