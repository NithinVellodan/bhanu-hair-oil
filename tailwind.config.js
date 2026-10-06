/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#00140c',
          900: '#002719',
          800: '#003B24',
          700: '#004d2f',
          600: '#00663f',
        },
        gold: {
          100: '#FDF7E7',
          200: '#F7E7BA',
          300: '#F5C542',
          400: '#E5BD3B',
          500: '#D4AF37',
          600: '#B89326',
          700: '#8C6F19',
        },
        cream: {
          50: '#FCFBF7',
          100: '#FFF8E7',
          200: '#F4ECE1',
          300: '#E8DCCB',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5C542 0%, #D4AF37 50%, #AA820A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF8E7 50%, #D4AF37 100%)',
        'forest-gradient': 'linear-gradient(180deg, #002719 0%, #003B24 50%, #001f14 100%)',
        'radial-gold': 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,39,25,0) 70%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
