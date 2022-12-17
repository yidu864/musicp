// const colors = require('tailwindcss/colors')

// const withOpacity = (v) => `rgba(${v}, <alpha-value>)`

const colorMap = {
  // 主色
  base: '#6ab7f2',
  // 主要暗色
  baseDark: '#0e2656',
  // 默认字色，透明度0.75
  textBase: '#ffffff',
  // 绿色，按钮底色
  blue: '#409eff',
  green: '#56a052'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // 基础色，主色
        'p-base': colorMap.base,
        // 基础色，字体色
        'p-tbase': colorMap.textBase,
        // 主要暗色
        'p-dark': colorMap.baseDark,
        // 按钮底色
        'pbg-blue': colorMap.blue,
        // 按钮底色
        'pbg-green': colorMap.green
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}
