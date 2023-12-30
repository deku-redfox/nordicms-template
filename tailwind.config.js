/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: '981px',
        xl: '1050px',
      },
      fontFamily: {
        'open-srg': '"Open Sans Rg"'
      },
      boxShadow: {
        header: '0 1px 2px rgba(255,255,255,0.25)'
      },
      colors: {
        primary: '#113545',
        'primary-light': '#235062',
        'primary-dark': '#132635',
        secondary: '#e9e7e3',
        third: '#a39e98',
        black40: 'rgba(0,0,0,0.4)'
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}

