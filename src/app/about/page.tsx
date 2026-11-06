import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MapPin, Terminal, Code2, ShieldCheck, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "About Studio — Vorynex Technologies",
  description:
    "Learn about Vorynex Technologies: an independent software engineering studio based in Pune, India, working worldwide. Our philosophy: Less decoration. More engineering.",
};

const principles = [
  {
    number: "01",
    title: "Less Decoration. More Engineering.",
    description: "We refuse to hide behind neon glowing orbs, AI buzzwords, or superficial design trends. Every border, typography choice, and API endpoint exists to solve a real business requirement."
  },
  {
    number: "02",
    title: "Deterministic Guardrails for AI",
    description: "We never let raw, unconstrained machine learning models touch production databases directly. We enforce strict JSON schemas, multi-tier validation, and human-in-the-loop approval gates."
  },
  {
    number: "03",
    title: "100% Type-Safe TypeScript",
    description: "We treat runtime errors as architectural failures. Strictly typed TypeScript across the entire stack guarantees that schema mismatches and null pointer bugs are caught at compile time."
  },
  {
    number: "04",
    title: "Zero Fictional Claims",
    description: "We don't paste fake Fortune 500 client logos or invent exaggerated metrics. We let our actual code bases, real screenshots, and verified deployment pipelines speak for our capabilities."
  },
  {
    number: "05",
    title: "Total IP Ownership",
    description: "When we complete your software milestone, you own 100% of the repository, intellectual property, Docker containers, and documentation. Zero platform vendor lock-in."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="accent">THE STUDIO // ROOTS &amp; MISSION</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1]">
            Independent software engineering for high-stakes business problems.
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed pt-2">
            Vorynex Technologies is an independent software studio founded on a clear realization: businesses don&apos;t need another flashy SaaS template—they need robust, well-architected software that actually runs their operations.
          </p>
        </div>

        {/* Location & Studio Heritage */}
        <div className="p-8 sm:p-12 rounded-2xl border border-[#16202E] bg-[#0B111A] mb-20 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
                <MapPin className="w-4 h-4 text-[#10B981]" />
                <span>PUNE, MAHARASHTRA // INDIA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F1F5F9]">
                Engineered in Pune. Deployed worldwide.
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Operating out of Pune—one of India&apos;s foremost technological and academic centers—our engineers combine technical rigor with international product standards. We serve fast-growing enterprises, mid-market logistics companies, and digital agencies across India, North America, the Middle East, and Europe.
              </p>
            </div>
            <div className="md:col-span-4 bg-[#070A0F] p-6 rounded-xl border border-[#16202E] space-y-3 font-mono text-xs">
              <div className="text-[#64748B] text-[10px] uppercase">STUDIO CREDENTIALS</div>
              <div className="text-[#F1F5F9] font-bold text-sm">Vorynex Technologies</div>
              <div className="text-[#94A3B8]">Status: Independent Software Studio</div>
              <div className="text-[#94A3B8]">Primary Stack: Next.js · TS · Python · Go</div>
              <div className="text-[#10B981]">● Direct Partner Collaboration</div>
            </div>
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="space-y-8 mb-20">
          <div>
            <div className="font-mono text-xs uppercase text-[#38BDF8] tracking-widest mb-2">
              OUR PRINCIPLES
            </div>
            <h2 className="text-3xl font-semibold text-[#F1F5F9] tracking-tight">
              The rules that govern every commit.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((pr) => (
              <div
                key={pr.number}
                className="p-6 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-mono text-sm font-bold text-[#38BDF8]">
                    {pr.number}
                  </span>
                  <h3 className="text-lg font-semibold text-[#F1F5F9]">
                    {pr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#0B111A] border border-[#16202E] text-center space-y-4">
          <h3 className="text-2xl font-semibold text-[#F1F5F9]">
            Work with an engineering studio that values craft.
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-lg mx-auto">
            Ready to turn your requirements into reliable, maintainable code? Let&apos;s start with an introductory technical discovery.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-sm transition-all"
            >
              <span>Start a Project Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

