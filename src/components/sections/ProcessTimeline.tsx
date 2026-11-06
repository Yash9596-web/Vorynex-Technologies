"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessTimeline() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#070A0F] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <SectionHeading
            label="06 / Methodology"
            title="How we deliver working software."
            description="A 6-step engineering lifecycle designed to eliminate uncertainty, ensure architectural consistency, and hit delivery deadlines."
            className="mb-0"
          />
          <Link
            href="/process"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-[#7DD3FC] transition-colors self-start md:self-end group"
          >
            <span>Explore full methodology</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 6 Step Grid with Scroll Viewport Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.45)" }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="p-6 rounded-xl border border-white/[0.08] bg-[#0B0F17] transition-all flex flex-col justify-between space-y-6 hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#38BDF8] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>Step {step.step}</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#64748B]">
                    {step.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#F1F5F9] group-hover:text-white transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-[#38BDF8] mt-1 font-mono">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                  Key Deliverable
                </div>
                <div className="text-xs font-mono text-[#CBD5E1] bg-[#070A0F] p-2.5 rounded-lg border border-white/[0.06] group-hover:border-[#38BDF8]/30 transition-colors">
                  {step.deliverable}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
