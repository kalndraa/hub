import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        glass: "rgba(255,255,255,0.05)",
        "glass-muted": "rgba(255,255,255,0.03)",
        "glass-border": "rgba(255,255,255,0.08)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SFMono-Regular", "Consolas", "monospace"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(82, 255, 214, 0.12)",
        "glass-inset": "inset 0 1px 0 rgba(255,255,255,0.08)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 50% 0%, rgba(82,255,214,0.16), transparent 34%), radial-gradient(circle at 85% 18%, rgba(255,105,180,0.12), transparent 28%), radial-gradient(circle at 15% 35%, rgba(255,210,100,0.10), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
