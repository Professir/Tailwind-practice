/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'body-bog': '#23242a',
        'box-bog': '#1c1c1c',
      },
      padding: {
        'inp-p': '20px 10px 10px',
        'spa-p': '20px 0 10px',
      },
    },
  },
  plugins: [],
}