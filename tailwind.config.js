const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#1F1F1F",
        gray: "#9EA3AC",
        primary: "#7248F6",
      },
      fontFamily: {
        sans: ["Cairo", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
