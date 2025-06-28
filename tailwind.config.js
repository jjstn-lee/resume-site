/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontfamily: {
        serif: ['Georgia', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
