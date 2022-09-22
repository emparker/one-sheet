/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-green': '#264653',
      'light-green': '#2a9d8f',
      'dark-orange': '#e76f51',
      'light-orange': '#f4a261',
      'white': '#fff',
      'yellow': '#e9c46a',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
