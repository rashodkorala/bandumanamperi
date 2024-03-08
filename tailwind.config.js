/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        systemGray: "#8E8E93",
        systemGray2: "#636366",
      }
    },
    screens: {
      xxsm: "280px",
      xsm: "370px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
