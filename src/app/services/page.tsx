import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Minus } from "lucide-react";
import { services } from "@/data/services";

export const metadata = {
  title: "Engineering Services — Vorynex Technologies",
  description:
    "Explore our complete software engineering capabilities: Web Development, Application Development, Custom Software, Automation & AI, API Integration, and Technical SEO.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#070A0F] text-[#94A3B8] min-h-screen">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Page Hero */}
        <header className="max-w-3xl pt-8 pb-16 sm:pb-20 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#38BDF8] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>Capabilities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.12] mb-5">
            Software capabilities engineered for scale.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
            We engineer bespoke software systems with strict typing, modular architectures, automated testing suites, and long-term maintainability.
          </p>

          {/* Quick Index Bar */}
          <nav aria-label="Service index" className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.15] text-xs font-mono text-[#CBD5E1] transition-colors"
              >
                <span className="text-[#38BDF8]">{service.number}</span>
                <span>{service.title}</span>
              </a>
            ))}
          </nav>
        </header>

        {/* Detailed Service Deep-Dives */}
        <div className="space-y-12 sm:space-y-16 pt-12 sm:pt-16">
          {services.map((service) => (
            <section
              key={service.slug}
              id={service.slug}
              className="p-6 sm:p-10 rounded-xl border border-white/[0.08] bg-[#0B0F17] hover:border-white/[0.16] transition-colors scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column (7 cols): Editorial & Technical Details */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Service Header */}
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#64748B] mb-2">
                      <span className="text-[#38BDF8] font-semibold">{service.number}</span>
                      <span>/</span>
                      <span className="uppercase tracking-wider">{service.category}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#F1F5F9] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm font-medium text-[#38BDF8] mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Operational Problems & Deliverables Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    {/* Problems Solved */}
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                        Problems Resolved
                      </h3>
                      <ul className="space-y-2 text-xs text-[#CBD5E1]">
                        {service.businessProblems.slice(0, 3).map((prob, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Minus className="w-3.5 h-3.5 text-[#64748B] mt-0.5 shrink-0" />
                            <span className="leading-snug">{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                        Key Deliverables
                      </h3>
                      <ul className="space-y-2 text-xs text-[#CBD5E1]">
                        {service.deliverables.slice(0, 3).map((del, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#38BDF8] mt-0.5 shrink-0" />
                            <span className="leading-snug">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technology Stack & In-Depth Link */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#CBD5E1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-[#7DD3FC] transition-colors group"
                    >
                      <span>Explore specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Column (5 cols): Architecture Visual with Restrained Technical Frame */}
                <div className="lg:col-span-5">
                  <div className="rounded-lg border border-white/[0.08] bg-[#070A0F] overflow-hidden">
                    <div className="relative aspect-[16/10] w-full bg-[#03060A]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={755}
                        height={499}
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="px-4 py-2.5 bg-[#0A0E17] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                      <span>Spec: {service.slug}</span>
                      <span className="text-[#38BDF8]">v1.0 // Production</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom Technical Discovery Block */}
        <footer className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-xl bg-[#0B0F17] border border-white/[0.08] text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#F1F5F9]">
            Need a custom architectural evaluation?
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-lg mx-auto">
            We provide upfront technical discovery sprints to evaluate your database models, API contracts, and scalability boundaries before committing to implementation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-sm transition-colors"
            >
              <span>Schedule Technical Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
