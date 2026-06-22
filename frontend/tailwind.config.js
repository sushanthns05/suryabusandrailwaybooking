/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1F3A',
          800: '#143054',
          700: '#1D4170',
        },
        gold: {
          500: '#F4B400',
          400: '#F5C22A',
          600: '#D49D00',
        },
        lightGray: '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
