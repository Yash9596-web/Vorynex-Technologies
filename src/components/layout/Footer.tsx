import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070A0F] text-[#94A3B8] pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Editorial Ethos */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-heading font-bold text-xl tracking-tight text-[#F1F5F9]">
                VORYNEX<span className="text-[#38BDF8]">.</span>
              </span>
              <span className="block font-mono text-[10px] text-[#64748B] tracking-wider uppercase mt-0.5">
                Technologies
              </span>
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Software engineering studio based in Pune, India, working worldwide.
              We build custom software, digital platforms, and deterministic automation.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#CBD5E1]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>Pune, India · Global Deploy</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs text-[#F1F5F9]">
              Capabilities
            </div>
            <ul className="space-y-2 text-xs">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[#F1F5F9] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs text-[#F1F5F9]">
              Industries
            </div>
            <ul className="space-y-2 text-xs">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="hover:text-[#F1F5F9] transition-colors"
                  >
                    {ind.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/agency-partnership"
                  className="hover:text-[#F1F5F9] transition-colors text-[#38BDF8]"
                >
                  Agency Partner Hub →
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Inquiries Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs text-[#F1F5F9]">
              Studio
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/work" className="hover:text-[#F1F5F9] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#F1F5F9] transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F1F5F9] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#F1F5F9] transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F1F5F9] transition-colors text-[#38BDF8]">
                  Start a Project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Ethos and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Vorynex Technologies.</span>
            <span>·</span>
            <span className="text-[#94A3B8]">Engineered with architectural discipline.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#94A3B8] transition-colors">
              Privacy &amp; NDA
            </Link>
            <Link href="/contact" className="hover:text-[#94A3B8] transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
