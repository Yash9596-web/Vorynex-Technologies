export interface AgencyBenefit {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const agencyBenefits: AgencyBenefit[] = [
  {
    number: "01",
    title: "100% White-Label Delivery",
    description: "We work quietly in the background under your brand name, email domain, and Slack/Teams channels.",
    detail: "Your clients only see your agency. All code repositories, commit messages, and deployment configurations are branded exclusively to you with strict non-disclosure agreements (NDAs)."
  },
  {
    number: "02",
    title: "Fixed-Price or Dedicated Engineering Retainers",
    description: "Predictable project estimates and transparent margin protection for your agency business.",
    detail: "Choose between milestone-based fixed scope for client pitches or dedicated monthly developer retainers to scale up and down as your agency's pipeline demands."
  },
  {
    number: "03",
    title: "Full-Stack Technical Depth",
    description: "Take on complex custom software, API integrations, and AI workflows without expanding permanent overhead.",
    detail: "When your client asks for custom ERP connections, high-performance Next.js portals, or automated data parsing, our studio provides immediate senior-level execution."
  },
  {
    number: "04",
    title: "Direct Engineering Communication",
    description: "No layers of non-technical account managers playing telephone with your client's requirements.",
    detail: "Work directly with senior software engineers who understand Git branches, Figma tokens, database schemas, and edge caching."
  }
];

export const partnershipModels = [
  {
    title: "Project-by-Project White-Label",
    idealFor: "Agencies winning complex web, software, or automation projects needing turnkey execution.",
    features: [
      "Fixed scope & milestone delivery timeline",
      "Direct code repository handover with 100% IP assignment",
      "30-day post-launch defect warranty included",
      "Strict client-facing non-disclosure agreement (NDA)"
    ]
  },
  {
    title: "Dedicated Studio Retainer",
    idealFor: "Creative and digital agencies with an ongoing stream of client development and maintenance needs.",
    features: [
      "Reserved senior engineering sprint capacity each month",
      "Priority turnaround on bug fixes, feature requests, and audits",
      "Joint technical discovery support during agency client pitches",
      "Flexible rollover hours for variable agency workloads"
    ]
  }
];

