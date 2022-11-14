// const colors = require('tailwindcss/colors')

const withOpacity = (v) => `rgba(${v}, <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  // darkMode: 'media',
  theme: {
    extend: {
      backgroundColor: {
        //utilities like `bg-base` and `bg-primary`
        based: withOpacity('var(--color-base)'),
        accent: withOpacity('var(--color-accent)'),
        weak: withOpacity('var(--color-weak)')
      },
      textColor: {
        //like `text-base` and `text-primary`
        based: withOpacity('var(--color-text-base)'),
        weak: withOpacity('var(--color-weak)')
      },
      borderColor: {
        weak: withOpacity('var(--color-weak)')
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}
