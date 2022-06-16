const { fontFamily, screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "270px",
      xs: "350px",
      ...screens,
    },
    extend: {
      colors: {
        primary: "#7248F6",
        secondary: "#FCDA69",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
