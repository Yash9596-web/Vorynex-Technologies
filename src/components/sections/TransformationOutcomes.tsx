"use client";

import React from "react";
import { TrendingUp, ShieldCheck, Zap, Activity, Check } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const outcomes = [
  {
    metric: "-82%",
    title: "Deployment Error MTTR",
    detail: "DevPilot AI isolates AST failures and drafts validated patches in under 90 seconds.",
    category: "Productivity",
    icon: Zap,
  },
  {
    metric: "99.4%",
    title: "Extraction Accuracy",
    detail: "Automation pipelines parse multi-vendor invoices and POs with deterministic schema validation.",
    category: "Accuracy",
    icon: ShieldCheck,
  },
  {
    metric: "380ms",
    title: "Edge Streaming Latency",
    detail: "Contextual commercial responses streamed over standard mobile networks without buffer lag.",
    category: "Latency",
    icon: Activity,
  },
  {
    metric: "85%",
    title: "Manual Transcription Saved",
    detail: "Operations teams eliminate repetitive data transcription from unstructured PDFs directly into ERPs.",
    category: "Efficiency",
    icon: TrendingUp,
  },
];

export function TransformationOutcomes() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        >
          <SectionHeading
            label="04 / Outcomes"
            title="Engineering depth, measured by real metrics."
            description="We evaluate software by tangible operational hours saved, errors eliminated, and latency reduced for production workflows."
          />
        </motion.div>

        {/* 4 Metric Cards with Staggered Viewport Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: "rgba(56, 189, 248, 0.45)" }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="p-6 rounded-xl border border-white/[0.08] bg-[#0B0F17] transition-all flex flex-col justify-between space-y-4 hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)] group cursor-default"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                    <span>{item.category}</span>
                    <div className="p-1.5 rounded-md bg-[#070A0F] border border-white/5 group-hover:border-[#38BDF8]/30 transition-colors">
                      <Icon className="w-4 h-4 text-[#38BDF8]" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-[#F1F5F9] tabular-nums tracking-tight group-hover:text-white transition-colors">
                    {item.metric}
                  </div>
                  <h3 className="text-sm font-semibold text-[#F1F5F9] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Corporate Trust Strip with Animated Heartbeat */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-5 rounded-xl border border-white/[0.08] bg-[#0B0F17] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]"
        >
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"
            />
            <span className="text-[#F1F5F9] font-medium">Delivery standards:</span>
            <span>100% strict TypeScript · OWASP compliant · Mutual NDA guaranteed</span>
          </div>
          <span className="text-[#64748B]">Pune Studio · Global Deploy</span>
        </motion.div>
      </div>
    </section>
  );
}
