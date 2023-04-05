/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1280px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { 
            height : '5rem'
           },
          '100%': { height: '100%' },
        }
      },
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        league: ['league spartan', 'sans-serif'],
      },

      backgroundPosition : {
        // 'center' : '50%',
      },

      backgroundImage: {
        'seen-pattern' : "linear-gradient(rgba(255, 255, 255, .3), rgba(255, 255, 255, .3)), url('../imgs/first-photo.jpeg')",
        'image1-pattern' : "url('../imgs/gallery1-3.png')",
        'cleankitchen-pattern' : "linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('../imgs/clean-kitchen.jpg')",
        'solutionkitchen-pattern' : "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, .2)), url('../imgs/solution-kitchen.jpg')",
        'askedquestions-pattern' : "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, .2)),  url('../imgs/askedimage.jpg')",
      },

      colors: {
        'safak-red': '#BC1A45',
        'safak-melon': '#FFD369',
        'safak-grey': '#DDDDDD',
        'safak-white': '#F7F7F7',
        'safak-coffe': '#1f1d1a',
        'safak-extra-grey': '#BBBBBB',
      },

      spacing: {
        '128': '32rem',
        '90': '22rem',
        '100': '30.5rem',
        '136': '36rem',
        '156': '40rem',
      },
    },
  },
  plugins: [],
}