import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, FileText } from "lucide-react";
import { processSteps } from "@/data/process";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Engineering Methodology & Delivery — Vorynex Technologies",
  description:
    "Our structured 6-step software delivery process: Discover, Define, Design, Develop, Deliver, and Support. Predictable milestones, zero surprise pivots.",
};

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="accent">METHODOLOGY // REPRODUCIBLE DELIVERY</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1]">
            How we turn business requirements into reliable systems.
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed pt-2">
            Software projects don&apos;t fail because of syntax errors; they fail because of ambiguous requirements and poor architectural boundaries. Our 6-step methodology ensures predictability from day one.
          </p>
        </div>

        {/* 6 In-Depth Step Cards */}
        <div className="space-y-12 mb-20">
          {processSteps.map((step) => (
            <div
              key={step.step}
              id={`step-${step.step}`}
              className="p-8 sm:p-12 rounded-2xl border border-[#16202E] bg-[#0B111A] shadow-card hover:border-[#1E2D44] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step Metadata & Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-base font-bold text-[#38BDF8]">
                      PHASE {step.step}
                    </span>
                    <span className="text-[#64748B]">/</span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                      <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-semibold text-[#F1F5F9]">
                    {step.name}
                  </h2>
                  <p className="text-sm font-medium text-[#38BDF8]">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed pt-1">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-[#16202E]">
                    <div className="text-[11px] font-mono uppercase text-[#64748B] mb-1.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Concrete Milestone Deliverable</span>
                    </div>
                    <div className="text-xs font-mono text-[#F1F5F9] bg-[#070A0F] p-3 rounded border border-[#16202E]">
                      {step.deliverable}
                    </div>
                  </div>
                </div>

                {/* Key Activities Checklist */}
                <div className="lg:col-span-7 bg-[#070A0F] p-6 sm:p-8 rounded-xl border border-[#16202E] space-y-4">
                  <div className="text-xs font-mono uppercase text-[#64748B] tracking-wider">
                    Core Technical Activities
                  </div>
                  <div className="space-y-3">
                    {step.keyActivities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-3 text-sm text-[#F1F5F9]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#0B111A] border border-[#16202E] text-center space-y-4">
          <h3 className="text-2xl font-semibold text-[#F1F5F9]">
            Ready to initiate Step 01?
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-lg mx-auto">
            Book a 45-minute discovery consultation with a senior software architect to evaluate your project scope and timelines.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-sm transition-all"
            >
              <span>Schedule Discovery Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

