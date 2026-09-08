// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        yellow: '#efc603',
        accent: '#f97316',
        'accent-soft': '#fb923c',
        bg: '#101014',
        surface: '#1b1b1f',
        card: '#232329',
        line: '#33333b',
        ink: '#e9e9ec',
        muted: '#a2a2ad',
        faint: '#75757f',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': {opacity: 0, transform: 'translateY(8px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s ease both',
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
