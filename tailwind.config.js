/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#6A8ECA',
          800: '#2D4C7F',
          950: '#344054'
        },
        gray: {
          50: '#f6f7f9',
          100: '#edeef1',
          200: '#D9D9D9',
          300: '#b3b9c6',
          400: '#8a94a6',
          500: '#667085',
          600: '#707070',
          700: '#464c5e',
          800: '#3d424f',
          900: '#363a44',
          950: '#24262d'
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-primeui'),
    require('@tailwindcss/typography')
  ],
}

