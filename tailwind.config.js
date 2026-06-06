/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#FFB347',
          500: '#FF6B35', // Primary Accent
          600: '#FF8C42', // Secondary Accent
          900: '#7a3217',
        },
        navy: {
          900: '#0B0B0B', // Dark Background
          800: '#121212', // Surface Color
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
