"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "motion/react";
import {
  X,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  ExternalLink,
  Layers,
  Sparkles,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

export interface ServiceModalItem {
  id: string;
  slug?: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  capabilities?: string[];
  deliverables?: string[];
  businessProblems?: string[];
  techStack?: string[];
  href?: string;
}

interface ServiceDetailModalProps {
  service: ServiceModalItem | null;
  onClose: () => void;
}

type TabType = "capabilities" | "problems" | "deliverables";

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("capabilities");

  useEffect(() => {
    if (!service) return;
    setActiveTab("capabilities");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const layoutId = `service-card-${service.id}`;
  const targetHref = service.href || (service.slug ? `/services/${service.slug}` : "/services");

  const tabs = [
    { id: "capabilities" as TabType, label: "Capabilities", icon: Layers, count: service.capabilities?.length },
    { id: "problems" as TabType, label: "Problems Solved", icon: AlertCircle, count: service.businessProblems?.length },
    { id: "deliverables" as TabType, label: "Deliverables", icon: PackageCheck, count: service.deliverables?.length },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 380, damping: 26 },
    },
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop overlay with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window with Motion Shared Layout & Spring Physics */}
        <motion.div
          layoutId={layoutId}
          transition={{ type: "spring", stiffness: 350, damping: 32 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B1019] rounded-2xl overflow-hidden border border-white/15 z-10 flex flex-col md:flex-row shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)]"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Animated Close Button */}
          <motion.button
            onClick={onClose}
            aria-label="Close dialog"
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center bg-[#070A0F]/80 hover:bg-[#121A26] rounded-full border border-white/15 text-[#F8FAFC] hover:text-[#38BDF8] transition-colors backdrop-blur-md cursor-pointer"
          >
            <X className="w-4 h-4" />
          </motion.button>

          {/* Left Column: Visual Showcase */}
          <div className="relative h-56 sm:h-64 md:h-auto md:w-5/12 shrink-0 overflow-hidden bg-[#070A0F] group">
            <motion.div
              layoutId={`image-${layoutId}`}
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src={service.image}
                alt={service.imageAlt || service.title}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1019] via-[#0B1019]/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0B1019]" />

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070A0F]/90 border border-[#38BDF8]/30 text-[11px] font-mono text-[#38BDF8] backdrop-blur-sm shadow-md"
              >
                <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                <span>{service.number} / {service.category}</span>
              </motion.span>
            </div>

            {/* Bottom Live Architecture Verification Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 300, damping: 24 }}
              className="absolute bottom-4 left-4 right-4 z-20 hidden md:block"
            >
              <div className="p-3.5 rounded-xl bg-[#070A0F]/85 border border-white/10 backdrop-blur-md shadow-lg space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-[#F8FAFC] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Deterministic Spec</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <motion.span
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
                    />
                    <span className="text-[10px] font-mono text-[#10B981]">Active</span>
                  </div>
                </div>
                <p className="text-[10px] text-[#94A3B8] leading-tight">
                  Zero hallucination guardrails, strict JSON schema validation & human-in-the-loop gates.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Content */}
          <div className="p-5 sm:p-7 md:p-8 w-full md:w-7/12 flex flex-col h-full overflow-y-auto">
            {/* Header */}
            <div className="mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-semibold text-[#38BDF8]">
                  {service.number}
                </span>
                <span className="text-white/20">/</span>
                <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider">
                  {service.category}
                </span>
              </div>

              <motion.h3
                layoutId={`title-${layoutId}`}
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#F8FAFC]"
              >
                {service.title}
              </motion.h3>

              <motion.p
                layoutId={`subtitle-${layoutId}`}
                className="text-xs sm:text-sm font-medium text-[#38BDF8] mt-1.5"
              >
                {service.tagline}
              </motion.p>
            </div>

            {/* Overview Description */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed mb-5"
            >
              {service.description}
            </motion.p>

            {/* Interactive Motion Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#070A0F] rounded-xl border border-white/10 mb-4 overflow-x-auto">
              {tabs.map((tab) => {
                const isCurrent = activeTab === tab.id;
                const TabIcon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors shrink-0 cursor-pointer ${
                      isCurrent ? "text-[#F8FAFC]" : "text-[#94A3B8] hover:text-[#CBD5E1]"
                    }`}
                  >
                    {isCurrent && (
                      <motion.div
                        layoutId="modal-active-tab-indicator"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        className="absolute inset-0 rounded-lg bg-[#141F2E] border border-[#38BDF8]/40 shadow-sm"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <TabIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{tab.label}</span>
                      {tab.count !== undefined && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-[#94A3B8]">
                          {tab.count}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Animated Tab Content Container */}
            <div className="grow min-h-[140px]">
              <AnimatePresence mode="wait">
                {activeTab === "capabilities" && (
                  <motion.div
                    key="capabilities"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -6 }}
                    className="space-y-2.5"
                  >
                    {(service.capabilities || []).map((cap, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#38BDF8] mt-0.5 shrink-0" />
                        <span className="text-xs text-[#CBD5E1] leading-relaxed">{cap}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "problems" && (
                  <motion.div
                    key="problems"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -6 }}
                    className="space-y-2.5"
                  >
                    {(service.businessProblems || []).map((prob, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors"
                      >
                        <AlertCircle className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                        <span className="text-xs text-[#CBD5E1] leading-relaxed">{prob}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "deliverables" && (
                  <motion.div
                    key="deliverables"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  >
                    {(service.deliverables || []).map((deliv, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#38BDF8]/30 transition-colors"
                      >
                        <span className="text-[11px] font-mono text-[#38BDF8] block mb-1">
                          DELIVERABLE 0{i + 1}
                        </span>
                        <span className="text-xs text-[#CBD5E1] leading-relaxed">{deliv}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tech Stack Chips with Spring Hover */}
            {service.techStack && service.techStack.length > 0 && (
              <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                  <Cpu className="w-3 h-3 text-[#38BDF8]" />
                  <span>Verified Technology Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="px-2.5 py-1 rounded bg-[#070A0F] border border-white/10 hover:border-[#38BDF8]/40 text-[11px] font-mono text-[#38BDF8] cursor-default transition-colors shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions with Micro-Interactions */}
            <div className="pt-5 mt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#contact"
                  onClick={onClose}
                  className="w-full px-5 py-2.5 bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-xs sm:text-sm rounded-lg transition-colors text-center shadow-md flex items-center justify-center gap-2"
                >
                  <span>Consult on this Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={targetHref}
                  onClick={onClose}
                  className="w-full px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F1F5F9] hover:text-[#38BDF8] text-xs font-mono rounded-lg transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <span>Full Service Specs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
