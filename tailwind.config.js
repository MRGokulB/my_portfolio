/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-950': '#101522',
        'dark-900': '#181b2d',
        'dark-700': '#232946',
        'accent-blue': '#00d4ff',
        'accent-purple': '#a855f7',
        'accent-pink': '#ec4899',
        dark: {
          100: '#1a1a2e',
          200: '#16213e',
          300: '#0f3460',
        },
        accent: {
          blue: '#00d4ff',
          purple: '#a855f7',
          pink: '#ec4899',
        },
        
      },
      borderColor: {
        border: '#1a1a2e', 
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}