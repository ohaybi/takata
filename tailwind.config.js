/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      colors: {
        primary: "#fd5d2c",
        black: "#282626",
        gray: "#7A7672",
        "light-gray": "#CDC7C0",
        whiteOrange: "#FCF6EF",
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        popSetting: {
          "0%, 100%": { bottom: "-10%" },
          "20%, 60%": { bottom: "5vh" },
        },
      },
      animation: {
        pop: "popSetting 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
