export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  headline: string;
  tagline: string;
  category: string;
  year: string;
  clientType: string;
  summary: string;
  challenge: string;
  engineeringApproach: string;
  architectureWorkflow: string[];
  features: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveStatus: string;
  image: string;
  imageAlt: string;
  terminalLogs?: string[];
}

export const projects: Project[] = [
  {
    id: "devpilot-ai",
    slug: "devpilot-ai",
    number: "01",
    title: "DevPilot AI",
    headline: "Troubleshooting deployment errors, step by step.",
    tagline: "AI-assisted developer tool investigating CI/CD failures and automating patch generation.",
    category: "Developer Tooling · AI System",
    year: "2026",
    clientType: "Engineering Teams & SaaS Companies",
    summary: "DevPilot AI connects directly to GitHub Actions and CI/CD pipelines to ingest runtime failure traces, strip credentials safely, parse abstract syntax trees (AST), and pinpoint the exact failing lines with verified patch recommendations.",
    challenge: "Engineering teams spend hundreds of hours every month deciphering complex multiline stack traces, broken Docker builds, and cryptic compiler errors across staging and production environments.",
    engineeringApproach: "Rather than treating error logs as plain text fed directly into generic prompts, we engineered a deterministic parser that extracts repository commit hashes, isolates diff contexts, anonymizes secrets via entropy detection, and formulates precise AST-aware pull request proposals.",
    architectureWorkflow: [
      "Webhook Listener captures workflow_run.completed with status: failure",
      "Log Sanitizer strips auth tokens, API keys, and environment variables via regex + entropy",
      "AST Context Enricher maps error stack lines to exact repository source files",
      "Reasoning Engine synthesizes targeted code patches with deterministic validation checks",
      "Git Branch & PR Generator opens an annotated GitHub pull request with step-by-step rationale"
    ],
    features: [
      "Native GitHub App integration with zero-configuration webhook triggers",
      "Secret isolation filter preventing proprietary credential leakage",
      "Interactive step-by-step failure breakdown for junior and senior engineers alike",
      "Automated unit test execution against proposed patches prior to merge"
    ],
    technologies: ["Next.js", "TypeScript", "Python / FastAPI", "GitHub REST & Webhooks", "Docker", "Tree-sitter AST", "Redis"],
    metrics: [
      { label: "Mean Time to Resolution (MTTR)", value: "-82%" },
      { label: "Build Failure Debug Time", value: "< 90 sec" },
      { label: "Deterministic Patch Accuracy", value: "94.6%" }
    ],
    liveStatus: "Active Deployment",
    image: "/visuals/vorynex-connected-cloud.webp",
    imageAlt: "DevPilot AI - Connected cloud and GitHub CI/CD pipeline error investigation",
    terminalLogs: [
      "[INFO] GitHub Webhook received: workflow_run #4829 failed on branch main",
      "[ANALYSIS] Ingesting 1,420 log lines from runner-ubuntu-latest...",
      "[SECURITY] 3 environment secrets scrubbed from memory (AWS_KEY, JWT_SECRET)",
      "[ISOLATION] Root cause identified: PrismaClientInitializationError in /src/lib/db.ts:42",
      "[REASONING] Connection pool exhaustion detected under concurrent worker initialization",
      "[SYNTHESIS] Generated patch: dynamic connection pooling with graceful retry backoff",
      "[READY] PR #142 drafted with verified regression test suite."
    ]
  },
  {
    id: "vorynex-automation",
    slug: "vorynex-automation-platform",
    number: "02",
    title: "Vorynex Automation Platform",
    headline: "Bringing email workflows and document pipelines under control.",
    tagline: "Enterprise automation platform for intelligent document extraction and human-in-the-loop approvals.",
    category: "Workflow Automation · Enterprise Systems",
    year: "2026",
    clientType: "Logistics, Wholesale & B2B Operations",
    summary: "An enterprise workflow platform designed to ingest high-volume inbound transaction emails and PDF attachments, validate tabular line-items against internal ERP databases, and synthesize contextual responses with human approval checkpoints.",
    challenge: "Operations teams in distribution and logistics spend upwards of 4 to 6 hours daily manually copying invoice line items, purchase orders, and customs filings from disparate email attachments into legacy ERP systems.",
    engineeringApproach: "We built a multi-stage deterministic pipeline. Instead of relying on brittle regex or unconstrained LLMs, we combine modern visual document parsing (OCR + bounding box verification) with JSON schema validation and an intuitive human-in-the-loop review dashboard.",
    architectureWorkflow: [
      "Inbound Mail Gateway monitors IMAP / Google Workspace / Outlook via webhook push",
      "Attachment Engine isolates PDFs, XLSX, and scans with cryptographic checksumming",
      "Document Intelligence layer extracts tables, vendor IDs, line items, and totals",
      "ERP Reconciliation validates line items against live inventory and catalog schemas",
      "Human-in-the-Loop Approval Queue presents side-by-side verification before dispatch"
    ],
    features: [
      "Multi-vendor PDF invoice and purchase order extraction with 99.4% field accuracy",
      "Interactive split-screen verification UI with one-click approval or inline correction",
      "Bi-directional webhook sync with SAP, Tally, Zoho, and PostgreSQL backends",
      "Immutable audit log tracking every document change, user approval, and API dispatch"
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis / BullMQ", "Multimodal OCR", "Next.js", "Tailwind CSS"],
    metrics: [
      { label: "Monthly Documents Processed", value: "14,000+" },
      { label: "Extraction Field Accuracy", value: "99.4%" },
      { label: "Manual Data Entry Time Saved", value: "85%" }
    ],
    liveStatus: "Production Platform",
    image: "/visuals/vorynex-automation-flow.webp",
    imageAlt: "Vorynex Automation Platform - Smart automation document ingestion and multi-stage workflow pipeline",
    terminalLogs: [
      "[INBOUND] Received MIME message from vendor-ops@supplychain.net with 2 PDF attachments",
      "[PARSER] Extracted PurchaseOrder_PO9842.pdf (12 line items, total INR 4,82,500)",
      "[VALIDATION] Cross-referenced SKU catalog: 12/12 items matched with 100% confidence",
      "[APPROVAL QUEUE] Dispatched to Finance Reviewer dashboard (Priority: Standard)",
      "[HUMAN ACTION] Approved by Operator ID #104 at 14:22:04 IST",
      "[ERP SYNC] Pushed to ERP batch invoice endpoint -> Success (HTTP 201 Created)"
    ]
  },
  {
    id: "text-banao",
    slug: "text-banao",
    number: "03",
    title: "Text Banao",
    headline: "Making everyday business writing and customer communication effortless.",
    tagline: "Contextual AI writing and reply generation engine built for regional and enterprise commerce.",
    category: "AI Product · Web Application",
    year: "2026",
    clientType: "Indian Businesses, Agencies & D2C Brands",
    summary: "Text Banao is a specialized AI writing product engineered around the conversational nuances of modern commerce, supporting English, Hinglish, and regional formats for rapid customer replies, quotations, and formal business letters.",
    challenge: "Generic Western AI writing tools consistently produce overly academic or robotic prose that fails to resonate with Indian customer communication norms, WhatsApp business contexts, and local business etiquette.",
    engineeringApproach: "We architected an ultra-fast streaming interface on edge runtimes with curated few-shot prompt hierarchies, tone modulators (Professional, Polite, Firm, Hinglish), and instant export integrations for WhatsApp Web and Gmail.",
    architectureWorkflow: [
      "Client UI captures raw bullet-point intent and selected recipient relationship",
      "Tone Normalizer applies domain-specific few-shot exemplars and etiquette rules",
      "Edge Model Gateway streams generated tokens via Server-Sent Events (SSE)",
      "Interactive Polish Bar provides one-tap tone adjustments (Shorter, Politer, Hinglish)",
      "Payload Exporter formats directly into WhatsApp URL deep links or clipboard buffers"
    ],
    features: [
      "Sub-400ms first-token latency on standard 4G mobile connections",
      "Curated commercial presets: Quotation follow-ups, payment reminders, formal notices",
      "Native Hinglish and colloquial communication modes with authentic conversational tone",
      "Zero account friction with local storage draft persistence and zero data training"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel Edge Functions", "Server-Sent Events", "TypeScript"],
    metrics: [
      { label: "Active User Sessions", value: "45,000+" },
      { label: "Time-to-First-Token (TTFT)", value: "380ms" },
      { label: "User Satisfaction Rating", value: "4.9 / 5.0" }
    ],
    liveStatus: "Live Public Web App",
    image: "/visuals/vorynex-ai-network.webp",
    imageAlt: "Text Banao - AI intelligence neural graph and real-time streaming language engine",
    terminalLogs: [
      "[SESSION] Initialized user session on edge-bom1 (Mumbai region)",
      "[REQUEST] Prompt intent: 'Polite payment reminder for pending invoice #884'",
      "[CONTEXT] Tone selected: Indian B2B Professional · Platform: WhatsApp",
      "[STREAM] First token delivered in 365ms via SSE",
      "[COMPLETION] Formatted message synthesized (148 words) with zero robotic clichés",
      "[EXPORT] Clicked 'Copy for WhatsApp' -> Transferred to user clipboard"
    ]
  }
];
