/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#343B6E",
        secondary: "#FFE3A5",
        accent: "#F15D41",
        light: "#FFEDC4",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        melody: ["Catchy Melody", "cursive"],
      },
    },
  },
  plugins: [],
};
