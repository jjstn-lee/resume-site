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
      // fontfamily: {
      //   serif: ['Georgia', 'Georgia', 'serif'],
      // }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'light',
      'dark',
      'dracula',
      'test',
    ],
  },
}
