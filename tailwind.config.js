/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E6C97F',
          DEFAULT: '#C9A24B',
          dark: '#9A7829',
          muted: '#6E551B',
          glow: 'rgba(201, 162, 75, 0.25)',
        },
        emerald: {
          50: '#F0F9F5',
          900: '#061611',
          950: '#030D0A',
          dark: '#061611',
          darker: '#030D0A',
          DEFAULT: '#0A2019',
          surface: '#0F2C23',
          card: '#0C241D',
          border: 'rgba(201, 162, 75, 0.2)',
        },
        ivory: {
          light: '#FFFFFF',
          DEFAULT: '#FAF6EE',
          muted: '#D5CEC2',
          dark: '#9C968A',
        },
        richBlack: '#050807',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(201, 162, 75, 0.15)',
        'gold-md': '0 4px 20px rgba(201, 162, 75, 0.25)',
        'gold-lg': '0 8px 32px rgba(201, 162, 75, 0.35)',
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(201, 162, 75, 0.08)',
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle, rgba(201,162,75,0.15) 0%, rgba(5,8,7,0) 70%)',
        'radial-emerald': 'radial-gradient(circle, rgba(15,44,35,0.8) 0%, rgba(5,8,7,0) 80%)',
      }
    },
  },
  plugins: [],
}
