import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "color-animation": {
          "0%": { color: "#71717a" },
          "10%": { color: "#a1a1aa" },
          "20%": { color: "#d4d4d8" },
          "30%": { color: "#e4e4e7" },
          "40%": { color: "#f4f4f5" },
          "50%": { color: "#fafafa" },
          "60%": { color: "#f4f4f5" },
          "70%": { color: "#e4e4e7" },
          "80%": { color: "#d4d4d8" },
          "90%": { color: "#a1a1aa" },
          "100%": { color: "#71717a" }
        },
      },
      animation: {
        "color-animation": "color-animation 2s infinite",
      },

      backgroundImage: {
        "gradient-text": "radial-gradient(#64748b 5%, #334155 15%, #1e293b 50%, #0f172a 70%, #020617 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
