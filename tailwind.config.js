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
        "dark-blue-lighter": "#074374",
        "dark-blue": "#032e52",
        "darkest-blue": "#04202b",
        "light-yellow": "#fffff3",
        "normal-orange": "#fd8f39",
        "dark-orange": "#bd4924",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      keyframes: {
        "bounce-in": {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "bounce-in": "bounce-in 0.5s",
        "bounce-in-reverse": "bounce-in 0.5s reverse",
      },
    },
  },
  plugins: [],
};
