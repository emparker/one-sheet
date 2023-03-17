/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black' : '#000',
      'white': '#fff',
      'dark-green': '#264653',
      'light-green': '#2a9d8f',
      'dark-orange': '#e76f51',
      'light-orange': '#f4a261',
      'yellow': '#e9c46a',
      'army-green' : '#969696',
      'next-blue' : '#0070f3',
      'about-blue' : '#accae0',
      'sand' : '#da8c4c',
    }, 
    extend: {
      // fontFamily: {
      //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // },
      backgroundImage: {
        'black_sand' : "url('../public/images/adrien-olichon-RCAhiGJsUUE-unsplash.jpg')",
        'pink_clouds' : "url('../public/images/laura-vinck-Hyu76loQLdk-unsplash 1 (1).jpg')",
        'greens' : "url('../public/images/jeremy-bishop-uAfZBP-GtiA-unsplash.jpg')",
        'desert_scape' : "url('../public/images/pawel-wieladek-fMH1QVrWA-w-unsplash.jpg')",
        'arrow_vector' : "url('../public/images/arrow-vector.png')",
        // 'home_bg_img' : "url('../public/images/rainbow-vector.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
