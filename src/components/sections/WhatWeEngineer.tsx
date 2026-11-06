"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Cpu, Network, Cloud, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceDetailModal, type ServiceModalItem } from "@/components/watermelon/ServiceDetailModal";
import { cn } from "@/lib/utils";

// 4 Core Technology Pillars
const visualPillars = [
  {
    id: "software-development",
    number: "01",
    pillar: "Software Development",
    title: "Digital Architecture",
    tagline: "Scalable digital platforms & custom software engines",
    description: "Modular software architectures, strict typing, and high-concurrency database designs engineered around your proprietary workflows.",
    image: "/visuals/vorynex-data-architecture.webp",
    alt: "Vorynex Digital Architecture - Modular software system structure, database entities, and engineering blueprint",
    href: "/services/custom-software",
    icon: Layers,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    id: "business-automation",
    number: "02",
    pillar: "Business Automation",
    title: "Smart Automation",
    tagline: "Deterministic document pipelines & approval gates",
    description: "High-volume transactional document parsing, automated line-item extraction, and human-in-the-loop review dashboards.",
    image: "/visuals/vorynex-automation-flow.webp",
    alt: "Vorynex Smart Automation - Deterministic business workflow pipelines and multi-stage processing nodes",
    href: "/services/automation-ai",
    icon: Network,
    tags: ["Multimodal OCR", "Redis", "BullMQ", "ERP Sync"],
  },
  {
    id: "ai-solutions",
    number: "03",
    pillar: "AI & Technology",
    title: "AI Intelligence",
    tagline: "Contextual reasoning & intelligent technology systems",
    description: "Practical machine learning implementations with strict schema validation, zero-hallucination guardrails, and enterprise privacy.",
    image: "/visuals/vorynex-ai-network.webp",
    alt: "Vorynex AI Intelligence - Neural network graph, multimodal reasoning, and cognitive technology solutions",
    href: "/services/automation-ai",
    icon: Cpu,
    tags: ["Agentic Workflows", "Vector Embeddings", "SSE Streaming"],
  },
  {
    id: "cloud-integrations",
    number: "04",
    pillar: "Cloud & Integrations",
    title: "Connected Technology",
    tagline: "Resilient API gateways & distributed cloud bridges",
    description: "Fault-tolerant webhook pipelines, idempotent event consumers, and bi-directional synchronizations connecting enterprise ERPs and CRMs.",
    image: "/visuals/vorynex-connected-cloud.webp",
    alt: "Vorynex Connected Technology - Distributed cloud services, REST and GraphQL API gateways, and system integrations",
    href: "/services/api-integration",
    icon: Cloud,
    tags: ["REST / GraphQL", "Webhooks", "Circuit Breakers"],
  },
];

