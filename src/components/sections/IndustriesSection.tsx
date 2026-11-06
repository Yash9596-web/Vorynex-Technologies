"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Minus, Building2, Server, Laptop, ShoppingCart, Sparkles } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { industries, Industry } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function IndustryIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "saas-companies":
      return <Laptop className={className} />;
    case "enterprise-logistics":
      return <Building2 className={className} />;
    case "digital-agencies":
      return <Server className={className} />;
    case "b2b-commerce":
      return <ShoppingCart className={className} />;
    default:
      return <Building2 className={className} />;
  }
}

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState<Industry>(industries[0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 350, damping: 25 },
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
            label="03 / Industries"
            title="Sectors we serve."
            description="Domain-intelligent software engineering tailored to the operational realities, regulatory constraints, and data flows of your industry."
            className="mb-0"
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-[#7DD3FC] transition-colors self-start md:self-end group"
          >
            <span>Explore all industry solutions</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Industry Tabs & Deep-Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-4 space-y-2.5">
            {industries.map((ind) => {
              const isActive = activeTab.id === ind.id;
              return (
                <motion.button
                  key={ind.id}
                  onClick={() => setActiveTab(ind)}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    "relative w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group cursor-pointer",
                    isActive
                      ? "bg-[#0E1420] border-[#38BDF8]/60 text-[#F1F5F9] shadow-[0_0_20px_rgba(56,189,248,0.12)]"
                      : "bg-[#0B0F17] border-white/[0.08] text-[#94A3B8] hover:border-white/[0.16] hover:text-[#F1F5F9]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-industry-indicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-xl border border-[#38BDF8]/70 pointer-events-none"
                    />
                  )}
                  <div className="flex items-center gap-3 relative z-10">
                    <IndustryIcon
                      id={ind.id}
                      className={cn(
                        "w-5 h-5 transition-colors",
                        isActive ? "text-[#38BDF8]" : "text-[#64748B] group-hover:text-[#94A3B8]"
                      )}
                    />
                    <div>
                      <div className="text-xs font-mono text-[#38BDF8]">{ind.number} / Sector</div>
                      <div className="text-sm font-semibold">{ind.title}</div>
                    </div>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform relative z-10",
                      isActive
                        ? "text-[#38BDF8] translate-x-1"
                        : "text-[#64748B] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                    )}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right: Selected Industry Blueprint Showcase */}
          <div className="lg:col-span-8 p-6 sm:p-10 rounded-xl border border-white/[0.08] bg-[#0B0F17]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="space-y-8"
              >
                <div className="space-y-3 pb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                    <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Sector Blueprint</span>
                    <span>·</span>
                    <span className="text-[#38BDF8]">Production Validated</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#F1F5F9] tracking-tight">
                    {activeTab.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#38BDF8] font-medium">
                    {activeTab.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
                    {activeTab.description}
                  </p>
                </div>

                {/* Challenges & Solutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Pain Points */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                      Operational Friction
                    </div>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-2.5"
                    >
                      {activeTab.challenges.map((c, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          className="flex items-start gap-2.5 text-xs text-[#CBD5E1]"
                        >
                          <Minus className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{c}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                      Engineered Response
                    </div>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-2.5"
                    >
                      {activeTab.solutions.map((s, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          className="flex items-start gap-2.5 text-xs text-[#CBD5E1]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{s}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Metrics / Case Ref Footer */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4">
                    {activeTab.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-[#F1F5F9]">
                          {m.value}
                        </span>
                        <span className="text-[11px] font-mono text-[#64748B]">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/industries#${activeTab.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-[#7DD3FC] transition-colors"
                  >
                    <span>Read case architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
