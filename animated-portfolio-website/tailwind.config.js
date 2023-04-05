/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'bg-c': '#1f242d',
        'a-hov': '#0ef'
      },
    },
  },
  plugins: [],
}