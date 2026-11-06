export interface Industry {
  id: string;
  slug: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  metrics: { label: string; value: string }[];
  caseStudyRef?: string;
}

export const industries: Industry[] = [
  {
    id: "saas-companies",
    slug: "saas-companies",
    number: "01",
    title: "SaaS & Cloud Companies",
    headline: "Accelerating release cycles and hardening developer infrastructure.",
    description: "We help high-growth SaaS and software companies engineer mission-critical developer tools, CI/CD telemetry systems, multi-tenant customer portals, and reliable API integrations.",
    challenges: [
      "Developer bottlenecks and escalating MTTR on CI/CD deployment failures.",
      "Legacy monolithic codebases slowing down feature velocity and sprint delivery.",
      "Multi-tenant scaling challenges with database connection pooling and concurrency."
    ],
    solutions: [
      "Custom developer tooling with AST parsing and automated pull request generation (DevPilot AI).",
      "Next.js App Router frontends with streaming server components and sub-second page loads.",
      "Resilient REST & GraphQL API infrastructure with comprehensive OpenAPI documentation."
    ],
    metrics: [
      { label: "Deployment MTTR", value: "-82%" },
      { label: "Unit Test Pass Rate", value: "94.6%" },
      { label: "Average Patch Generation", value: "< 90 sec" }
    ],
    caseStudyRef: "/work/devpilot-ai"
  },
  {
    id: "enterprise-logistics",
    slug: "enterprise-logistics",
    number: "02",
    title: "Enterprise Logistics & Supply Chain",
    headline: "Automating high-volume transactional documents and ERP sync.",
    description: "We modernize operations for logistics, wholesale distribution, and supply chain enterprises by replacing manual data entry with deterministic OCR and human-in-the-loop validation.",
    challenges: [
      "Teams spending 4–6 hours daily transcribing unstructured PDF invoices into ERPs.",
      "Manual data entry errors leading to inventory discrepancies and delayed billing.",
      "Legacy on-premise ERP systems isolated from modern partner webhooks."
    ],
    solutions: [
      "Automated document processing extracting tabular data with 99.4% field accuracy.",
      "Human-in-the-loop review dashboards with side-by-side discrepancy highlights.",
      "Bi-directional sync with SAP, Tally, Zoho, and custom SQL backends."
    ],
    metrics: [
      { label: "Monthly Documents Processed", value: "14,000+" },
      { label: "Field Extraction Accuracy", value: "99.4%" },
      { label: "Manual Processing Time Saved", value: "85%" }
    ],
    caseStudyRef: "/work/vorynex-automation-platform"
  },
  {
    id: "digital-agencies",
    slug: "digital-agencies",
    number: "03",
    title: "Digital Agencies & Consultancies",
    headline: "Your white-label engineering arm, working behind your brand.",
    description: "We act as the specialized technical delivery engine for design studios, marketing agencies, and brand consultancies who need senior engineering without expanding permanent payroll.",
    challenges: [
      "Turning down high-budget client opportunities due to internal technical limitations.",
      "Freelancers delivering fragile, untyped code that breaks post-launch.",
      "Managing variable project pipelines without bloating fixed monthly headcount."
    ],
    solutions: [
      "100% white-label codebases committed directly to your agency's GitHub organization.",
      "Strict client-facing non-disclosure agreements (NDAs) protecting client relationships.",
      "Predictable milestone pricing or flexible dedicated monthly developer retainers."
    ],
    metrics: [
      { label: "Client Retainer Reliability", value: "100%" },
      { label: "Post-Launch Warranty", value: "30 Days" },
      { label: "Code Handover IP Ownership", value: "100%" }
    ],
    caseStudyRef: "/agency-partnership"
  },
  {
    id: "b2b-commerce",
    slug: "b2b-commerce",
    number: "04",
    title: "B2B Commerce & Distribution",
    headline: "Streamlining commercial quotations and multilingual client communications.",
    description: "We build custom quoting engines, customer self-service portals, and contextual AI communication systems tailored to regional commerce workflows.",
    challenges: [
      "Lost sales velocity due to slow quotation turnaround on complex custom orders.",
      "Generic Western AI writing tools generating robotic, disconnected customer replies.",
      "Disconnected WhatsApp communication records lost on individual salesperson phones."
    ],
    solutions: [
      "Contextual writing & reply engines tailored for Indian B2B commerce (Text Banao).",
      "One-click quotation payload export into WhatsApp Business and email drafts.",
      "Centralized order inquiry queues with automated follow-up cadences."
    ],
    metrics: [
      { label: "First-Token Streaming Latency", value: "380ms" },
      { label: "Active User Sessions", value: "45,000+" },
      { label: "Customer Satisfaction", value: "4.9 / 5.0" }
    ],
    caseStudyRef: "/work/text-banao"
  }
];

