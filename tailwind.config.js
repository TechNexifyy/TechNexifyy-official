const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ['regular'],
        primaryBold: ['bold'],
        primarySemibold: ['semibold'],
        primaryMedium: ['medium'],
      },
      backgroundImage: {
        'mobile-app': "url('./assets/images/img/mobile_app.jpeg')", 
        'ux': "url('./assets/images/img/ux.jpg')", 
        'web': "url('./assets/images/img/web.png')", 
        'devops': "url('./assets/images/img/devops.png')", 
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }
      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }
      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }
      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
      'sm': { 'max': '640px' },
      // => @media (max-width: 639px) { ... }
      'xs': { 'max': '412px'},
       // => @media (max-width: 410px) { ... }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
});

