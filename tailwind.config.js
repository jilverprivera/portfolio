const { fontFamily, screens } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    screens: { xxs: '270px', xs: '350px', '3xl': '1920px', ...screens },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      },
      fontFamily: {
        sans: ['Barlow', ...fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-text-stroke')]
}

