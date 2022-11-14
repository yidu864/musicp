// const colors = require('tailwindcss/colors')

const withOpacity = (v) => `rgba(${v}, <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // 基础色，主色
        pbase: '#6ab7f2',
        // 基础色，字体色
        ptbase: '#ffffff'
      },
      backgroundColor: {
        //utilities like `bg-base` and `bg-primary`
        based: '#6ab7f2',
        accent: withOpacity('var(--color-accent)'),
        weak: withOpacity('var(--color-weak)')
      },
      textColor: {
        //like `text-base` and `text-primary`
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
