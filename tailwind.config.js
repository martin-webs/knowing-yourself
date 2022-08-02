/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './views/**/*.ejs',
  ],
  theme: {
    fontFamily : {
      'montserrat': ['Montserrat', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'source-sans-3': ['Source Sans 3', 'sans-serif']
    },
    extend: {
      dropShadow: {
        '3xl': '0px 6px 7px rgba(169, 170, 173, 1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
