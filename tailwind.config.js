// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purple_primary: '#7209B6',
        purple_normal: '#C367FF',
        blue_primary: '#0CD5F0',
        blue_normal: '#76EFFF',
        blue_light: '#DBFBFF',
        blue_cero: '#F6FDFF',
      },
    },
    fontFamily: {
      poppins: ['var(--font-poppins)', ...fontFamily.sans]
    }
  },
  plugins: [],
}
