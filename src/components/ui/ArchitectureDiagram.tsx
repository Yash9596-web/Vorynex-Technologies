"use client";

import React, { useState } from "react";
import {
  Layers,
  FileCode2,
  MonitorCheck,
  Server,
  ShieldCheck,
  Check,
  Cpu,
  Database,
  GitBranch,
  Activity,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface StepDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  nodes: { label: string; sub: string; icon: React.ElementType }[];
  telemetry: { label: string; value: string };
}

const steps: StepDetail[] = [
  {
    id: "requirements",
    number: "01",
    title: "Business Requirements",
    subtitle: "Problem discovery & operational audit",
    description: "Deep technical interrogation of existing bottlenecks, data structures, edge cases, and commercial objectives. We translate operational friction into clear engineering specifications.",
    details: ["Stakeholder workflow audits", "Edge-case discovery & guardrails", "Scope boundary definition"],
    nodes: [
      { label: "Operational Friction", sub: "Bottleneck Audits", icon: Layers },
      { label: "Schema Boundaries", sub: "Contract Discovery", icon: Workflow },
      { label: "Deterministic Spec", sub: "Target ADRs", icon: FileCode2 },
    ],
    telemetry: { label: "Scope Precision", value: "100% Deterministic" },
  },
  {
    id: "architecture",
    number: "02",
    title: "System Architecture",
    subtitle: "System design & data modeling",
    description: "Designing database schemas, message queues, API contracts, and security boundaries. Decisions are documented in Architecture Decision Records (ADRs) to guarantee longevity.",
    details: ["Entity-relationship diagrams", "OpenAPI & Zod contract specs", "Concurrency & failure recovery"],
    nodes: [
      { label: "API Gateway", sub: "REST & GraphQL", icon: Server },
      { label: "Message Broker", sub: "Redis & BullMQ", icon: Cpu },
      { label: "Persistent Store", sub: "PostgreSQL Pooling", icon: Database },
    ],
    telemetry: { label: "Schema Validation", value: "Strict Type Safety" },
  },
  {
    id: "experience",
    number: "03",
    title: "Interface Experience",
    subtitle: "Editorial UI & ergonomics",
    description: "Constructing high-fidelity, cognitive interfaces focused on clarity and data density. Typography and spacing lead the visual hierarchy without superfluous decorations.",
    details: ["Design token consistency", "Sub-second interaction loops", "Accessible WCAG AA standards"],
    nodes: [
      { label: "Design Tokens", sub: "Obsidian Palette", icon: Sparkles },
      { label: "Ergonomics", sub: "WCAG AA Compliant", icon: MonitorCheck },
      { label: "Interaction Loop", sub: "< 100ms Latency", icon: Activity },
    ],
    telemetry: { label: "Interaction Target", value: "Sub-100ms INP" },
  },
  {
    id: "engineering",
    number: "04",
    title: "Development & Integration",
    subtitle: "Build, test & connect",
    description: "Deterministic implementation using strictly typed TypeScript, isolated microservices, and comprehensive automated test suites. Code is clean, maintainable, and well-commented.",
    details: ["Full-stack type safety", "Unit & integration test suites", "Idempotent event processing"],
    nodes: [
      { label: "Strict TypeScript", sub: "Zero-Any Baseline", icon: FileCode2 },
      { label: "Automated Suite", sub: "Vitest & E2E", icon: Check },
      { label: "Deployment Image", sub: "Docker Container", icon: GitBranch },
    ],
    telemetry: { label: "Test Coverage", value: "Regression Verified" },
  },
  {
    id: "deployment",
    number: "05",
    title: "Deployment & Support",
    subtitle: "Deliver & continuously improve",
    description: "Automated zero-downtime CI/CD deployment on containerized cloud runtimes with continuous observability, error telemetry, and dedicated maintenance agreements.",
    details: ["Automated rollback guards", "Continuous APM telemetry", "Uptime & performance SLAs"],
    nodes: [
      { label: "CI/CD Pipeline", sub: "Zero-Downtime Rollout", icon: GitBranch },
      { label: "Cloud Container", sub: "Multi-Zone Edge", icon: Server },
      { label: "APM Observability", sub: "24/7 Health Beacon", icon: Activity },
    ],
    telemetry: { label: "Target Availability", value: "99.9% Production SLA" },
  },
];

function StepIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "requirements":
      return <Layers className={className} />;
    case "architecture":
      return <FileCode2 className={className} />;
    case "experience":
      return <MonitorCheck className={className} />;
    case "engineering":
      return <Server className={className} />;
    case "deployment":
      return <ShieldCheck className={className} />;
    default:
      return <Layers className={className} />;
  }
}

export function ArchitectureDiagram() {
  const [selectedStep, setSelectedStep] = useState<StepDetail>(steps[1]); // Default to System Architecture

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 350, damping: 25 },
    },
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0B0F17] p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* Pipeline Navigation with Animated Flow Stream */}
      <div className="relative mb-8">
        {/* Animated Connecting Data Stream (Visible on md+ screens) */}
        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-white/[0.08] z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
          {steps.map((step) => {
            const isSelected = selectedStep.id === step.id;

            return (
              <motion.button
                key={step.id}
                onClick={() => setSelectedStep(step)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                  "relative text-left p-4 rounded-xl border transition-all text-xs group cursor-pointer",
                  isSelected
                    ? "bg-[#0E1624] border-[#38BDF8]/60 text-[#F1F5F9] shadow-[0_0_20px_rgba(56,189,248,0.18)]"
                    : "bg-[#070A0F] border-white/[0.06] text-[#94A3B8] hover:border-white/[0.16] hover:bg-[#090D14]"
                )}
              >
                {/* Active Indicator Aura */}
                {isSelected && (
                  <motion.div
                    layoutId="active-step-pill"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    className="absolute inset-0 rounded-xl border border-[#38BDF8]/80 pointer-events-none"
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "font-mono text-xs",
                      isSelected ? "text-[#38BDF8] font-bold" : "text-[#64748B]"
                    )}
                  >
                    PHASE {step.number}
                  </span>
                  <div
                    className={cn(
                      "p-1 rounded-md transition-colors",
                      isSelected ? "bg-[#38BDF8]/15 text-[#38BDF8]" : "text-[#64748B] group-hover:text-[#94A3B8]"
                    )}
                  >
                    <StepIcon id={step.id} className="w-4 h-4" />
                  </div>
                </div>

                <div className="font-semibold text-sm text-[#F1F5F9] mb-1 leading-snug">
                  {step.title}
                </div>
                <div className="text-[11px] text-[#94A3B8] line-clamp-1">
                  {step.subtitle}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Selected Step Deep Dive Inspector with Animated Architecture Schematic */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStep.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="p-5 sm:p-7 rounded-xl bg-[#070A0F] border border-white/[0.08] space-y-6"
        >
          {/* Phase Header & Live Telemetry Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono mb-1">
                <span className="text-[#38BDF8] font-semibold">
                  PHASE {selectedStep.number} SPECIFICATION
                </span>
                <span className="text-[#64748B]">·</span>
                <span className="text-[#94A3B8]">{selectedStep.subtitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] tracking-tight">
                {selectedStep.title}
              </h3>
            </div>

            {/* Live Telemetry Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E1624] border border-[#38BDF8]/30 font-mono text-xs text-[#38BDF8] self-start sm:self-auto shadow-sm">
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
              />
              <span className="text-[#94A3B8]">{selectedStep.telemetry.label}:</span>
              <span className="font-semibold text-white">{selectedStep.telemetry.value}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal">
            {selectedStep.description}
          </p>

          {/* Animated Technical Architecture Node Schematic */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Architectural Data Flow Pipeline</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {selectedStep.nodes.map((node, idx) => {
                const NodeIcon = node.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.08 * idx, type: "spring", stiffness: 350, damping: 25 }}
                    className="relative p-4 rounded-xl bg-[#0B101A] border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-[#070A0F] border border-white/10 text-[#38BDF8] group-hover:scale-105 transition-transform">
                        <NodeIcon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-[#64748B]">NODE 0{idx + 1}</span>
                    </div>
                    <div className="text-sm font-semibold text-[#F1F5F9] mb-0.5">
                      {node.label}
                    </div>
                    <div className="text-xs font-mono text-[#38BDF8]">
                      {node.sub}
                    </div>

                    {/* Connecting Arrow between nodes */}
                    {idx < selectedStep.nodes.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 items-center justify-center rounded-full bg-[#070A0F] border border-white/15 text-[#38BDF8] text-[10px]">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Key Deliverables Staggered List */}
          <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
            <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
              Enforced Execution Deliverables
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
            >
              {selectedStep.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] text-xs text-[#CBD5E1] font-mono transition-colors"
                >
                  <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span className="leading-snug">{detail}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
