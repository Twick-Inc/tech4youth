/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // YouthTech Brand Colors
        'youth-primary': '#2f868f',    // Primary green color
        'youth-orange': '#ffac00',     // Orange accent color
        'youth-red': '#d1382e',        // Red accent color
        'youth-yellow': '#ffd03e',     // Yellow accent color
        
        // Color variations for different states
        'youth-primary-dark': '#256a70',   // Darker shade of primary
        'youth-orange-dark': '#e69900',    // Darker shade of orange
        'youth-red-dark': '#b82e25',      // Darker shade of red
        'youth-yellow-dark': '#e6b837',    // Darker shade of yellow
      },
    },
  },
  plugins: [],
}
