import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'C1': '#ffffff'
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      const newHover = {
        '.customHover': {
          '&:hover': {
            backgroundColor: '#f69a97',
          }
        }
      }
      addUtilities(newHover, ['responsive', 'hover'])
    })
  ],
}