/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  endOfLine: 'auto',
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  plugins: [require('prettier-plugin-tailwindcss')]
}
