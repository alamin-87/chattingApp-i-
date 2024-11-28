/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brandcolor': '#B0D8DA',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '35px',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '12rem',
      },
    },
    fontFamily: {
      'poppins': ["Rubik", "serif"],
     
    }
  },
  plugins: [],
}