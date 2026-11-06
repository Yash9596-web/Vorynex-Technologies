export interface Service {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  businessProblems: string[];
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  image: string;
  imageAlt: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: "web-dev",
    slug: "web-development",
    number: "01",
    category: "ENGINEERING",
    title: "Web Development",
    tagline: "High-performance digital platforms and web applications.",
    description: "We architect and build bespoke, production-ready web platforms that prioritize loading speed, technical SEO, bulletproof accessibility, and clean maintainable code.",
    image: "/visuals/vorynex-data-architecture.webp",
    imageAlt: "Vorynex Digital Architecture - High-performance web development and modular component systems",
    businessProblems: [
      "Slow, bloated websites losing enterprise prospects and hurting conversion rates.",
      "Generic template solutions that cannot scale with evolving business workflows.",
      "Fragile monolithic legacy frontends that break with minor content updates.",
      "Poor Core Web Vitals leading to search engine penalties and high bounce rates."
    ],
    capabilities: [
      "Server-rendered and static digital platforms via Next.js App Router",
      "Interactive data visualizations and real-time dashboard interfaces",
      "Headless CMS integration with decoupled editorial workflows",
      "Performance optimization achieving consistent 95+ Google Lighthouse scores"
    ],
    deliverables: [
      "Fully typed, component-driven TypeScript repository",
      "Automated CI/CD deployment pipelines on Vercel or cloud containers",
      "Comprehensive design token system with Tailwind CSS",
      "Lighthouse performance & accessibility compliance audit report"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    faqs: [
      {
        question: "Do you use pre-made WordPress or Webflow templates?",
        answer: "No. We engineer clean, custom code bases primarily using Next.js, React, and TypeScript. This gives your business complete intellectual property ownership, superior speed, and zero platform lock-in."
      },
      {
        question: "How do you ensure rapid page load speeds?",
        answer: "We use server-side rendering, streaming HTML, intelligent asset preloading, image optimization (AVIF/WebP), and strict JavaScript bundle budgets to ensure first-load speeds remain well under 1.5 seconds."
      }
    ]
  },
  {
    id: "app-dev",
    slug: "application-development",
    number: "02",
    category: "DIGITAL PRODUCTS",
    title: "Application Development",
    tagline: "Purpose-built applications engineered for scale and usability.",
    description: "From internal operations dashboards to multi-tenant customer portals, we engineer reliable applications with rock-solid backends, intuitive user interfaces, and robust authentication.",
    image: "/visuals/vorynex-data-architecture.webp",
    imageAlt: "Vorynex Digital Architecture - Purpose-built business applications and operational portals",
    businessProblems: [
      "Off-the-shelf SaaS software that only solves 60% of your operational workflow.",
      "Disjointed spreadsheets and manual workarounds creating massive human error.",
      "High subscription costs across disconnected SaaS tools that do not speak to each other.",
      "Inability to securely grant fine-grained permissions to employees and external partners."
    ],
    capabilities: [
      "Full-stack web applications with role-based access control (RBAC)",
      "Cross-platform responsive client interfaces",
      "Offline-first state synchronization and resilient data caching",
      "Comprehensive telemetry, real-time logging, and exception tracking"
    ],
    deliverables: [
      "Modular full-stack application with strict schema validation",
      "Relational database migrations and entity relationship schemas",
      "Unit, integration, and end-to-end automated test suites",
      "Infrastructure-as-Code deployment scripts"
    ],
    techStack: ["React", "TypeScript", "Next.js", "FastAPI / Node.js", "PostgreSQL", "Redis"],
    faqs: [
      {
        question: "Can our internal IT team maintain the code after delivery?",
        answer: "Yes. We treat code maintainability as a core engineering standard. All code is written in strictly typed TypeScript, thoroughly documented, and delivered with architecture decision records (ADRs)."
      },
      {
        question: "How do you handle security and data protection?",
        answer: "We enforce OWASP Top 10 standards, encrypt sensitive data at rest and in transit, implement CSRF/XSS safeguards, and use secure token-based authentication."
      }
    ]
  },
  {
    id: "custom-software",
    slug: "custom-software",
    number: "03",
    category: "CORE SYSTEMS",
    title: "Custom Software",
    tagline: "Software systems designed around your proprietary business logic.",
    description: "When commercial off-the-shelf software falls short, we construct custom software tailored precisely to your operational nuances, compliance requirements, and integration architecture.",
    image: "/visuals/vorynex-data-architecture.webp",
    imageAlt: "Vorynex Digital Architecture - Bespoke software engines and enterprise system structures",
    businessProblems: [
      "Rigid enterprise software forcing your company to adapt processes to software limitations.",
      "Data silos across legacy on-premise systems and modern cloud applications.",
      "Manual data re-entry leading to fulfillment bottlenecks and customer friction.",
      "Exorbitant per-seat licensing fees that punish team growth."
    ],
    capabilities: [
      "Custom business engines and proprietary calculation algorithms",
      "Event-driven microservices and message-queue architectures",
      "Legacy system modernization and incremental strangler migrations",
      "Audit-compliant logging and deterministic transactional guarantees"
    ],
    deliverables: [
      "Custom software engine with zero third-party licensing constraints",
      "Architecture blueprint and system dependency maps",
      "Automated database backup and failover procedures",
      "Handover sessions and operational runbooks"
    ],
    techStack: ["TypeScript", "Python", "Go", "Docker", "PostgreSQL", "RabbitMQ / Kafka"],
    faqs: [
      {
        question: "Who owns the intellectual property (IP) of the software?",
        answer: "You own 100% of the intellectual property, source code, repositories, and deployment configurations from day one upon milestone completion."
      },
      {
        question: "How do we estimate cost and delivery timelines?",
        answer: "We begin with a structured technical discovery sprint where we break requirements into measurable deliverables, providing milestone-based quotes with clear acceptance criteria."
      }
    ]
  },
  {
    id: "automation-ai",
    slug: "automation-ai",
    number: "04",
    category: "INTELLIGENCE",
    title: "Automation & AI Solutions",
    tagline: "Intelligent workflows that eliminate operational bottlenecks.",
    description: "We deploy practical, deterministic automation and AI systems that solve real business problems—extracting structured information, eliminating repetitive tasks, and accelerating decision cycles.",
    image: "/visuals/vorynex-automation-flow.webp",
    imageAlt: "Vorynex Smart Automation - Document processing pipelines and human-in-the-loop validation dashboards",
    businessProblems: [
      "Teams spending hundreds of hours reading repetitive emails, PDFs, and invoices.",
      "AI experiments that hallucinate or lack deterministic human review controls.",
      "High human operational costs when scaling order processing or support inquiries.",
      "Unstructured enterprise data sitting dormant in inbox threads and legacy storage."
    ],
    capabilities: [
      "Document processing pipelines with OCR, entity extraction, and schema enforcement",
      "Human-in-the-loop validation dashboards for mission-critical operations",
      "Context-aware AI retrieval systems (RAG) over company documentation",
      "Deterministic workflow automation connecting internal tools with external APIs"
    ],
    deliverables: [
      "Production-hardened automation pipelines with error recovery queues",
      "Human-in-the-loop review interface with audit tracking",
      "Prompt engineering harnesses with regression test benchmarks",
      "Secure API proxy layer protecting LLM keys and preventing data leaks"
    ],
    techStack: ["Python", "FastAPI", "LangChain / LlamaIndex", "OpenAI / Claude / Gemini API", "Redis", "Celery"],
    faqs: [
      {
        question: "How do you prevent AI hallucinations in business workflows?",
        answer: "We never let raw model generation update production databases directly. We enforce strict JSON schema validation, multi-pass deterministic verification, and human-in-the-loop approval gates for critical actions."
      },
      {
        question: "Is our private business data used to train external models?",
        answer: "Never. We exclusively use enterprise API agreements with explicit zero-data-retention policies, or self-hosted open models within your private cloud."
      }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    number: "05",
    category: "INFRASTRUCTURE",
    title: "API & System Integration",
    tagline: "Connecting disconnected applications into unified ecosystems.",
    description: "We build reliable data bridges, robust REST and GraphQL APIs, and fault-tolerant webhook consumers that keep your payment gateways, ERPs, CRMs, and customer apps seamlessly synchronized.",
    image: "/visuals/vorynex-connected-cloud.webp",
    imageAlt: "Vorynex Connected Technology - Cloud integrations, API gateways, and distributed message bridges",
    businessProblems: [
      "Fragmented systems causing inventory mismatches, delayed billing, and sync failures.",
      "Unreliable third-party webhooks dropping critical transaction notifications.",
      "Rate limits and timeout errors bringing customer checkout flows to a halt.",
      "Lack of centralized visibility when multi-service transactions fail."
    ],
    capabilities: [
      "RESTful and GraphQL API design with OpenAPI / Swagger documentation",
      "Resilient webhook ingestion queues with idempotent event processing",
      "Integration with Stripe, Razorpay, Salesforce, HubSpot, SAP, and custom ERPs",
      "Circuit breakers, automatic retry backoff, and distributed tracing"
    ],
    deliverables: [
      "Production-ready integration layer with end-to-end monitoring",
      "Interactive API documentation and client SDKs",
      "Dead-letter queues and automated alert notifications",
      "Data reconciliation scripts verifying cross-system consistency"
    ],
    techStack: ["Node.js", "TypeScript", "GraphQL", "Redis", "PostgreSQL", "Docker"],
    faqs: [
      {
        question: "How do you handle API outages from third-party services?",
        answer: "We implement idempotent event queues with exponential backoff retries, dead-letter alerts, and fallback states so temporary partner downtime never crashes your core system."
      },
      {
        question: "Can you integrate with outdated legacy software without modern APIs?",
        answer: "Yes. We frequently build custom adapter layers, secure database triggers, or scheduled SFTP/CSV sync microservices to bridge legacy systems with modern cloud applications."
      }
    ]
  },
  {
    id: "seo-performance",
    slug: "seo-performance",
    number: "06",
    category: "OPTIMIZATION",
    title: "SEO & Technical Performance",
    tagline: "Engineering foundations that search engines reward and users love.",
    description: "True search visibility starts with technical engineering: pristine semantic HTML, sub-second TTFB, optimized crawl budgets, schema markup, and passing Core Web Vitals with flying colors.",
    image: "/visuals/vorynex-data-architecture.webp",
    imageAlt: "Vorynex Digital Architecture - Performance optimization and semantic data engineering",
    businessProblems: [
      "Websites with great content that fail to rank due to technical crawling errors.",
      "Heavy JavaScript client bundles blocking Googlebot from indexing dynamic content.",
      "Missing or malformed JSON-LD structured data costing valuable SERP rich snippets.",
      "Slow Largest Contentful Paint (LCP) causing high bounce rates on mobile networks."
    ],
    capabilities: [
      "Full Core Web Vitals audit and engineering remediation (LCP, INP, CLS)",
      "Dynamic XML sitemap generation and automated canonical tagging",
      "Schema.org JSON-LD structured data (Organization, SoftwareApplication, Article)",
      "Edge-side caching, image format modernization, and font subsetting"
    ],
    deliverables: [
      "Optimized production build passing all Core Web Vitals metrics",
      "Structured data validation report via Google Rich Results test",
      "Technical robots.txt and sitemap architecture",
      "Pre-launch vs. post-launch benchmark comparison"
    ],
    techStack: ["Next.js", "Lighthouse CI", "Edge Middleware", "Schema.org", "Cloudflare"],
    faqs: [
      {
        question: "Is this traditional keyword SEO or technical engineering?",
        answer: "We focus on technical SEO: the engineering infrastructure that enables search engines to crawl, index, and rank your content at peak efficiency."
      },
      {
        question: "How soon do we see technical performance improvements?",
        answer: "Performance metrics improve immediately upon code deployment. Search engine crawl efficiency and indexation updates typically register within 14–30 days."
      }
    ]
  }
];
