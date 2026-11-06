# Vorynex Technologies

> High-concurrency digital architecture, business automation, and enterprise AI engineering studio.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Obsidian Dark Theme)
- **Animation**: [Motion](https://motion.dev/) (Framer Motion / Shared-element layout spring physics)
- **Components**: [Watermelon UI](https://ui.watermelon.sh/) & Custom Engineering Primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build & Static Export

```bash
npm run build
```

The optimized static production export will be generated in the `out/` directory.

---

## ☁️ Cloudflare Pages Deployment Guide

This project is pre-configured for **Cloudflare Pages** static deployment via `output: 'export'` in `next.config.mjs`.

### Configuration in Cloudflare Dashboard:

1. In the **Cloudflare Dashboard**, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select repository: `Yash9596-web/Vorynex-Technologies`.
3. Set the following build settings:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave blank or default)
4. Under **Environment variables (Production & Preview)**, add:
   - `NODE_VERSION`: `20`
5. Click **Save and Deploy**.

Cloudflare Pages will automatically build and distribute the site across its global edge network with instant cache propagation and zero cold starts.

---

## 📂 Project Structure

```
├── public/                 # Static assets & diagrams
├── src/
│   ├── app/                # Next.js App Router routes & pages
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, WhatWeEngineer, Industries, Outcomes, etc.
│   │   ├── ui/             # ArchitectureDiagram, TerminalFrame, Badges
│   │   └── watermelon/     # Watermelon UI Expandable Modal Components
│   ├── data/               # Services, projects, industries, methodology data
│   ├── lib/                # Shared utilities (`cn`)
│   └── styles/             # Global Tailwind stylesheet
├── next.config.mjs         # Next.js configuration (static export)
├── tailwind.config.ts      # Obsidian palette & tokens
└── components.json         # Shadcn / Watermelon registry configuration
```
