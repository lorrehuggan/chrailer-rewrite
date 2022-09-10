/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        display: ['Yeseva One', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#4871ff',
        'primary-focus': '#2f52b5',
        'primary-content': '#1e3576',
        secondary: '#FF4C02',
        'secondary-focus': '#bf3902',
        'secondary-content': '#7d2501',
        accent: '#ffb700',
        'accent-focus': '#e6a500',
        'accent-content': '#996e00',
        success: '#34d399',
        'success-content': '#064e3b',
        warning: '#fbbf24',
        'warning-content': '#854d0e',
        error: '#f43f5e',
        'error-content': '#881337',
        base: {
          50: '#f4f4f5',
          100: '#eaeaea',
          200: '#cacacc',
          300: '#a9aaad',
          400: '#696a6f',
          500: '#292a31',
          600: '#25262c',
          700: '#1f2025',
          800: '#19191d',
          900: '#141518',
        },
      },
    },
  },
  plugins: [],
};
