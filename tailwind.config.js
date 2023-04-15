/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Manrope',
      },
      colors: {
        'purple-brand': '#8C82FC',
        'gray-brand': '#22293E',
        'gray-brand-2': '#222831',
      },
    },
  },
  plugins: [],
};
