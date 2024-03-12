/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.tsx', './src/components/**/*.tsx'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-primary)',
      },
    },
  },
}
