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
        background: '#fcfcfc', // Premium Off-White
        surface: '#ffffff',    // True White
        primary: '#111111',    // Rich Charcoal/Black
        secondary: '#444444',  // Muted Dark
        muted: '#999999',
        accent: '#d4af37',     // Premium Gold
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