import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface VisualAssetCardProps {
  src: string;
  alt: string;
  badge?: string;
  title?: string;
  className?: string;
  priority?: boolean;
}

export function VisualAssetCard({
  src,
  alt,
  badge,
  title,
  className,
  priority = false,
}: VisualAssetCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-white/[0.08] bg-[#0B0F17] overflow-hidden transition-colors hover:border-white/[0.16]",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070A0F]">
        <Image
          src={src}
          alt={alt}
          width={755}
          height={499}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Metadata Strip */}
      {(badge || title) && (
        <div className="relative z-10 px-4 py-2.5 bg-[#090D14] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
          {badge && (
            <span className="text-[#38BDF8] text-[11px] font-semibold">
              {badge}
            </span>
          )}
          {title && (
            <span className="text-[#94A3B8] text-[11px] truncate max-w-[200px]">
              {title}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
