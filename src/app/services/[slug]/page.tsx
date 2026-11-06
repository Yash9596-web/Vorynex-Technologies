import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, HelpCircle, Layers } from "lucide-react";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — Vorynex Technologies`,
    description: service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#94A3B8] hover:text-[#38BDF8] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Capabilities</span>
        </Link>

        {/* Hero Section with Integrated Visual Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-[#16202E]">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-[#38BDF8]">
                {service.number}
              </span>
              <span className="text-[#64748B]">/</span>
              <Badge variant="accent">{service.category}</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1]">
              {service.title}
            </h1>

            <p className="text-xl text-[#38BDF8] font-medium">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed pt-2 max-w-2xl">
              {service.description}
            </p>
          </div>

          {/* Visual Asset Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#16202E] bg-[#0B1322] overflow-hidden shadow-card group">
              {/* Blue & violet ambient lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#162744]/40 via-transparent to-[#281845]/30 pointer-events-none z-10" />

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070A0F]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={755}
                  height={499}
                  priority
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="px-4 py-2.5 bg-[#0E1729]/95 border-t border-[#16202E] flex items-center justify-between text-xs font-mono">
                <span className="text-[#38BDF8] font-semibold">{service.title} // SYSTEM</span>
                <span className="text-[#10B981]">PRODUCTION VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Business Problems & Capabilities */}
          <div className="lg:col-span-8 space-y-12">
            {/* Problems Solved */}
            <div className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A]">
              <div className="text-xs font-mono uppercase text-[#F59E0B] tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span>The Operational Bottlenecks We Eliminate</span>
              </div>
              <div className="space-y-3">
                {service.businessProblems.map((problem, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#F1F5F9]">
                    <span className="font-mono text-xs text-[#64748B] mt-0.5 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className="leading-relaxed">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A]">
              <div className="text-xs font-mono uppercase text-[#38BDF8] tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>Engineering Execution Scope</span>
              </div>
              <div className="space-y-3">
                {service.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#F1F5F9]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-semibold text-[#F1F5F9] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#38BDF8]" />
                <span>Frequently Answered Questions</span>
              </h3>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg border border-[#16202E] bg-[#0B111A] space-y-2"
                  >
                    <h4 className="text-base font-semibold text-[#F1F5F9]">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Deliverables & Tech Stack Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tech Stack */}
            <div className="p-6 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-4">
              <div className="text-xs font-mono uppercase text-[#64748B] tracking-wider">
                Technology Standards
              </div>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded bg-[#070A0F] border border-[#16202E] text-xs font-mono text-[#F1F5F9]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Guaranteed Deliverables */}
            <div className="p-6 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-4">
              <div className="text-xs font-mono uppercase text-[#64748B] tracking-wider">
                Delivered With Every Project
              </div>
              <div className="space-y-2.5 text-xs text-[#94A3B8]">
                {service.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Project Inquiry Box */}
            <div className="p-6 rounded-xl border border-[#38BDF8]/40 bg-[#101C2B] space-y-4">
              <h4 className="text-base font-semibold text-[#F1F5F9]">
                Initiate a {service.title} Project
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Connect directly with our engineering team in Pune to discuss your requirements and receive an upfront milestone proposal.
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Scope Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
