"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Mail, MapPin, Clock } from "lucide-react";
import { services } from "@/data/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isAgency, setIsAgency] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0].slug,
    budget: "$5,000 - $15,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Contact Details & Expectations (Editorial Studio style) */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <div className="font-mono text-xs uppercase text-[#38BDF8] tracking-widest mb-2">
            DIRECT INQUIRY // PUNE STUDIO
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#F1F5F9] tracking-tight">
            Let&apos;s build software that solves a real problem.
          </h3>
          <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
            Tell us about your requirements, existing stack, and timelines. We review every submission within 24 business hours and reply directly from our engineering team.
          </p>
        </div>

        <div className="space-y-4 pt-4 border-t border-[#16202E]">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#0B111A] border border-[#16202E] text-[#38BDF8]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-[#64748B]">DIRECT INBOX</div>
              <a
                href="mailto:contact@vorynex.com"
                className="text-sm font-mono text-[#F1F5F9] hover:text-[#38BDF8] transition-colors"
              >
                contact@vorynex.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#0B111A] border border-[#16202E] text-[#38BDF8]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-[#64748B]">ENGINEERING STUDIO</div>
              <div className="text-sm text-[#F1F5F9]">
                Pune, Maharashtra, India · Working Worldwide
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#0B111A] border border-[#16202E] text-[#38BDF8]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-[#64748B]">RESPONSE TIME</div>
              <div className="text-sm text-[#F1F5F9]">
                ≤ 24 hours · Direct response from technical lead
              </div>
            </div>
          </div>
        </div>

        {/* NDA & IP Assurance box */}
        <div className="p-4 rounded-lg bg-[#0B111A] border border-[#16202E] text-xs text-[#94A3B8] space-y-2">
          <div className="flex items-center gap-2 text-[#10B981] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Strict Confidentiality & NDA Guarantee</span>
          </div>
          <p className="leading-relaxed">
            All submitted specifications are treated as strictly confidential. Mutual non-disclosure agreements (NDAs) are provided prior to in-depth technical code audits.
          </p>
        </div>
      </div>

      {/* Project Inquiry Form */}
      <div className="lg:col-span-7 bg-[#0B111A] border border-[#16202E] rounded-xl p-6 sm:p-8 shadow-card">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0E201B] border border-[#193F33] text-[#10B981] mb-2">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-semibold text-[#F1F5F9]">Inquiry Received</h4>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#F1F5F9] font-medium">{formData.name}</span>. An engineering partner will review your project brief and follow up via <span className="text-[#F1F5F9] font-mono">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-4 py-2 text-xs font-mono uppercase text-[#38BDF8] hover:underline"
            >
              Submit another inquiry →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded bg-[#070A0F] border border-[#16202E] text-[#F1F5F9] text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded bg-[#070A0F] border border-[#16202E] text-[#F1F5F9] text-sm focus:outline-none focus:border-[#38BDF8] transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Logistics"
                  className="w-full px-3.5 py-2.5 rounded bg-[#070A0F] border border-[#16202E] text-[#F1F5F9] text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5">
                  Primary Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#070A0F] border border-[#16202E] text-[#F1F5F9] text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug} className="bg-[#0B111A]">
                      {s.number} · {s.title}
                    </option>
                  ))}
                  <option value="agency-partnership" className="bg-[#0B111A]">
                    Agency White-Label Partnership
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5">
                Estimated Project Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  "$3,000 - $8,000",
                  "$8,000 - $20,000",
                  "$20,000 - $50,000",
                  "$50,000+",
                ].map((tier) => (
                  <button
                    type="button"
                    key={tier}
                    onClick={() => setFormData({ ...formData, budget: tier })}
                    className={`px-3 py-2 text-xs font-mono rounded border transition-colors ${
                      formData.budget === tier
                        ? "bg-[#121A26] border-[#38BDF8] text-[#38BDF8]"
                        : "bg-[#070A0F] border-[#16202E] text-[#94A3B8] hover:border-[#1E2D44]"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5">
                Project Scope & Requirements *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your operational bottleneck, target user base, key features, or integration points..."
                className="w-full px-3.5 py-2.5 rounded bg-[#070A0F] border border-[#16202E] text-[#F1F5F9] text-sm focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
              />
            </div>

            {/* Agency Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="agencyCheck"
                checked={isAgency}
                onChange={(e) => setIsAgency(e.target.checked)}
                className="w-4 h-4 rounded bg-[#070A0F] border-[#16202E] text-[#38BDF8] focus:ring-0 focus:outline-none"
              />
              <label htmlFor="agencyCheck" className="text-xs text-[#94A3B8] cursor-pointer">
                We are a creative / digital agency looking for a white-label development partner.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-5 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Submit Project Brief</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

