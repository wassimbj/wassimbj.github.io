module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#003543",
        lightGreen: "#B1DF5A",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
