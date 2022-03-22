module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rainbow: "rainbow 1s infinite",
      },

      keyframes: {
        rainbow: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(5)",
          },
          "66%": {
            transform: "scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
