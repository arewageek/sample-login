/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#007BFF', // primary-background
          200: '#fff', // primary-text
        },
        secondary: {
          100: '#FFF', // secondary background
          200: '#212529', //secondary text
        },
        accent: {
          100: '#FFC107', // first accent
        },
      }
    },
  },
  variants: {
    extend: {
      colors: ['dark'],
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}