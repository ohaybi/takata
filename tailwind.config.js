/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      fontFamily: {
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#A8FF35",
        "hitam-100": "#1D1F1C",
        "hitam-80": "#292B28",
        "hitam-50": "#939393",
        "hitam-10": "#D9D9D9",
        putih: "#F4F7F4",
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        popSetting: {
          "0%, 100%": { bottom: "-10%" },
          "20%, 60%": { bottom: "3vh" },
        },
        stabiloSetting: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        pop: "popSetting 2s ease-in-out",
        stabilo: "stabiloSetting 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
