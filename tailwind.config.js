const { color } = require("./src/color");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: color,
      screens: {
        xs: "250px",
      },
    },
  },
  plugins: [],
};
