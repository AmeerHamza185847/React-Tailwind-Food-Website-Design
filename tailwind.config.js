/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl':'1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl':'1536px',
      // => @media (min-width: 1536px) { ... }
      
    },
    extend: {
      screens: {
        'xs': '400px',
        // => @media (min-width: 400px) { ... }
      },
      backgroundImage: {
        'Search_background': "url('./assets/Images/bg1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

