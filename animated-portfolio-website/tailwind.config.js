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
        "slideBottom": 'slideBottom 1s ease forwards',
        "slideLeft": 'slideLeft 1s ease forwards',
        "zoomIn": 'zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite',
      },
      keyframes: {
        slideRight: {
          '0%': {transform: 'translateX(-100px)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        slideTop: {
          '0%': {transform: 'translateY(100px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        slideBottom: {
          '0%': {transform: 'translateY(-100px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        slideLeft: {
          '0%': {transform: 'translateX(100px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        zoomIn: {
          '0%': {transform: 'scale(0)', opacity: '0'},
          '100%': {transform: 'scale(1)', opacity: '1'},
        },
        floatImage: {
          '0%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-24px)'},
          '100%': {transform: 'translateY(0)'},
        },
      },
    },
  },
  plugins: [],
}