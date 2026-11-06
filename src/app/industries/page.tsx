import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Building2, Server, Laptop, ShoppingCart } from "lucide-react";
import { industries } from "@/data/industries";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Industries We Serve — Vorynex Technologies",
  description:
    "Domain-intelligent software engineering for SaaS companies, enterprise logistics, digital consultancies, and B2B commerce. Clean, reliable, and production-tested.",
};

function IndustryIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "saas-companies":
      return <Laptop className={className} />;
    case "enterprise-logistics":
      return <Building2 className={className} />;
    case "digital-agencies":
      return <Server className={className} />;
    case "b2b-commerce":
      return <ShoppingCart className={className} />;
    default:
      return <Building2 className={className} />;
  }
}

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="accent">DOMAIN EXPERTISE // SECTOR SPECIALIZATION</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1]">
            Domain-intelligent engineering across critical sectors.
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed pt-2">
            Generic software engineering often fails because developers don&apos;t understand sector nuances. We align our architecture directly with your operational realities, compliance frameworks, and business margins.
          </p>
        </div>

        {/* 4 Industry Breakdown Cards */}
        <div className="space-y-16">
          {industries.map((ind) => (
            <div
              key={ind.id}
              id={ind.slug}
              className="p-8 sm:p-12 rounded-2xl border border-[#16202E] bg-[#0B111A] shadow-card hover:border-[#1E2D44] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <IndustryIcon id={ind.id} className="w-5 h-5 text-[#38BDF8]" />
                    <span className="font-mono text-sm font-bold text-[#38BDF8]">
                      {ind.number} // SECTOR
                    </span>
                  </div>

                  <h2 className="text-3xl font-semibold text-[#F1F5F9]">
                    {ind.title}
                  </h2>
                  <p className="text-sm font-medium text-[#38BDF8]">
                    {ind.headline}
                  </p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed pt-1">
                    {ind.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#16202E]">
                    {ind.metrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-[#070A0F] border border-[#16202E]">
                        <div className="text-lg font-bold font-mono text-[#F1F5F9]">{m.value}</div>
                        <div className="text-[10px] text-[#64748B] mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {ind.caseStudyRef && (
                    <div className="pt-4">
                      <Link
                        href={ind.caseStudyRef}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#38BDF8] hover:text-[#7DD3FC] tracking-wider transition-colors group"
                      >
                        <span>Inspect Relevant Case Study</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right: Challenges vs Solutions */}
                <div className="lg:col-span-7 bg-[#070A0F] p-6 sm:p-8 rounded-xl border border-[#16202E] space-y-6">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#F59E0B] tracking-wider mb-3">
                      Operational Friction We Solve
                    </div>
                    <div className="space-y-2.5">
                      {ind.challenges.map((ch, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#16202E]">
                    <div className="text-xs font-mono uppercase text-[#10B981] tracking-wider mb-3">
                      Our Architectural Interventions
                    </div>
                    <div className="space-y-2.5">
                      {ind.solutions.map((sol, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F1F5F9]">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-xl bg-[#0B111A] border border-[#16202E] text-center space-y-4">
          <h3 className="text-2xl font-semibold text-[#F1F5F9]">
            Don&apos;t see your specific sector listed?
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-lg mx-auto">
            Our core engineering methodology is applied across healthcare, manufacturing, fintech, and custom enterprise tools. Let&apos;s evaluate your requirements together.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-sm transition-all"
            >
              <span>Consult an Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

