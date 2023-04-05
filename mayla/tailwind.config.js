/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'container-bg': "linear-gradient(rgba(0, 0, 0, 0.3), transparent), url('../images/background.png')",
        'mayla-back': "url(../images/back.png)",
      },
      colors: {
        'a-text': '#fff'
      },
      fontSize: {
        '12xl': '12rem'
      },
      lineHeight: {
        '14': '10rem'
      },
      animation: {
        'back-ani': 'back 20s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}