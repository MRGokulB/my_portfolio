/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#fafaf9',
        surface: '#f3f3f2',
        'surface-elevated': '#ffffff',
        primary: '#121316',
        secondary: '#4b515d',
        muted: '#8b93a0',
        accent: {
          DEFAULT: '#ff3b30',
          hover: '#e03126',
          glow: 'rgba(255, 59, 48, 0.25)',
        },
        'accent-emerald': '#39ff88',
        'accent-cobalt': '#007ba7',
        'accent-gold': '#f4d9a0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06)',
        'accent': '0 12px 28px -6px rgba(255, 59, 48, 0.35)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
