/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: '#0D6EFD',
        'brand-blue': '#0D6EFD',
        'brand-blue-2': '#1E90FF',

        // Surfaces
        'surface-1': '#ffffff',
        'surface-2': '#f8fafc',

        // Text Colors
        'text-main': '#1A1A1A',
        'text-medium': '#6C757D',
        'text-light': '#ADB5BD',

        // Background Colors
        'bg-cream': '#FFF9F5',
        'bg-pink': '#FFF0F0',
        'bg-blue': '#F0F8FF',
        'bg-mint': '#F0FFF4',
        'bg-lavender': '#F5F0FF',

        // Dark Theme
        'dark-100': '#0f1624',
        'dark-200': '#181b2d',
        'dark-700': '#232946',
        'dark-900': '#101522',
        'dark-950': '#101522',

        // Accent Colors
        accent: {
          blue: '#00d4ff',
          purple: '#7C3AED',
          pink: '#ec4899',
          teal: '#06B6D4',
          orange: '#FF9E4A',
        },

        // Integration Colors
        'aws-yellow': '#FFEBCC',
        'gcloud-blue': '#D9E7FD',
        'dropbox-blue': '#CCDFFF',
        'azure-cyan': '#CCE5EE',
        'odrive-blue': '#CDE0F1',
        'box-blue': '#CCD7E5',
        'lavender': '#DADCF1',
        'sf-blue': '#CFEBF8',
        'sharepoint-green': '#CDE7E8',
        'icloud-blue': '#DCE5FF',
        'github-gray': '#1F1F1F',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },

      borderColor: {
        border: '#1a1a2e',
        muted: 'rgba(15, 23, 42, 0.06)',
      },

      animation: {
        // Entrance Animations
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-up': 'slideUp 0.36s cubic-bezier(.22,1,.36,1)',

        // Pulse & Glow
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },

      keyframes: {
        // Fade Up
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        // Slide Up
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        // Pulse & Glow
        pulseSlow: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.8)' },
        },
      },

      boxShadow: {
        'sm': '0 6px 14px rgba(2,6,23,0.04)',
        'md': '0 18px 40px rgba(16,24,40,0.06)',
        'lg': '0 30px 60px rgba(2,6,23,0.06)',
      },
    },
  },
  plugins: [],
}