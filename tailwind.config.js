/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        "serif": ["chaparral-pro", "serif"]
      },
    },
    listStyleType: {
      square: 'square',
    },
  },
  plugins: [],
}
