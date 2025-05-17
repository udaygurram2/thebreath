/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: 'rgba(var(--light-green), 0.1)',
          100: 'rgba(var(--light-green), 0.2)',
          200: 'rgba(var(--light-green), 0.3)',
          300: 'rgba(var(--light-green), 0.4)',
          400: 'rgba(var(--light-green), 0.6)',
          500: 'rgba(var(--plant-green), 0.7)',
          600: 'rgba(var(--plant-green), 1)',
          700: 'rgba(var(--dark-green), 1)',
          800: 'rgba(var(--dark-green), 0.8)',
          900: 'rgba(var(--dark-green), 0.9)',
        },
        blue: {
          50: 'rgba(var(--light-blue), 0.1)',
          100: 'rgba(var(--light-blue), 0.2)',
          200: 'rgba(var(--light-blue), 0.3)',
          300: 'rgba(var(--light-blue), 0.4)',
          400: 'rgba(var(--light-blue), 0.6)',
          500: 'rgba(var(--water-blue), 1)',
          600: 'rgba(var(--dark-blue), 1)',
          700: 'rgba(var(--dark-blue), 0.8)',
          800: 'rgba(var(--dark-blue), 0.9)',
          900: 'rgba(27, 53, 89, 1)',
        },
        neutral: {
          50: 'rgb(var(--neutral-100))',
          100: 'rgb(var(--neutral-200))',
          200: 'rgb(var(--neutral-300))',
          300: 'rgb(var(--neutral-400))',
          400: 'rgb(var(--neutral-500))',
          500: 'rgb(var(--neutral-600))',
          600: 'rgb(var(--neutral-600))',
          700: 'rgb(var(--neutral-700))',
          800: 'rgb(var(--neutral-800))',
          900: 'rgb(var(--neutral-900))',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};