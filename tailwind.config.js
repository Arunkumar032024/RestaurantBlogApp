/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        
      },
      backgroundImage:{
        'banner-image': "url('./assets/images/index/banner.webp')"
      },
      screens:{
        'xs': '400px'
      }

    },
  },
  plugins: [],
}

