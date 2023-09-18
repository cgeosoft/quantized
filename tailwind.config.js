/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{pug,yml,md}"
  ],
  theme: {
    fontFamily: {
      sans: ["Fira Mono", "serif"],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff9300',
          '50': "#fff2e0",
          '100': "#ffdfb3",
          '200': "#ffc980",
          '300': "#ffb34d",
          '400': "#ffa326",
          '500': "#ff9300",
          '600': "#ff8b00",
          '700': "#ff8000",
          '800': "#ff7600",
          '900': "#ff6400",
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
