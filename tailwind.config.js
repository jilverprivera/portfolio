const { fontFamily, screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "270px",
      xs: "350px",
      ...screens,
    },
    extend: {
      fontFamily: {
        ClashGroteskLight: ["ClashGrotesk-Light", ...fontFamily.sans],
        ClashGroteskRegular: ["ClashGrotesk-Regular", ...fontFamily.sans],
        ClashGroteskMedium: ["ClashGrotesk-Medium", ...fontFamily.sans],
        ClashGroteskSemibold: ["ClashGrotesk-Semibold", ...fontFamily.sans],
        ClashGroteskBold: ["ClashGrotesk-Bold", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
