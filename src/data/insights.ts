export interface Insight {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
}

export const insights: Insight[] = [
  {
    slug: "why-we-avoid-vibe-coding",
    title: "Why We Avoid 'Vibe-Coding': The Case for Editorial Software Engineering",
    category: "ENGINEERING PHILOSOPHY",
    readTime: "5 min read",
    date: "November 2026",
    excerpt: "When digital products rely on neon gradients, floating 3D orbs, and generic component templates, they signal a lack of technical substance. Here is why we prioritize architectural rigor and editorial typography.",
    content: [
      "In the era of one-click AI website generators, the Internet has become saturated with what engineers colloquially call 'vibe-coded' products: interfaces blanketed in glowing cyan orbs, arbitrary glassmorphic blur, repetitive three-column feature cards, and meaningless buzzwords.",
      "While visual embellishment is easy to generate, engineering credibility cannot be faked. When prospective enterprise clients visit a software company's website, they are not looking for a futuristic disco light show; they are evaluating whether your team can be trusted with their core business data, complex integrations, and mission-critical workflows.",
      "At Vorynex Technologies, our design philosophy is simple: 'Less decoration. More engineering.' Every pixel, border, and typographical choice must serve an informational purpose.",
      "By replacing generic decorative graphics with authentic product screenshots, interactive technical terminal inspectors, and precise architecture diagrams, we communicate our real capabilities directly to decision makers."
    ]
  },
  {
    slug: "deterministic-ai-pipelines",
    title: "Deterministic Automation: Why Raw LLM Output Must Never Touch Your Database",
    category: "AI & ARCHITECTURE",
    readTime: "7 min read",
    date: "October 2026",
    excerpt: "Large Language Models are probabilistic text generators, not transactional engines. How we build deterministic guardrails and schema validation for enterprise business workflows.",
    content: [
      "Companies frequently jump into AI automation by connecting an LLM directly to their database or payment API, only to suffer hallucinations, schema corruption, or unauthorized database mutations.",
      "In enterprise environments, probabilistic behavior in the data persistence layer is unacceptable. If an invoice specifies ₹4,50,000, an automation pipeline cannot randomly output ₹45,000 due to temperature fluctuations.",
      "We enforce a strict three-tier architecture: Ingestion & Extraction -> Schema Enforcement (Zod / Pydantic) -> Human-in-the-Loop Approval Queue. If a document fails checksums or confidence thresholds, it is diverted to a human operator.",
      "This hybrid model delivers the velocity of modern machine learning combined with the mathematical certainty of traditional relational databases."
    ]
  },
  {
    slug: "building-for-technical-credibility",
    title: "The Architecture of High-Trust B2B Software Platforms",
    category: "SYSTEM DESIGN",
    readTime: "6 min read",
    date: "September 2026",
    excerpt: "A deep dive into how strict typing, distributed tracing, and clear system boundaries turn fragile software into resilient business assets.",
    content: [
      "The true cost of software is never in the initial build—it is in maintenance, bug fixes, and operational downtime over the subsequent 36 months.",
      "Writing strictly typed TypeScript with unified schema sharing between frontend and backend eliminates entire categories of runtime exceptions before code is ever merged to main.",
      "Pairing this with comprehensive telemetry (OpenTelemetry, structured JSON logging, and error tracking) ensures that when an unexpected edge case occurs, engineers can diagnose the root cause in minutes rather than days.",
      "Building software with clean boundaries is what separates temporary scripts from enduring enterprise systems."
    ]
  }
];

