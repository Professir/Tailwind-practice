/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },

      colors: {
        'safak-red': '#BC1A45',
        'safak-melon': '#FFD369',
        'safak-grey': '#DDDDDD',
        'safak-white': '#F7F7F7',
      },

      spacing: {
        '128': '32rem',
        '90': '22rem',
      },
    },
  },
  plugins: [],
}
