import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "How does VGT ERP AI integrate with existing SAP or Microsoft Dynamics deployments?",
      answer: "VGT ERP AI features pre-built bi-directional data connectors for SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite, and Salesforce. Our zero-egress middleware syncs sub-ledgers and telemetry via Kafka event streams with sub-10ms latency.",
    },
    {
      question: "What security compliance and encryption standards are enforced?",
      answer: "We support single-tenant isolated database nodes, BYOK (Bring Your Own Key) AES-256 encryption at rest, TLS 1.3 in transit, and complete compliance with ISO-27001, SOC2 Type II, HIPAA, and GDPR.",
    },
    {
      question: "Can VGT ERP AI run on our private cloud or hybrid infrastructure?",
      answer: "Yes. VGT ERP AI can be deployed on Microsoft Azure, AWS, Google Cloud Platform, or hybrid on-premises Kubernetes (Azure Arc / Anthos) with full offline edge telemetry resilience.",
    },
    {
      question: "What is the typical deployment timeline for a multi-plant enterprise?",
      answer: "Thanks to pre-packaged industry data models, standard pilot deployments take 2 to 4 weeks. Full enterprise multi-region rollout usually finishes within 60 to 90 days.",
    },
    {
      question: "What level of SLA uptime and support does VGT ERP AI guarantee?",
      answer: "We guarantee a 99.999% SLA uptime backed by 24/7/365 dedicated enterprise CSM teams, direct Slack/Teams engineer access, and 15-minute response guarantees for P1 incidents.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-6 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="display-lg-text text-[#1D1D1F]">
            Clear Answers for Enterprise Teams.
          </h2>
        </div>

        {/* Hairline Accordion Items */}
        <div className="divide-y divide-[#E0E0E0] border-y border-[#E0E0E0]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 text-left flex items-center justify-between gap-6 font-bold text-xl sm:text-2xl text-[#1D1D1F] hover:text-[#0066CC] transition-colors"
                >
                  <span className="flex items-center gap-4">
                    <HelpCircle className="w-6 h-6 text-[#0066CC] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0066CC]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pt-2 pl-10 text-base sm:text-lg text-slate-600 leading-relaxed font-normal animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
