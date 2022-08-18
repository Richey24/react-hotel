/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  
  theme: {
    extend: {

      colors: {
        primary: {
          100: "#A3E0E5",
          200: "#6D9599",
          300: "#486466",
          400: "#5B7D80",
          500: "#243233",
          'muted': "#EBF6F7",
          'white': "#F7FAFA"
        },

        secondary: {
          100:"#CC9E7D",
          200:"#99765E",
          300:"#80634E",
          400:"#664F3E",
          500:"#33271F",
          'muted': "#F2E4DA"
        }
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}
