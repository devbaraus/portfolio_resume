module.exports = {
  darkMode: false,
  jit: false,
  theme: {
    colors: {
      dark: '#212121',
      medium: '#303030',
      light: '#f0f0f7',
      primary: '#ee5622',
    },
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
