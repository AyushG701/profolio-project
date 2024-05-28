/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
      },
      colors: {
        primary: "#5a67d8",
        secondary: "#7f9cf5",
      },
    },
  },
  plugins: [],
};
