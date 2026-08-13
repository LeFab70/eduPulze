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
          navyMid: '#12315A',
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
        heading: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        poster: '0.02em',
      },
      boxShadow: {
        phone: '0 40px 80px -20px rgba(11, 37, 69, 0.45), 0 12px 28px -8px rgba(0, 166, 81, 0.18)',
        poster: '0 24px 60px -20px rgba(11, 37, 69, 0.22)',
        lift: '0 18px 40px -16px rgba(11, 37, 69, 0.28)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
