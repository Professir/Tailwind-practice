/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
        keyframes: {
          animate: {
            '0%': {transform: 'perspective(1000px) rotateX(0deg)'},
            '100%': {transform: 'perspective(1000px) rotateX(360deg)'},
          },
        },
        animation: {
          'animate': 'animate 15s linear infinite',
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
        },
      colors: {
        'col-bod': '#222',
        'col-t': '#ec9535',
        'col-bg': 'rgba(0, 0, 0, .25)',
      },
      dropShadow: {
        '1x': '0 2px 5px rgba(0, 0, 0, .25)',
      },
    },
  },
  plugins: [],
}