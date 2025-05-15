/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        canela: ['Canela', 'Georgia', 'serif'], // <-- use className="font-canela"
      },
    },
  },
  plugins: [],
}
