import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        foreground: "#F4F4F5", // zinc-100
        charcoal: {
          100: "#1E1E1E",
          200: "#2A2A2A",
          300: "#363636",
        },
        sand: {
          100: "#E6DCCA",
          200: "#D3C5AB",
          300: "#BFAA8A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          muted: "#A48628",
        }
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
