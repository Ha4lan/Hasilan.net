/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
