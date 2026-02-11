/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
       sans: [
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      ],
    },
   extend: { 
    animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'infinite-scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

