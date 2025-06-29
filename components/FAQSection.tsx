"use client";
import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the AI handle patient calls?",
      answer: "Our AI provides a conversational, human-like experience that picks up every call automatically. It can book appointments directly into your practice management system, provide clinic information, handle emergency triage, and collect patient details - all while maintaining HIPAA compliance."
    },
    {
      question: "Is this HIPAA compliant?",
      answer: "Yes, absolutely. Our platform features HIPAA-compliant architecture with end-to-end encryption, secure voice and data storage, configurable access controls, and full audit trails of all AI interactions. We're built specifically for healthcare environments."
    },
    {
      question: "Can it actually book appointments or just take messages?",
      answer: "Our AI books real appointments directly into your schedule with real-time integration. It can book, reschedule, and cancel appointments while collecting insurance information, visit reasons, and patient details. This isn't just message-taking - it's actual scheduling."
    },
    {
      question: "What happens with emergency calls?",
      answer: "The AI includes smart emergency triaging capabilities. It can identify true emergencies and escalate them to your designated on-call staff, while handling non-urgent issues through scheduling or callback requests. Emergency routing is built right in."
    },
    {
      question: "How does setup work with our existing systems?",
      answer: "Setup is simple - just forward your after-hours calls (or overflow calls) to our AI system. We integrate with your practice management system or calendar, and staff will see synced appointments and callback lists the next morning. No complex installation required."
    },
    {
      question: "What types of dental practices is this ideal for?",
      answer: "We're perfect for private dental practices, multi-location DSOs, orthodontists, periodontists, oral surgeons, and especially high-volume or fast-growing clinics that need to capture every patient opportunity without adding staff overhead."
    },
    {
      question: "What information can the AI provide to patients?",
      answer: "The AI can provide comprehensive practice information including location details, parking information, dentist bios, office hours, accepted insurance plans, and can automatically send new patient intake forms via text message."
    },    {
      question: "How does this help my practice financially?",
      answer: "You'll capture lost revenue from missed calls, reduce front desk staff burnout, handle call volume spikes automatically, and convert more first-time callers into booked patients. Our results show: 10-15% increase in monthly revenues, 20-25% increase in monthly profit, >90% call answer rate achieved, and ~80% reduction in missed calls. It's about maximizing every patient opportunity, 24/7."
    }
  ];  return (
    <section id="faq" className="py-16 bg-slate-50 dark:bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            <span className="block text-blue-600 font-bold">Got a question?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our AI solution for dental practices
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-6 bg-white border border-slate-200 rounded-lg border-t-0 rounded-t-none">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
