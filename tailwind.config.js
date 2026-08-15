module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#102a2f",
        lightGreen: "#2fa88a",
        warmPaper: "#f7f5f1",
        ink: "#1f2937",
        accentSoft: "#eafaf5",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
