module.exports = {
  darkMode: false,
  jit: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'print': { raw: 'print' },
      },
      height: {
        'a4': '1272.5px'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'Roboto', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  purge: {
    content: ['dist/**/*.html'],
    options: {
      safelist: [],
    },
  },
}
