/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        'p-px-56': '56px',
      },
      fontFamily:{
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
