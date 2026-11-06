import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, User, Share2 } from "lucide-react";
import { insights } from "@/data/insights";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = insights.find((i) => i.slug === params.slug);
  if (!insight) return { title: "Insight Not Found" };

  return {
    title: `${insight.title} — Vorynex Technologies`,
    description: insight.excerpt,
  };
}

export default function InsightDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const insight = insights.find((i) => i.slug === params.slug);
  if (!insight) notFound();

  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#94A3B8] hover:text-[#38BDF8] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Technical Insights</span>
        </Link>

        {/* Article Meta */}
        <div className="space-y-4 mb-10 pb-8 border-b border-[#16202E]">
          <Badge variant="accent">{insight.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.15]">
            {insight.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#64748B] pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{insight.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{insight.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="text-[#94A3B8]">Vorynex Engineering Studio</span>
            </div>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className="p-6 rounded-xl bg-[#0B111A] border-l-2 border-[#38BDF8] border-[#16202E] text-base sm:text-lg text-[#F1F5F9] leading-relaxed mb-10 font-medium">
          {insight.excerpt}
        </div>

        {/* Body Paragraphs */}
        <article className="space-y-6 text-[#94A3B8] leading-relaxed text-base sm:text-lg">
          {insight.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Post Footer & Discussion CTA */}
        <div className="mt-16 pt-8 border-t border-[#16202E] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-semibold text-[#F1F5F9]">
              Want to discuss this architecture?
            </h4>
            <p className="text-xs text-[#94A3B8]">
              Reach out directly to our engineering team in Pune.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070A0F] font-semibold text-xs transition-colors shrink-0"
          >
            <span>Discuss With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

