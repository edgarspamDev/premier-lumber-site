import forms from '@tailwindcss/forms'
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope Variable', 'Manrope', 'Segoe UI', 'sans-serif'],
        heading: ['Space Grotesk Variable', 'Space Grotesk', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff3e6',
          100: '#ffe2c4',
          200: '#ffcb94',
          300: '#ffa75a',
          400: '#f97316',
          500: '#ea580c',
          600: '#c2410c',
          700: '#9a3412',
          800: '#7c2d12',
          900: '#4f1d0a',
        },
        ink: '#0f1729',
        ash: '#1f2a3d',
        sand: '#f6f1e8',
        slate: '#e6e5e3',
        forest: '#0b4336',
      },
      boxShadow: {
        card: '0 18px 48px rgba(16, 24, 40, 0.12)',
        subtle: '0 10px 28px rgba(16, 24, 40, 0.08)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
        'grainy-gradient':
          'linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(234, 88, 12, 0.12), rgba(14, 165, 233, 0.1))',
      },
    },
  },
  plugins: [forms],
})
