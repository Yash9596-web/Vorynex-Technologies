import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#070A0F",
          deep: "#04060A",
        },
        surface: {
          DEFAULT: "#0B111A",
          raised: "#121A26",
          subtle: "#0E1622",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          muted: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.16)",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
        accent: {
          DEFAULT: "#38BDF8",
          hover: "#7DD3FC",
          cobalt: "#0284C7",
          subtle: "rgba(56, 189, 248, 0.10)",
          success: "#10B981",
          warning: "#F59E0B",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["var(--font-body)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Menlo", "Courier New", "monospace"],
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.5)",
        surface: "0 4px 20px -2px rgba(0, 0, 0, 0.7)",
        card: "0 0 0 1px rgba(255,255,255,0.08), 0 8px 24px -4px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
