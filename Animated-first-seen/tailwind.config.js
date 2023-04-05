/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        bubble: {
          '0%': {transform: 'translateY(0)', opacity: '0'},
          '50%': {opacity: '1'},
          '70%': {opacity: '1'},
          '100%': {transform: 'translateY(-80vh)', opacity: '0'},
        }
      },
      animation: {
        'bubble': 'bubble 7s linear infinite',
      },
      backgroundImage: {
        'side-b': "linear-gradient(#00545d, #000729)",
      },
      spacing: {
        'h1-m': '10px 0 30px',
        'menu-m': '40px auto 0',
      },
      backgroundImage: {
        'hero-img': 'url(../imgs/background.png)',
      },
      colors: {
        'col-b': '#fbfcfd',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}