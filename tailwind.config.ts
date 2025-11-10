import type { Config } from "tailwindcss";
//eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

//eslint-disable-next-line
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette, //eslint-disable-line
} = require("tailwindcss/lib/util/flattenColorPalette"); //eslint-disable-line

export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        wave: "wiggle 2s linear infinite",
        come: "come 0.15s linear ",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        come: {
          "0%": {
            opacity: 0,
            transform: "translateX(50px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;
//eslint-disable-next-line
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
