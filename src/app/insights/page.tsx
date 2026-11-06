import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { insights } from "@/data/insights";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Technical Insights & Essays — Vorynex Technologies",
  description:
    "Engineering essays on software architecture, deterministic automation, TypeScript best practices, and why we avoid 'vibe-coded' products.",
};

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="accent">INSIGHTS // TECHNICAL ESSAYS</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1]">
            Engineering thoughts, lessons, and principles.
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed pt-2">
            No shallow marketing fluff or generic AI summaries. We document our real engineering experiences, architectural decisions, and software craft.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="p-8 rounded-xl border border-[#16202E] bg-[#0B111A] hover:border-[#38BDF8] transition-all flex flex-col justify-between group shadow-card"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                  <span className="text-[#38BDF8] uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-[#F1F5F9] group-hover:text-[#38BDF8] transition-colors leading-snug">
                  {insight.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
                  {insight.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#16202E] flex items-center justify-between text-xs font-mono text-[#94A3B8] group-hover:text-[#F1F5F9]">
                <span>{insight.date}</span>
                <span className="flex items-center gap-1 text-[#38BDF8]">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

