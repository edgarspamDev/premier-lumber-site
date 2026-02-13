/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hormozi-style: high contrast, bold
        primary: {
          DEFAULT: '#ea580c', // Darker orange - more refined, less neon
          dark: '#c2410c',
          darker: '#9a3412',
          light: '#fff7ed',
          glow: 'rgba(234, 88, 12, 0.4)',
        },
        accent: {
          DEFAULT: '#fbbf24', // Bright yellow-gold for urgency
          hover: '#f59e0b',
          dark: '#d97706',
        },
        charcoal: '#0f0f0f', // True dark - not muddy
        dark: {
          DEFAULT: '#0f0f0f',
          soft: '#1a1a1a',
          muted: '#2a2a2a',
        },
        brand: {
          brown: '#92400e',
          cream: '#fefcf8', // Slightly warmer
          surface: '#ffffff',
          text: '#0f0f0f',
          muted: '#525252',
        },
        success: '#22c55e',
      },
      fontFamily: {
        sans: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk Variable"', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Hormozi-style: bigger, bolder headlines
        'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-sm': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-sm': ['1.875rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #0f0f0f',
        'brutal-sm': '2px 2px 0px 0px #0f0f0f',
        'brutal-primary': '4px 4px 0px 0px #c2410c',
        'glow': '0 0 40px rgba(234, 88, 12, 0.3)',
        'glow-lg': '0 0 60px rgba(234, 88, 12, 0.4)',
        'lift': '0 20px 40px -10px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        'cta-gradient': 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
