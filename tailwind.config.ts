/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        energy: '#FFA500',    // Bright Orange
        clarity: '#00D4FF',   // Aqua Blue
        growth: '#32CD32',    // Lime Green
        calm: '#D1D5DB',      // Cool Gray
        attention: '#FFDD57', // Bright Yellow
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
