"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-28 bg-[#070A0F] text-center relative overflow-hidden border-b border-white/[0.08]">
      {/* Ambient Animated Glow Aura */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#00D2FF]/20 via-[#3B82F6]/20 to-[#A855F7]/15 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="max-w-[800px] mx-auto px-4 sm:px-6 relative z-10 space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#38BDF8] shadow-sm">
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"
          />
          <span>Architectural Consultation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.12]">
          Let&apos;s build something that solves a real problem.
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl mx-auto font-normal">
          Tell us what you are planning. We analyze your requirements, evaluate architecture options, and map out practical milestones.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-sm transition-colors shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="mailto:contact@vorynex.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#F1F5F9] border border-white/[0.1] text-sm font-mono transition-colors"
            >
              <Mail className="w-4 h-4 text-[#38BDF8]" />
              <span>contact@vorynex.com</span>
            </a>
          </motion.div>
        </div>

        <div className="pt-6 text-xs font-mono text-[#64748B]">
          Direct consultation with senior engineering team · Mutual NDA guaranteed
        </div>
      </motion.div>
    </section>
  );
}
