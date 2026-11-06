import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Selected Work & Case Studies — Vorynex Technologies",
  description:
    "Explore our engineered products and case studies: DevPilot AI, Vorynex Automation Platform, and Text Banao. Real architectures, deterministic pipelines, and verified outcomes.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <Badge variant="accent" className="mb-4">
            PORTFOLIO // SELECTED CASE STUDIES
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1] mb-6">
            Working software, verified in production.
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            We don&apos;t invent speculative client logos or fictitious statistics. Every system below represents genuine engineering: real architectures, live code bases, and measurable outcomes.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[#16202E] bg-[#0B111A] p-8 sm:p-12 shadow-card hover:border-[#1E2D44] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#38BDF8]">
                      {project.number}
                    </span>
                    <span className="text-[#64748B]">/</span>
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-xs font-mono text-[#64748B]">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#F1F5F9] tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-base text-[#38BDF8] font-medium mt-1">
                      {project.headline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="p-4 rounded-lg bg-[#070A0F] border border-[#16202E] space-y-2">
                    <div className="text-xs font-mono uppercase text-[#F59E0B]">
                      Operational Challenge Solved
                    </div>
                    <p className="text-xs text-[#E2E8F0] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded bg-[#070A0F] border border-[#16202E]">
                        <div className="text-xl font-bold text-[#F1F5F9] font-mono leading-none">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-[#64748B] mt-1 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#070A0F] border border-[#16202E] text-xs font-mono text-[#94A3B8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#121A26] hover:bg-[#16202E] text-[#F1F5F9] border border-[#16202E] hover:border-[#38BDF8] text-xs font-mono tracking-wider transition-colors group"
                    >
                      <span>Read Deep-Dive Architectural Study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right: Architecture & Log Telemetry Box */}
                <div className="lg:col-span-5 bg-[#070A0F] border border-[#16202E] rounded-xl p-6 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#16202E] text-[#64748B] text-[11px]">
                    <span className="flex items-center gap-1.5 text-[#38BDF8]">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>ARCHITECTURE PIPELINE</span>
                    </span>
                    <span className="text-[#10B981]">{project.liveStatus}</span>
                  </div>

                  <div className="space-y-2.5">
                    {project.architectureWorkflow.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded bg-[#0B111A] border border-[#16202E] text-[11px] text-[#94A3B8] flex items-start gap-2"
                      >
                        <span className="text-[#38BDF8] font-bold">0{sIdx + 1}</span>
                        <span className="leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>

                  {project.terminalLogs && (
                    <div className="pt-3 border-t border-[#16202E] space-y-1 text-[10px] text-[#64748B]">
                      <div className="text-[#38BDF8] font-bold">// Sample Execution Trace:</div>
                      {project.terminalLogs.slice(0, 4).map((log, lIdx) => (
                        <div key={lIdx} className="truncate text-[#94A3B8]">
                          {log}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

