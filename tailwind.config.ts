import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#F7F5EF",
          panel: "#FFFDF8",
          surface: "#EFEEE7",
          raised: "#E5E2D8",
          border: "#D8D4C8",
          borderStrong: "#B9B4A6",
        },
        text: {
          primary: "#24251F",
          secondary: "#62635A",
          muted: "#89897E",
        },
        accent: {
          DEFAULT: "#697642",
          bright: "#879957",
          dim: "#4C572F",
          soft: "#E5E9D8",
        },
        signal: {
          amber: "#B56D38",
          red: "#B85C4C",
          green: "#6F8750",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
        prose: "72ch",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(135,153,87,0.14), transparent 64%)",
        "line-fade":
          "linear-gradient(180deg, transparent, rgba(105,118,66,0.35), transparent)",
      },
      boxShadow: {
        edge: "0 16px 40px -28px rgba(36,37,31,0.35), 0 0 0 1px rgba(216,212,200,0.9)",
        glow: "0 14px 34px -16px rgba(105,118,66,0.38)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "dash": {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse-slow 3.5s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        dash: "dash 1.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
