/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "dark-blue": "#032e52",
        "darkest-blue": "#04202b",
        "light-yellow": "#fffff3",
        orange: "#fd8f39",
        "dark-orange": "#bd4924",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
