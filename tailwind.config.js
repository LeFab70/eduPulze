/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ep: {
          navy: '#0B2545',
          navyDark: '#07182E',
          green: '#00A651',
          greenHover: '#008742',
          lightGreen: '#E6F6ED',
          lightBg: '#F4F6F9',
          momoYellow: '#FFCC00',
          orangeMoney: '#FF6600',
          moovBlue: '#0066B3',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
