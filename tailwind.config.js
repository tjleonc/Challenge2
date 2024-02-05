/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {

      colors: {
        "gray-350": "hsl(0, 0%, 50%)",
        "yellow-350":"hsl(47, 88%, 63%)"
      },

      fontFamily: {
        Figtree:["'Figtree', sans-serif;"]
      }


    },
  },
  plugins: [],
}

