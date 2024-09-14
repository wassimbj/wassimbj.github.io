module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "rgb(0, 22, 28)",
        lightGreen: "rgb(148, 183, 84)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
