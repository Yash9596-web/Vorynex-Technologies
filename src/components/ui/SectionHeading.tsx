import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {label && (
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-[#38BDF8]">
            {label}
          </span>
          <div className="h-px w-8 bg-white/[0.08]" />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#F1F5F9] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
