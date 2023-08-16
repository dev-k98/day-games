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
        custom_oxford_blue: { DEFAULT: "#14213d" },
        custom_orange_web: { DEFAULT: "#fca311" },
        custom_purple: { DEFAULT: "#350571" },
        custom_purple_mild: { DEFAULT: "#42048A" },
        custom_purple_light: { DEFAULT: "#4F04A3" },
        custom_purple_extra_light: { DEFAULT: "#5C03BC" },
        custom_honeydew: { DEFAULT: "#f1faee" },
        custom_non_photo_blue: { DEFAULT: "#a8dadc" },
        custom_cerulean: { DEFAULT: "#457b9d" },
        custom_berkeley_blue: { DEFAULT: "#1d3557" },
        custom_seasalt: { DEFAULT: "#f8f9fa" },
        custom_anti_flash_white: { DEFAULT: "#e9ecef" },
        custom_platinum: { DEFAULT: "#dee2e6" },
        custom_french_gray: { DEFAULT: "#ced4da" },
        custom_french_gray2: { DEFAULT: "#adb5bd" },
        custom_slate_gray: { DEFAULT: "#6c757d" },
        custom_outer_space: { DEFAULT: "#495057" },
        custom_onyx: { DEFAULT: "#343a40" },
        custom_eerie_black: { DEFAULT: "#212529" },
      },
      fontFamily: {
        Lato: ["Lato"],
        Montserrat: ["Montserrat"],
        Oswald: ["Oswald"],
        Poppins: ["Poppins"],
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
export default config;
