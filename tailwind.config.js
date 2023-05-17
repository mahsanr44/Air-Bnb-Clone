/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    }, 
    extend: {},
  },
  plugins: [],
}