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
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.2)'
      }
    },
    colors: {
      'back-safak': '#607d8b',
      'bg-from': '#f9f9f9',
      'bg-to': '#d9d9d9',
      'tea-from': '#c57e65',
      'tea-to': '#e28462',
      'handle-b': '#dcdcdc',
      'e7': '#e7e7e7',
    },
  },
  plugins: [],
}