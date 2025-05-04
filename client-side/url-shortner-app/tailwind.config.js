/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner: "url('./src/assets/bg.png')",
      },
    },
  },
  plugins: [], // ✅ No @tailwindcss/vite here
}
