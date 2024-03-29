const { fontFamily, screens } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans]
      },
      screens: { '3xl': '1920px', ...screens }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-text-stroke')
  ]
}

