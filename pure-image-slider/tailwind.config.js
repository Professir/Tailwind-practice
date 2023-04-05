/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      flex: {
        'fl-img': '1 0 100%',
      },
      boxShadow: {
        'slider-box': '0 1.5rem 3rem -.75rem hsla(0, 0%, 0%, .25)',
      },
    },
  },
  plugins: [],
}