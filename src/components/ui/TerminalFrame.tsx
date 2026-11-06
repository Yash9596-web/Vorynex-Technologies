"use client";

import React, { useState } from "react";
import { Terminal, Shield, GitBranch, Cpu, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalFrameProps {
  title?: string;
  className?: string;
}

export function TerminalFrame({
  title = "devpilot-ai // live-inspection",
  className,
}: TerminalFrameProps) {
  const [activeTab, setActiveTab] = useState<"logs" | "architecture" | "specs">("logs");

  return (
    <div
      className={cn(
        "rounded-lg border border-[#16202E] bg-[#0B111A] shadow-card overflow-hidden text-left font-mono text-xs",
        className
      )}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B111A] border-b border-[#16202E]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16202E] border border-[#1E2D44]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#16202E] border border-[#1E2D44]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#16202E] border border-[#1E2D44]" />
          </div>
          <span className="text-[#94A3B8] text-[11px] font-mono tracking-wide">
            {title}
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("logs")}
            className={cn(
              "px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5",
              activeTab === "logs"
                ? "bg-[#121A26] text-[#38BDF8] border border-[#16202E]"
                : "text-[#64748B] hover:text-[#94A3B8]"
            )}
          >
            <Terminal className="w-3 h-3" />
            <span>telemetry</span>
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={cn(
              "px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5",
              activeTab === "architecture"
                ? "bg-[#121A26] text-[#38BDF8] border border-[#16202E]"
                : "text-[#64748B] hover:text-[#94A3B8]"
            )}
          >
            <Cpu className="w-3 h-3" />
            <span>architecture</span>
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={cn(
              "px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5",
              activeTab === "specs"
                ? "bg-[#121A26] text-[#38BDF8] border border-[#16202E]"
                : "text-[#64748B] hover:text-[#94A3B8]"
            )}
          >
            <Shield className="w-3 h-3" />
            <span>audit</span>
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-5 min-h-[280px] bg-[#070A0F] text-[#94A3B8] leading-relaxed">
        {activeTab === "logs" && (
          <div className="space-y-2.5 font-mono text-[11px] sm:text-xs">
            <div className="flex items-center gap-2 text-[#64748B]">
              <span className="text-[#38BDF8]">$</span>
              <span>vorynex inspect --service devpilot-ai --stream</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#38BDF8] shrink-0">[14:32:01]</span>
              <span className="text-[#F1F5F9]">
                Webhook received: <span className="text-[#7DD3FC]">github.actions / workflow_run #4829</span>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#38BDF8] shrink-0">[14:32:02]</span>
              <span>Parsing runner execution context (1,420 lines ingested)</span>
            </div>
            <div className="flex items-start gap-2 text-[#10B981]">
              <span className="shrink-0">[14:32:03]</span>
              <span>Sanitization: 3 environment secrets scrubbed (AWS_KEY, JWT_SECRET)</span>
            </div>
            <div className="flex items-start gap-2 text-[#F59E0B]">
              <span className="shrink-0">[14:32:04]</span>
              <span>Root Cause: PrismaClientInitializationError in /src/lib/db.ts:42</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#38BDF8] shrink-0">[14:32:05]</span>
              <span>AST Match: Connection pool exhaustion detected under concurrent spikes</span>
            </div>
            <div className="flex items-start gap-2 text-[#10B981]">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[#10B981] shrink-0" />
              <span>
                Deterministic Patch Ready: Verified against 24 unit tests in 1.4s.
              </span>
            </div>
            <div className="pt-2 border-t border-[#16202E] flex items-center justify-between text-[10px] text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3 h-3 text-[#38BDF8]" />
                branch: <span className="text-[#F1F5F9]">fix/db-pool-retry</span>
              </span>
              <span className="text-[#10B981]">● PR #142 drafted</span>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="space-y-3 font-mono text-[11px] sm:text-xs">
            <div className="text-[#64748B] mb-2"># System Data Pipeline Architecture</div>
            <div className="p-2.5 rounded bg-[#0B111A] border border-[#16202E] text-[#F1F5F9]">
              <span className="text-[#38BDF8]">01. INGESTION</span> → Webhook Event Stream (Signed SHA-256 HMAC)
            </div>
            <div className="p-2.5 rounded bg-[#0B111A] border border-[#16202E] text-[#F1F5F9]">
              <span className="text-[#38BDF8]">02. SANITIZER</span> → Entropy-based credential redactor + AST mapper
            </div>
            <div className="p-2.5 rounded bg-[#0B111A] border border-[#16202E] text-[#F1F5F9]">
              <span className="text-[#38BDF8]">03. REASONING</span> → Deterministic model orchestration with Zod validation
            </div>
            <div className="p-2.5 rounded bg-[#0B111A] border border-[#16202E] text-[#F1F5F9]">
              <span className="text-[#38BDF8]">04. DISPATCH</span> → Automated PR opening with regression test run
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="space-y-2.5 font-mono text-[11px] sm:text-xs">
            <div className="text-[#64748B] mb-2"># Engineering Quality Audit</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-[#0B111A] rounded border border-[#16202E]">
                <div className="text-[#64748B] text-[10px]">ZERO-LEAK GUARANTEE</div>
                <div className="text-[#10B981] font-semibold mt-0.5">Strict Airgap Mode</div>
              </div>
              <div className="p-2 bg-[#0B111A] rounded border border-[#16202E]">
                <div className="text-[#64748B] text-[10px]">TIME TO RESOLUTION</div>
                <div className="text-[#F1F5F9] font-semibold mt-0.5">avg 78 seconds</div>
              </div>
              <div className="p-2 bg-[#0B111A] rounded border border-[#16202E]">
                <div className="text-[#64748B] text-[10px]">CODE COMPLIANCE</div>
                <div className="text-[#F1F5F9] font-semibold mt-0.5">TypeScript Strict</div>
              </div>
              <div className="p-2 bg-[#0B111A] rounded border border-[#16202E]">
                <div className="text-[#64748B] text-[10px]">DEPLOYMENT TARGET</div>
                <div className="text-[#F1F5F9] font-semibold mt-0.5">Docker / K8s / Cloud</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Status Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#0B111A] border-t border-[#16202E] text-[10px] text-[#64748B]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>ENGINE: HEALTHY</span>
        </div>
        <div className="flex items-center gap-3">
          <span>LATENCY: 42ms</span>
          <span>LOCATION: PUNE // IN</span>
        </div>
      </div>
    </div>
  );
}

