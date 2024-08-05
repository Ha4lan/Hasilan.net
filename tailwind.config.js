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
        },
        '.post': {
          'display': 'inline-block',
          'width': '48%',
          'margin-top': '4px',
          'padding': '15px',
          'position': 'relative'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
