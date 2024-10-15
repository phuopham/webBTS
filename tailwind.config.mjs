/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      brightsky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        400: "#7dd3fc",
        500: "#38bdf8",
      }, // Accent colors, used mainly for star color, heading and buttons
      sky: {
        100: "#e0f2fe",
        200: "#0ea5e9",
        300: "#0284c7",
        400: "#0369a1",
        500: "#075985",
        600: "#0c4a6e",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
