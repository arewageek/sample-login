/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f5f5f5', // primary-background
          200: '#555', // primary-text
        },
        secondary: {
          100: '#FFF', // secondary background
          200: '#333', //secondary text
        },
        accent: {
          100: '#007BFF', // first accent,
          200: '#0056B3'
        },
        input: {
          100: '#f9f9f9',
          200: '#ccc',
          300: '#333'
        }
      }
    },
  },
  variants: {
    extend: {
      // colors: ['dark'],
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}