/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'custom-blog': 'rgb(80 70 229)',
      },
    },
  },
  plugins: [],
  
}

