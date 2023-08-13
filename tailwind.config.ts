import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-in": "slide .5s forwards ease-in-out",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        buff: { DEFAULT: "#cb997e" },
        desert_sand: { DEFAULT: "#ddbea9" },
        champagne_pink: { DEFAULT: "#ffe8d6" },
        ash_gray: { DEFAULT: "#b7b7a4" },
        sage: { DEFAULT: "#a5a58d" },
        reseda_green: { DEFAULT: "#6b705c" },
      },
    },
  },
  plugins: [],
};
export default config;
