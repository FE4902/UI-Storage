/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'block': '.25em .25em var(--shadow-block-shadow-color)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      }
    },
  },
  plugins: [],
}