/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'indi-box': '0 -10px 0 0 #222327',
      },
      colors: {
        'clr': '#222327',
        'grena': '#29fd53',
      },
    },
  },
  plugins: [],
}