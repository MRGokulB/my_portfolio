export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#faf9f6',
        surface: '#f4f3ef',
        primary: '#18181b',
        secondary: '#52525b',
        muted: '#a1a1aa',
        accent: '#e11d48',
      },
      borderColor: {
        black: 'rgba(24, 24, 27, 0.12)',
        subtle: 'rgba(24, 24, 27, 0.06)',
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
