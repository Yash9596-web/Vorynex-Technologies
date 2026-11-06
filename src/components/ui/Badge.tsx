import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "warning" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-white/[0.03] text-[#94A3B8] border-white/[0.08]",
    accent: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    outline: "bg-transparent text-[#94A3B8] border-white/[0.08]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-mono",
    md: "text-xs px-2.5 py-1 font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