export function WhatWeEngineer() {
  const [activePillar, setActivePillar] = useState(visualPillars[0]);
  const [selectedService, setSelectedService] = useState<ServiceModalItem | null>(null);

  const openPillarModal = (p: (typeof visualPillars)[0]) => {
    const matchedService =
      services.find((s) => s.slug === p.href.replace("/services/", "")) ||
      (p.id === "business-automation" || p.id === "ai-solutions"
        ? services.find((s) => s.slug === "automation-ai")
        : services[0]);

    setSelectedService({
      id: p.id,
      slug: matchedService?.slug,
      number: p.number,
      category: p.pillar,
      title: p.title,
      tagline: p.tagline,
      description: matchedService?.description || p.description,
      image: p.image,
      imageAlt: p.alt,
      capabilities: matchedService?.capabilities,
      businessProblems: matchedService?.businessProblems,
      deliverables: matchedService?.deliverables,
      techStack: Array.from(new Set([...p.tags, ...(matchedService?.techStack || [])])),
      href: p.href,
    });
  };

  const openServiceCatalogModal = (service: (typeof services)[0]) => {
    setSelectedService({
      id: service.id,
      slug: service.slug,
      number: service.number,
      category: service.category,
      title: service.title,
      tagline: service.tagline,
      description: service.description,
      image: service.image,
      imageAlt: service.imageAlt,
      capabilities: service.capabilities,
      businessProblems: service.businessProblems,
      deliverables: service.deliverables,
      techStack: service.techStack,
      href: `/services/${service.slug}`,
    });
  };

  return (
    <section className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#070A0F]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="02 / Capabilities"
          title="What we engineer."
          description="Disciplined software execution across digital architecture, business automation, AI intelligence, and connected cloud infrastructure. Click any capability to view full architecture specifications."
        />

        {/* 4 Core Technology Visual Pillars with Watermelon Expandable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {visualPillars.map((p) => {
            const Icon = p.icon;
            const isSelected = activePillar.id === p.id;
            const layoutId = `service-card-${p.id}`;

            return (
              <motion.div
                key={p.id}
                layoutId={layoutId}
                onMouseEnter={() => setActivePillar(p)}
                onClick={() => openPillarModal(p)}
                className={cn(
                  "rounded-xl border transition-all flex flex-col justify-between overflow-hidden bg-[#0B0F17] cursor-pointer group hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]",
                  isSelected
                    ? "border-[#38BDF8]/60 bg-[#0E1420]"
                    : "border-white/[0.08] hover:border-white/[0.2]"
                )}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                {/* Visual Asset Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070A0F]">
                  <motion.div
                    layoutId={`image-${layoutId}`}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={p.image}
                      alt={p.alt}
                      width={755}
                      height={499}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Top Technical Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded bg-[#070A0F]/90 border border-white/[0.08] text-[10px] font-mono text-[#38BDF8] backdrop-blur-sm">
                      {p.number} / {p.pillar}
                    </span>
                  </div>

                  {/* Click indicator badge on hover */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#38BDF8] text-[#070A0F] text-[10px] font-mono font-semibold shadow-sm">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Quick View</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#38BDF8]" />
                      <motion.h3
                        layoutId={`title-${layoutId}`}
                        className="text-base font-semibold text-[#F1F5F9] group-hover:text-white transition-colors"
                      >
                        {p.title}
                      </motion.h3>
                    </div>
                    <motion.p
                      layoutId={`subtitle-${layoutId}`}
                      className="text-xs text-[#38BDF8] font-medium leading-tight"
                    >
                      {p.tagline}
                    </motion.p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed pt-1 line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-[#94A3B8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] group-hover:text-[#7DD3FC] transition-colors pt-1">
                      <span>Explore specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Execution Catalog */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs font-mono text-[#64748B]">
              Execution Catalog — Click row for quick modal preview
            </div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {services.map((service) => (
              <div
                key={service.slug}
                onClick={() => openServiceCatalogModal(service)}
                className="py-6 px-4 -mx-4 rounded-lg hover:bg-white/[0.03] border border-transparent hover:border-white/[0.08] transition-all cursor-pointer group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Number & Category */}
                  <div className="md:col-span-2 flex items-center md:items-start gap-3">
                    <span className="font-mono text-sm font-semibold text-[#38BDF8]">
                      {service.number}
                    </span>
                    <span className="font-mono text-xs text-[#64748B] mt-0.5">
                      / {service.category}
                    </span>
                  </div>

                  {/* Service Title & Tagline */}
                  <div className="md:col-span-4 space-y-1">
                    <h4 className="text-lg font-semibold text-[#F1F5F9] group-hover:text-[#38BDF8] transition-colors flex items-center gap-2">
                      <span>{service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#38BDF8]" />
                    </h4>
                    <p className="text-xs sm:text-sm text-[#94A3B8]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Service Description & Deliverables */}
                  <div className="md:col-span-4 space-y-2">
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Link / Action */}
                  <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] group-hover:text-[#7DD3FC] transition-colors">
                      <span>Inspect</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Watermelon Animated Expandable Service Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
