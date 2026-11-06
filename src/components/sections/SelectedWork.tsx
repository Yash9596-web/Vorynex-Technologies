"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function SelectedWork() {
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
            label="01 / Selected Work"
            title="Real products engineered for operations."
            description="We build working software, not speculative concept decks. Here are three active platforms engineered by our studio."
            className="mb-0"
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-[#7DD3FC] transition-colors self-start md:self-end group"
          >
            <span>View all projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Project Cards with Scroll Viewport Triggers */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ borderColor: "rgba(255, 255, 255, 0.18)" }}
              className="rounded-2xl border border-white/[0.08] bg-[#0B0F17] overflow-hidden transition-all shadow-[0_15px_45px_rgba(0,0,0,0.5)] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Project Details & Metrics */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#38BDF8] font-semibold">
                          {project.number}
                        </span>
                        <span className="text-[#64748B]">/</span>
                        <Badge variant="outline">{project.category}</Badge>
                      </div>
                      <span className="text-xs font-mono text-[#64748B]">{project.year}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#F1F5F9] tracking-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#38BDF8] font-medium mt-1">
                        {project.headline}
                      </p>
                    </div>

                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono text-[#64748B]">
                        Core Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                            <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#070A0F] border border-white/[0.06] text-xs font-mono text-[#94A3B8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Metrics Footer */}
                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-lg font-bold text-[#F1F5F9] font-mono tabular-nums leading-none">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-[#64748B] mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#070A0F] text-xs font-mono text-[#10B981] border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        <span>{project.liveStatus}</span>
                      </span>

                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] text-xs font-semibold font-mono transition-colors shadow-sm"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: Visual Asset Showcase with Hover Zoom */}
                <div className="lg:col-span-5 relative bg-[#070A0F] min-h-[300px] lg:min-h-full overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full min-h-[320px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent lg:hidden" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
