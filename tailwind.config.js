/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'md': '12px',
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};