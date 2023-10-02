/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sora": ['Sora', 'sans-serif'],
        "work-sans": ['Work Sans', 'sans-serif'],
        "manrope": ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}