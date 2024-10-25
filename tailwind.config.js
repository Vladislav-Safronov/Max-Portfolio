/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white1': '#FFFCF2',
        'grey1': '#CCC5B9',
        'grey2': '#403D39',
        'grey3': '#252422',
        'red1': '#D61204', 
      },
      backgroundImage: {
        'scratches': "url('./assets/img/scratches.png')",
      },
      fontFamily: {
        'rubik': ['Rubik'],
        'truet': ['Truet'],
      },
    },
  },
  plugins: [],
}

