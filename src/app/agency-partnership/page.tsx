import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Shield, GitBranch, Code2, Users, FileLock2, Award } from "lucide-react";
import { agencyBenefits, partnershipModels } from "@/data/agency";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Agency Partnerships & White-Label Engineering — Vorynex Technologies",
  description:
    "White-label software engineering for digital agencies, creative studios, and consultancies. Expand your technical capacity with strictly typed, confidential code delivery.",
};

export default function AgencyPartnershipPage() {
  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="accent">WHITE-LABEL ENGINEERING // PARTNERSHIPS</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1]">
            Your development team, working behind your brand.
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed pt-2">
            Design studios, marketing firms, and consultancies use Vorynex Technologies to deliver custom web platforms, bespoke web apps, and intelligent automation without hiring permanent in-house developers.
          </p>
          <div className="pt-4 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-sm transition-all"
            >
              <span>Apply for Agency Partnership</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Core Pillars of Partnership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {agencyBenefits.map((benefit) => (
            <div
              key={benefit.number}
              className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A] hover:border-[#1E2D44] transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-[#38BDF8]">
                  {benefit.number}
                </span>
                <span className="text-[10px] font-mono text-[#10B981] uppercase tracking-wider">
                  GUARANTEED PROTOCOL
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9]">
                {benefit.title}
              </h3>
              <p className="text-sm font-medium text-[#38BDF8]">
                {benefit.description}
              </p>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>

        {/* NDA & Confidentiality Callout */}
        <div className="p-8 sm:p-12 rounded-2xl border border-[#193F33] bg-[#0E201B]/40 mb-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#10B981] font-mono text-xs font-semibold">
              <FileLock2 className="w-4 h-4" />
              <span>STRICT CLIENT-FACING NON-DISCLOSURE (NDA)</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#F1F5F9]">
              Your clients belong to you. We never poach or bypass.
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              We sign strict non-solicitation and non-disclosure agreements before reviewing client pitch decks or requirements. We operate in stealth as your technical arm.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded bg-[#0B111A] hover:bg-[#121A26] text-[#10B981] border border-[#193F33] text-xs font-mono tracking-wider transition-colors shrink-0"
          >
            Request Mutual NDA Form
          </Link>
        </div>

        {/* Partnership Models */}
        <div className="space-y-8 mb-20">
          <div>
            <div className="font-mono text-xs uppercase text-[#38BDF8] tracking-widest mb-2">
              ENGAGEMENT STRUCTURES
            </div>
            <h2 className="text-3xl font-semibold text-[#F1F5F9] tracking-tight">
              Two flexible ways to collaborate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipModels.map((model, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A] space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="font-mono text-xs text-[#38BDF8] font-semibold">
                    MODEL 0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#F1F5F9]">
                    {model.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8]">
                    {model.idealFor}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#16202E]">
                    {model.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#F1F5F9]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#16202E]">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 px-4 rounded bg-[#121A26] hover:bg-[#16202E] text-[#F1F5F9] border border-[#16202E] hover:border-[#38BDF8] text-xs font-mono tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Discuss This Model</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

