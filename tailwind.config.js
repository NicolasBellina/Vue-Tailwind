/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'custom-blog': 'rgb(80 70 229)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]  
}

