import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, GitBranch, Layers, ShieldCheck } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — Architectural Case Study // Vorynex Technologies`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#94A3B8] hover:text-[#38BDF8] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Hero Banner with Integrated AI Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-[#16202E]">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-[#38BDF8]">
                {project.number}
              </span>
              <span className="text-[#64748B]">/</span>
              <Badge variant="accent">{project.category}</Badge>
              <span className="text-xs font-mono text-[#64748B]">
                DEPLOYED {project.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[#38BDF8] font-medium leading-snug">
              {project.headline}
            </p>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed pt-2 max-w-2xl">
              {project.summary}
            </p>
          </div>

          {/* Visual Container with Ambient Lighting */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#16202E] bg-[#0B1322] overflow-hidden shadow-card group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#162744]/40 via-transparent to-[#281845]/30 pointer-events-none z-10" />

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070A0F]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={755}
                  height={499}
                  priority
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="px-4 py-2.5 bg-[#0E1729]/95 border-t border-[#16202E] flex items-center justify-between text-xs font-mono">
                <span className="text-[#38BDF8] font-semibold">{project.title} // SYSTEM</span>
                <span className="text-[#10B981]">● {project.liveStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-[#16202E] bg-[#0B111A] shadow-sm"
            >
              <div className="text-3xl font-bold font-mono text-[#F1F5F9]">
                {metric.value}
              </div>
              <div className="text-xs font-mono uppercase text-[#38BDF8] tracking-wider mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Deep Architectural Study */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Challenge */}
            <div className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-3">
              <div className="text-xs font-mono uppercase text-[#F59E0B] tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span>The Engineering Challenge</span>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9]">
                Operational friction that prompted the build
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Engineering Approach */}
            <div className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-4">
              <div className="text-xs font-mono uppercase text-[#38BDF8] tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#38BDF8]" />
                <span>Our Engineering Approach</span>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9]">
                How we solved the problem deterministically
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {project.engineeringApproach}
              </p>
            </div>

            {/* Architecture Pipeline Breakdown */}
            <div className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-6">
              <div className="text-xs font-mono uppercase text-[#10B981] tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#10B981]" />
                <span>Step-by-Step Architecture Pipeline</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                {project.architectureWorkflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded bg-[#070A0F] border border-[#16202E] flex items-start gap-3"
                  >
                    <span className="text-[#38BDF8] font-bold shrink-0">
                      PHASE 0{idx + 1}
                    </span>
                    <span className="text-[#F1F5F9] leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            <div className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-4">
              <h3 className="text-xl font-semibold text-[#F1F5F9]">
                Core Product Capabilities
              </h3>
              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#F1F5F9]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Telemetry Log View */}
            {project.terminalLogs && (
              <div className="p-6 rounded-xl border border-[#16202E] bg-[#070A0F] font-mono text-xs space-y-2">
                <div className="text-[#38BDF8] font-semibold text-[11px] pb-2 border-b border-[#16202E] flex items-center justify-between">
                  <span>TELEMETRY STREAM // VERIFIED REPLAY</span>
                  <span className="text-[#10B981]">● DETERMINISTIC EXECUTION</span>
                </div>
                <div className="space-y-1.5 pt-2 text-[#94A3B8] text-[11px]">
                  {project.terminalLogs.map((log, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Tech Stack & Inquiries */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-4">
              <div className="text-xs font-mono uppercase text-[#64748B] tracking-wider">
                Target User &amp; Industry
              </div>
              <div className="text-sm font-semibold text-[#F1F5F9]">
                {project.clientType}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-4">
              <div className="text-xs font-mono uppercase text-[#64748B] tracking-wider">
                Technologies Utilized
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded bg-[#070A0F] border border-[#16202E] text-xs font-mono text-[#F1F5F9]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#38BDF8]/40 bg-[#101C2B] space-y-4">
              <h4 className="text-base font-semibold text-[#F1F5F9]">
                Build a Similar Custom System
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Need an engineering team to architect custom automation, developer tooling, or digital platforms for your organization?
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Discuss Your Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
