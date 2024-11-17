/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop: ['Poppins'], 
      },
      backgroundImage: {
        'banner': "url('/src/assets/images/bannar.jpg')", 
      },
      colors: {
        customCyan: 'rgba(58, 58, 58, 0.7)', 
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

