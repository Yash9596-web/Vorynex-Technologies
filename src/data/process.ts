export interface ProcessStep {
  step: string;
  name: string;
  label: string;
  tagline: string;
  description: string;
  keyActivities: string[];
  deliverable: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    name: "Discover",
    label: "01 / DISCOVER",
    tagline: "Uncovering the actual problem before writing a line of code.",
    description: "We dive deep into your commercial realities, current technical architecture, operational bottlenecks, and user requirements. We challenge assumptions to ensure we build what your business actually needs.",
    keyActivities: [
      "Technical stakeholder & operator interviews",
      "Legacy data audit and API dependency mapping",
      "Scope prioritization and technical feasibility matrix",
      "Risk assessment and security requirement definition"
    ],
    deliverable: "Technical Scope Document & System Architecture Plan",
    duration: "1–2 Weeks"
  },
  {
    step: "02",
    name: "Define",
    label: "02 / DEFINE",
    tagline: "Architecting the technical blueprint and data models.",
    description: "We specify schemas, select the optimal tech stack, outline database entity relationships, and design API contracts. This eliminates ambiguity and prevents costly mid-development pivots.",
    keyActivities: [
      "Database schema and entity-relationship modeling (ERD)",
      "API contract specification (REST / GraphQL / OpenAPI)",
      "Infrastructure capacity and latency planning",
      "Security threat modeling and authentication architecture"
    ],
    deliverable: "Architecture Decision Records (ADRs) & Data Flow Specifications",
    duration: "1–2 Weeks"
  },
  {
    step: "03",
    name: "Design",
    label: "03 / DESIGN",
    tagline: "High-fidelity editorial user interfaces and system ergonomics.",
    description: "We craft clean, functional interfaces grounded in typographical discipline, intentional whitespace, and rapid cognitive ergonomics. No decorative fluff—just clear, purposeful interaction.",
    keyActivities: [
      "Interactive component design systems with design tokens",
      "Responsive layout engineering across desktop, tablet, and mobile",
      "Accessibility audits (WCAG 2.2 AA standards)",
      "High-fidelity clickable interactive prototypes"
    ],
    deliverable: "Design Token Library & Interactive Figma Design System",
    duration: "2 Weeks"
  },
  {
    step: "04",
    name: "Develop",
    label: "04 / DEVELOP",
    tagline: "Deterministic engineering with strictly typed TypeScript.",
    description: "We build features in modular, testable increments using clean Git workflows, automated code linting, and continuous integration. Every feature is backed by automated tests.",
    keyActivities: [
      "Component-driven frontend engineering with Next.js & React",
      "Robust backend API development with strict schema validation",
      "Automated unit, integration, and end-to-end testing",
      "Staging environment deployments with continuous preview URLs"
    ],
    deliverable: "Clean Git Repository with 100% Type-Safe Source Code",
    duration: "3–6 Weeks"
  },
  {
    step: "05",
    name: "Deliver",
    label: "05 / DELIVER",
    tagline: "Production hardening, zero-downtime deployment, and handover.",
    description: "We conduct stress testing, security audits, database indexing, and performance profiling before launching your system on resilient cloud infrastructure with zero downtime.",
    keyActivities: [
      "Google Lighthouse 95+ performance optimization audits",
      "Penetration testing and secret leakage scanning",
      "DNS configuration, SSL certificate issuance, and CDN caching",
      "Full team training, runbooks, and repository handover"
    ],
    deliverable: "Live Production Platform & Operational Runbooks",
    duration: "1 Week"
  },
  {
    step: "06",
    name: "Support",
    label: "06 / SUPPORT",
    tagline: "Continuous monitoring, proactive upgrades, and roadmap evolution.",
    description: "Software is an evolving asset. We provide continuous uptime monitoring, security patching, performance telemetry, and iterative feature development to ensure your software stays ahead.",
    keyActivities: [
      "24/7 uptime monitoring and error alerting (Sentry / Datadog)",
      "Dependency security patching and framework upgrades",
      "Monthly performance and Core Web Vitals telemetry reports",
      "Dedicated developer hours for iterative feature backlog"
    ],
    deliverable: "Ongoing SLA & Monthly Engineering Cadence",
    duration: "Continuous"
  }
];

