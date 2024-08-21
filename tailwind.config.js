/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "#2f468c",
          secondary: "#1e9eef",
          dark: "#0e0c15",
          light: "#f2f2f2",
        },
        stroke: {
          1: "#CCCCCC",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", ...fontFamily.sans],
        clash: "var(--font-clash)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
        35: ".35",
        40: ".40",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[31.25rem] mx-auto px-5 md:px-10 md:max-w-[60rem] lg:max-w-[75rem] lg:px-15 xl:max-w-[83.3125rem]":
            {},
        },
        ".h1": {
          "@apply text-color-light text-center tracking-[.03em] font-semibold text-[2rem] leading-[2.8rem] md:text-[2.5rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.875rem] leading-[2.25rem] text-center md:text-[2.25rem] md:leading-[2.7rem] lg:text-[2.75rem] lg:leading-[3.3rem]":
            {},
        },
        ".h3": {
          "@apply text-[1.375rem] leading-normal md:text-[1.5rem]": {},
        },
        ".body-1": {
          "@apply text-color-light text-[1rem] font-satoshi leading-[1.5rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".tagline": {
          "@apply font-satoshi font-light text-[1rem] lg:text-[1.125rem]": {},
        },
        ".button": {
          "@apply capitalize px-6 py-3 rounded-[0.3125rem] font-satoshi font-medium text-[1rem] md:text-[1.125rem]":
            {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
