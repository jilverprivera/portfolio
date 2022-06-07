const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7248F6",
        secondary: "#FCDA69",
        gray: "#9EA3AC",
      },
      fontFamily: {
        sans: ["Cairo", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
