import React from "react";
import { ContactForm } from "@/components/ui/ContactForm";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Contact & Project Inquiries — Vorynex Technologies",
  description:
    "Initiate a project inquiry with Vorynex Technologies. Custom software, web platforms, and deterministic automation. Direct response from senior engineers in Pune within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#070A0F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="accent">INITIATE INQUIRY // DIRECT CHANNEL</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F1F5F9] leading-[1.1]">
            Start a project conversation.
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed pt-2">
            No sales scripts or aggressive follow-ups. You will speak directly with a senior software architect who can evaluate your technical requirements and suggest concrete next steps.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

