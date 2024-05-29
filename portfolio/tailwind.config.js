/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
      },
      colors: {
        primary: "#646cff",
        secondary: "#535bf2",
        backgroundDark: "#242424",
        backgroundLight: "#ffffff",
        buttonDark: "#1a1a1a",
        buttonLight: "#f9f9f9",
        textDark: "#213547",
        textLight: "rgba(255, 255, 255, 0.87)",
      },
      keyframes: {
        profileAnimate: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },
      animation: {
        profileAnimate: "profileAnimate 8s ease-in-out infinite 1s",
      },
      boxShadow: {
        insetWhite: "inset 0 0 0 9px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
