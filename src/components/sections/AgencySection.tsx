"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, GitPullRequest, Code2, Users, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function AgencySection() {
  return (
    <section className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#070A0F] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/[0.08] bg-[#0B0F17] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#38BDF8]">
                <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Agency Partnerships</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#F1F5F9] leading-[1.14]">
                Your engineering studio, working behind your brand.
              </h2>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl font-normal">
                We empower design studios, marketing firms, and digital consultancies to deliver complex web applications, API integrations, and bespoke software with zero internal hiring overhead.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { icon: GitPullRequest, text: "White-label code delivered directly to your Git repos" },
                  { icon: Shield, text: "Ironclad client non-disclosure agreements (NDAs)" },
                  { icon: Code2, text: "Next.js, TypeScript, PostgreSQL & AI workflows" },
                  { icon: Users, text: "Direct senior engineer communication, no middle layers" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                    <item.icon className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/agency-partnership"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-sm transition-colors shadow-md"
                  >
                    <span>Explore agency partnerships</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#F1F5F9] border border-white/[0.08] text-sm transition-colors"
                  >
                    <span>Partner with us</span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right: Partner SLA Box */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.4)" }}
              className="lg:col-span-5 bg-[#070A0F] p-6 rounded-xl border border-white/[0.08] space-y-4 font-mono text-xs shadow-lg transition-colors"
            >
              <div className="text-xs text-[#38BDF8] font-medium pb-2 border-b border-white/[0.08] flex items-center justify-between">
                <span>Agency SLA Framework</span>
                <span className="text-[10px] text-[#10B981] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  Active
                </span>
              </div>
              <div className="space-y-3 text-[#94A3B8]">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span>Code handover</span>
                  <span className="text-[#F1F5F9]">100% repository rights</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span>Discovery sprint</span>
                  <span className="text-[#F1F5F9]">48-hour turnarounds</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span>Fixed milestones</span>
                  <span className="text-[#F1F5F9]">Predictable scoping</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>NDA guarantee</span>
                  <span className="text-[#38BDF8]">Strict white-label</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
