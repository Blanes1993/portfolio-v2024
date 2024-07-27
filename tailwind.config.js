/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

