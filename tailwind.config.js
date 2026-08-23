/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Keeping class just in case, but forcing light mode
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // True White
        surface: '#f5f5f5',    // Light Gray
        primary: '#000000',    // True Black
        secondary: '#333333',  // Dark Gray
        muted: '#999999',
        accent: '#ff3b30',     // International Orange
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}