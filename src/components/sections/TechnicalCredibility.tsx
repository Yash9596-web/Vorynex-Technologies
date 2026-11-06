import React from "react";
import Image from "next/image";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Layers } from "lucide-react";

export function TechnicalCredibility() {
  return (
    <section className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#070A0F]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="05 / Technical Credibility"
          title="From requirements to reliable systems."
          description="We replace speculative assumptions with architectural rigor. Every software system is engineered across five deterministic phases."
        />

        {/* Digital Architecture Visual Banner */}
        <div className="mb-12 rounded-xl border border-white/[0.08] bg-[#0B0F17] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Visual Asset Container */}
          <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full w-full overflow-hidden bg-[#070A0F] min-h-[260px]">
            <Image
              src="/visuals/vorynex-data-architecture.webp"
              alt="Vorynex Digital Architecture - Enterprise software development and modular system engineering blueprint"
              width={755}
              height={498}
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-3 left-3 z-10">
              <span className="px-2.5 py-1 rounded bg-[#070A0F]/90 border border-white/[0.08] text-[10px] font-mono text-[#38BDF8] backdrop-blur-sm">
                Digital Architecture
              </span>
            </div>
          </div>

          {/* Architecture Rigor Highlights */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
              <Layers className="w-4 h-4 text-[#38BDF8]" />
              <span>Core System Framework</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#F1F5F9]">
              High-concurrency software architectures built for maintainability.
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              We engineer decoupled full-stack systems using strictly typed contracts (TypeScript / Zod), isolated relational data persistence (PostgreSQL), and automated regression verification suites.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#070A0F] border border-white/[0.06] space-y-1">
                <div className="text-[#64748B] text-[10px]">Type safety</div>
                <div className="text-[#F1F5F9] font-medium">100% strict contracts</div>
              </div>
              <div className="p-3 rounded-lg bg-[#070A0F] border border-white/[0.06] space-y-1">
                <div className="text-[#64748B] text-[10px]">Concurrency</div>
                <div className="text-[#F1F5F9] font-medium">Connection pooling</div>
              </div>
              <div className="p-3 rounded-lg bg-[#070A0F] border border-white/[0.06] space-y-1">
                <div className="text-[#64748B] text-[10px]">IP ownership</div>
                <div className="text-[#38BDF8] font-medium">Full client handover</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 5-Step System Architecture Diagram */}
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
