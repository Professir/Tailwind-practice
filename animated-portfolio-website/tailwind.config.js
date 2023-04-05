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
      padding: {
        'h-pad': '4.5rem 10% 0',
      },
      margin: {
        'soc-a': '30px 15px 30px 0',
      },
      boxShadow: {
        'a-hov-shado': '0 0 20px #0ef',
        'btn-shado': '0 0 10px #0ef',
      },
      animation : {
        "slideRight": 'slideRight 1s ease forwards',
        "slideTop": 'slideTop .5s ease forwards',
      },
      keyframes: {
        slideRight: {
          '0%': {transform: 'translateX(-100px)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        slideTop: {
          '0%': {transform: 'translateY(-100px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
      },
    },
  },
  plugins: [],
}