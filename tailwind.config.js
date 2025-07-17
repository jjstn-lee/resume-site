/** @type {import('tailwindcss').Config} */

const daisyui = require('daisyui');

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backdropFilter: {
        'grainy': 'contrast(1.2) brightness(0.95)',
      },
      fontFamily: {
        cyber: ['cyber', 'sans-serif']
      }
    },
  },
  plugins: [
    daisyui,
    // plugin(function ({ addBase }) {
    //   addBase({
    //     '@font-face': {
    //       fontFamily: 'cyber',
    //       fontWeight: 'normal',
    //       fontStyle: 'normal',
    //       src: 'url("./assets/fonts/SDCyberPunkCityDemo.otf)',
    //     },
    //   });
    // }),
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'dracula',
      'test',
    ],
  },
}
